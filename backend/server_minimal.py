from fastapi import FastAPI, HTTPException
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
import httpx
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field
from typing import List, Optional
import uuid
from datetime import datetime
import json


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# Supabase connection via httpx
supabase_url = os.environ.get('SUPABASE_URL')
supabase_key = os.environ.get('SUPABASE_KEY')

if not supabase_url or not supabase_key:
    raise ValueError("SUPABASE_URL and SUPABASE_KEY must be set in environment variables")

# Create the main app
app = FastAPI(title="Portfolio API", version="1.0.0")

# Configure CORS for production
allowed_origins = [
    "http://localhost:3000",  # Development
    "http://localhost:3001",  # Development alt
    "https://portifolio-victor.vercel.app",  # Production
    "https://portifolio-victor-*.vercel.app",  # Vercel preview deployments
    "https://*.vercel.app",  # All Vercel deployments
]

# For development, allow all origins
if os.environ.get("ENVIRONMENT") == "development":
    allowed_origins = ["*"]

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=allowed_origins,
    allow_methods=["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allow_headers=["*"],
)

# Configure logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

# Define Models
class StatusCheckCreate(BaseModel):
    client_name: str

class StatusCheckResponse(BaseModel):
    id: str
    client_name: str
    timestamp: datetime
    created_at: str

# Helper function for Supabase API calls
async def supabase_request(method: str, table: str, data: dict = None, params: dict = None):
    """Make HTTP requests to Supabase REST API"""
    headers = {
        "apikey": supabase_key,
        "Authorization": f"Bearer {supabase_key}",
        "Content-Type": "application/json",
        "Prefer": "return=representation"
    }
    
    url = f"{supabase_url}/rest/v1/{table}"
    
    async with httpx.AsyncClient() as client:
        if method == "GET":
            response = await client.get(url, headers=headers, params=params)
        elif method == "POST":
            response = await client.post(url, headers=headers, json=data)
        else:
            raise ValueError(f"Unsupported method: {method}")
    
    if response.status_code not in [200, 201]:
        raise HTTPException(status_code=response.status_code, detail=response.text)
    
    return response.json()

# Routes
@app.get("/")
async def root():
    return {"message": "Portfolio API - Hello World!"}

@app.get("/health")
async def health_check():
    try:
        # Test Supabase connection with a simple count query
        result = await supabase_request("GET", "status_checks", params={"select": "count"})
        return {
            "status": "healthy",
            "database": "connected",
            "timestamp": datetime.utcnow().isoformat()
        }
    except Exception as e:
        logger.error(f"Health check failed: {str(e)}")
        raise HTTPException(status_code=503, detail="Service unavailable")

@app.post("/status", response_model=StatusCheckResponse)
async def create_status_check(input: StatusCheckCreate):
    try:
        # Create status check data
        status_data = {
            "id": str(uuid.uuid4()),
            "client_name": input.client_name,
            "timestamp": datetime.utcnow().isoformat()
        }
        
        # Insert into Supabase
        result = await supabase_request("POST", "status_checks", data=status_data)
        
        if result:
            created_record = result[0]
            return StatusCheckResponse(
                id=created_record["id"],
                client_name=created_record["client_name"],
                timestamp=datetime.fromisoformat(created_record["timestamp"]),
                created_at=created_record["created_at"]
            )
        else:
            raise HTTPException(status_code=500, detail="Failed to create status check")
            
    except Exception as e:
        logger.error(f"Error creating status check: {str(e)}")
        raise HTTPException(status_code=500, detail=f"Internal server error: {str(e)}")

@app.get("/status", response_model=List[StatusCheckResponse])
async def get_status_checks():
    try:
        # Get all status checks from Supabase
        result = await supabase_request("GET", "status_checks", params={
            "select": "*",
            "order": "created_at.desc"
        })
        
        if result:
            return [
                StatusCheckResponse(
                    id=record["id"],
                    client_name=record["client_name"],
                    timestamp=datetime.fromisoformat(record["timestamp"]),
                    created_at=record["created_at"]
                )
                for record in result
            ]
        else:
            return []
            
    except Exception as e:
        logger.error(f"Error fetching status checks: {str(e)}")
        raise HTTPException(status_code=500, detail=f"Internal server error: {str(e)}")

# Vercel serverless function handler
handler = app

# Local development
if __name__ == "__main__":
    import uvicorn
    uvicorn.run("server_minimal:app", host="0.0.0.0", port=8000)

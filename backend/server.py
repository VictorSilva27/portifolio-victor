from fastapi import FastAPI, APIRouter, HTTPException
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from supabase import create_client, Client
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field
from typing import List, Optional
import uuid
from datetime import datetime


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# Supabase connection
supabase_url = os.environ.get('SUPABASE_URL')
supabase_key = os.environ.get('SUPABASE_KEY')

if not supabase_url or not supabase_key:
    raise ValueError("SUPABASE_URL and SUPABASE_KEY must be set in environment variables")

supabase: Client = create_client(supabase_url, supabase_key)

# Create the main app without a prefix
app = FastAPI()

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")


# Define Models
class StatusCheck(BaseModel):
    id: Optional[str] = Field(default_factory=lambda: str(uuid.uuid4()))
    client_name: str
    timestamp: Optional[datetime] = Field(default_factory=datetime.utcnow)
    created_at: Optional[str] = None

class StatusCheckCreate(BaseModel):
    client_name: str

class StatusCheckResponse(BaseModel):
    id: str
    client_name: str
    timestamp: datetime
    created_at: str

# Add your routes to the router instead of directly to app
@api_router.get("/")
async def root():
    return {"message": "Hello World"}

@api_router.post("/status", response_model=StatusCheckResponse)
async def create_status_check(input: StatusCheckCreate):
    try:
        # Create status check data
        status_data = {
            "id": str(uuid.uuid4()),
            "client_name": input.client_name,
            "timestamp": datetime.utcnow().isoformat()
        }
        
        # Insert into Supabase
        result = supabase.table("status_checks").insert(status_data).execute()
        
        if result.data:
            created_record = result.data[0]
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

@api_router.get("/status", response_model=List[StatusCheckResponse])
async def get_status_checks():
    try:
        # Get all status checks from Supabase
        result = supabase.table("status_checks").select("*").order("created_at", desc=True).execute()
        
        if result.data:
            return [
                StatusCheckResponse(
                    id=record["id"],
                    client_name=record["client_name"],
                    timestamp=datetime.fromisoformat(record["timestamp"]),
                    created_at=record["created_at"]
                )
                for record in result.data
            ]
        else:
            return []
            
    except Exception as e:
        logger.error(f"Error fetching status checks: {str(e)}")
        raise HTTPException(status_code=500, detail=f"Internal server error: {str(e)}")

# Include the router in the main app
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

# Health check endpoint
@api_router.get("/health")
async def health_check():
    try:
        # Test Supabase connection
        result = supabase.table("status_checks").select("count", count="exact").execute()
        return {
            "status": "healthy",
            "database": "connected",
            "timestamp": datetime.utcnow().isoformat()
        }
    except Exception as e:
        logger.error(f"Health check failed: {str(e)}")
        raise HTTPException(status_code=503, detail="Service unavailable")

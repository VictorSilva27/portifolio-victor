#!/usr/bin/env python3
"""
Teste simples para a API do portfolio usando Supabase
"""

import requests
import json
from datetime import datetime

# Configuração
BASE_URL = "http://localhost:8000/api"

def test_health():
    """Testa o endpoint de health check"""
    print("🔍 Testando health check...")
    response = requests.get(f"{BASE_URL}/health")
    print(f"Status: {response.status_code}")
    print(f"Response: {response.json()}")
    print()

def test_root():
    """Testa o endpoint root"""
    print("🔍 Testando endpoint root...")
    response = requests.get(f"{BASE_URL}/")
    print(f"Status: {response.status_code}")
    print(f"Response: {response.json()}")
    print()

def test_create_status():
    """Testa criação de status check"""
    print("📝 Testando criação de status check...")
    data = {
        "client_name": f"Test Client {datetime.now().strftime('%H:%M:%S')}"
    }
    response = requests.post(f"{BASE_URL}/status", json=data)
    print(f"Status: {response.status_code}")
    print(f"Response: {response.json()}")
    print()
    return response.json() if response.status_code == 200 else None

def test_get_status():
    """Testa listagem de status checks"""
    print("📋 Testando listagem de status checks...")
    response = requests.get(f"{BASE_URL}/status")
    print(f"Status: {response.status_code}")
    data = response.json()
    print(f"Total de registros: {len(data)}")
    if data:
        print("Último registro:", data[0])
    print()

def main():
    """Executa todos os testes"""
    print("🚀 Iniciando testes da API Portfolio com Supabase\n")
    
    try:
        test_health()
        test_root()
        test_create_status()
        test_get_status()
        print("✅ Todos os testes executados!")
    except requests.exceptions.ConnectionError:
        print("❌ Erro: Não foi possível conectar ao servidor.")
        print("Certifique-se de que o servidor está rodando com:")
        print("uvicorn server:app --reload")
    except Exception as e:
        print(f"❌ Erro inesperado: {e}")

if __name__ == "__main__":
    main()

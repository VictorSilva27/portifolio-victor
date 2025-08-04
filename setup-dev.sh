#!/bin/bash

# 🚀 Script para desenvolvimento local do Portfolio

echo "🎯 Portfolio - Desenvolvimento Local"
echo ""

# Verificar se está na raiz do projeto
if [ ! -f "vercel.json" ]; then
    echo "❌ Execute este script na raiz do projeto (onde está o vercel.json)"
    exit 1
fi

echo "📦 Instalando dependências..."

# Frontend
echo "🎨 Frontend..."
cd frontend
if [ ! -d "node_modules" ]; then
    yarn install
fi
cd ..

# Backend
echo "⚡ Backend..."
cd backend
if [ ! -d "venv" ]; then
    python3 -m venv venv
fi
source venv/bin/activate
pip install -r requirements.txt
cd ..

echo ""
echo "✅ Dependências instaladas!"
echo ""
echo "🚀 Para executar o projeto:"
echo ""
echo "Terminal 1 - Backend:"
echo "cd backend && source venv/bin/activate && uvicorn server:app --reload --port 8000"
echo ""
echo "Terminal 2 - Frontend:"
echo "cd frontend && yarn start"
echo ""
echo "📱 URLs locais:"
echo "Frontend: http://localhost:3000"
echo "Backend API: http://localhost:8000/api"
echo "Backend Docs: http://localhost:8000/docs"
echo ""
echo "🌐 Para deploy no Vercel:"
echo "1. Configure suas variáveis no Supabase"
echo "2. Siga o DEPLOY_GUIDE.md"
echo ""
echo "🎉 Pronto para desenvolver!"

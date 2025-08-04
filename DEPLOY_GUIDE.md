# 🚀 Deploy no Vercel - Frontend + Backend

## 📋 Pré-requisitos

1. **Conta no Vercel** - [vercel.com](https://vercel.com)
2. **Conta no Supabase** - [supabase.com](https://supabase.com)
3. **Projeto no GitHub** (público ou privado)

## ✅ Seu Backend está Pronto!

✅ **Configuração Completa**: Seu projeto está configurado corretamente para o Vercel
✅ **Supabase Conectado**: Suas credenciais estão configuradas no `.env`
✅ **Vercel.json Corrigido**: Resolvido o problema de `routes` vs `rewrites`

## 🚀 Próximos Passos - Deploy no Vercel

### 1. ⚙️ Criar tabela no Supabase (1 minuto)
Vá ao **SQL Editor** do seu projeto Supabase e execute:
```sql
CREATE TABLE IF NOT EXISTS status_checks (
    id TEXT PRIMARY KEY,
    client_name TEXT NOT NULL,
    timestamp TIMESTAMPTZ NOT NULL,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_status_checks_created_at ON status_checks(created_at);
ALTER TABLE status_checks ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow all operations on status_checks" ON status_checks FOR ALL USING (true);
```

### 2. 📤 Push para GitHub
```bash
git add .
git commit -m "feat: projeto configurado para deploy Vercel + Supabase"
git push origin main
```

### 3. 🌐 Deploy no Vercel
1. **Acesse [vercel.com](https://vercel.com)** e faça login
2. **Clique em "New Project"**
3. **Conecte seu repositório GitHub**: `VictorSilva27/portifolio-victor`
4. **Configure variáveis de ambiente** (use suas credenciais reais do `.env`):
   ```
   SUPABASE_URL = https://hajkpnnzkatougwbmddv.supabase.co
   SUPABASE_KEY = sua-chave-anon-do-env
   SUPABASE_SERVICE_ROLE_KEY = sua-chave-service-role-do-env
   ```
5. **Deploy!** - O Vercel detectará automaticamente o `vercel.json`

### Método 2: Via CLI

```bash
# Instalar Vercel CLI
npm i -g vercel

# Fazer login
vercel login

# Deploy (na raiz do projeto)
vercel

# Configurar variáveis de ambiente
vercel env add SUPABASE_URL
vercel env add SUPABASE_KEY
vercel env add SUPABASE_SERVICE_ROLE_KEY

# Redeploy com as variáveis
vercel --prod
```

## 🔐 Configurar Variáveis de Ambiente

No dashboard do Vercel, vá em **Settings > Environment Variables** e adicione:

| Nome | Valor | Ambiente |
|------|-------|----------|
| `SUPABASE_URL` | `https://seu-projeto.supabase.co` | Production, Preview, Development |
| `SUPABASE_KEY` | `sua-chave-anon` | Production, Preview, Development |
| `SUPABASE_SERVICE_ROLE_KEY` | `sua-chave-service-role` | Production, Preview, Development |

## 🌐 URLs após Deploy

Depois do deploy, você terá:

- **Frontend**: `https://seu-projeto.vercel.app`
- **Backend API**: `https://seu-projeto.vercel.app/api`

### Endpoints disponíveis:
- `GET /api/` - Hello World
- `GET /api/health` - Health check
- `POST /api/status` - Criar status check
- `GET /api/status` - Listar status checks

## 🧪 Testar o Deploy

```bash
# Health check
curl https://seu-projeto.vercel.app/api/health

# Criar status check
curl -X POST https://seu-projeto.vercel.app/api/status \
  -H "Content-Type: application/json" \
  -d '{"client_name": "Test from Production"}'

# Listar status checks
curl https://seu-projeto.vercel.app/api/status
```

## 🔄 Atualizações Automáticas

Toda vez que você fizer push para a branch `main`, o Vercel vai automaticamente:
1. **Buildar o frontend** (React)
2. **Deployar o backend** (FastAPI como serverless function)
3. **Atualizar o site** em produção

## 📁 Estrutura do Deploy

```
📦 Vercel Deploy
├── 🌐 Frontend (Static Site)
│   ├── HTML, CSS, JS otimizados
│   ├── Imagens comprimidas
│   └── PWA assets
└── ⚡ Backend (Serverless Functions)
    ├── FastAPI routes como functions
    ├── Auto-scaling
    └── Conexão com Supabase
```

## 🛠️ Troubleshooting

### Erro de Build do Frontend
```bash
# Teste local primeiro:
cd frontend
yarn build:vercel
```

### Erro de Import no Backend
```bash
# Verifique se todas as dependências estão no requirements.txt
cd backend
pip install -r requirements.txt
python server.py
```

### Erro de CORS
Se tiver problemas de CORS, atualize a lista de origens permitidas no `server.py`:
```python
allowed_origins = [
    "https://seu-dominio.vercel.app",  # Seu domínio real
    "https://*.vercel.app",
]
```

### Erro de Variáveis de Ambiente
1. Verifique se as variáveis estão definidas no Vercel
2. Faça um novo deploy: `vercel --prod`

## 🎯 Domínio Customizado (Opcional)

1. **No Vercel Dashboard**:
   - Vá em **Settings > Domains**
   - Adicione seu domínio
   - Configure DNS conforme instruções

2. **Atualize CORS no backend**:
   ```python
   allowed_origins = [
       "https://seudominio.com",
       "https://www.seudominio.com",
   ]
   ```

## ✅ Checklist Final

- [ ] ✅ Supabase configurado e tabela criada
- [ ] ✅ Variáveis de ambiente configuradas no Vercel
- [ ] ✅ Deploy realizado com sucesso
- [ ] ✅ Frontend acessível
- [ ] ✅ API respondendo em `/api/health`
- [ ] ✅ Teste de criação/listagem funcionando
- [ ] ✅ CORS configurado corretamente

## 🎉 Pronto!

Seu portfolio está no ar com:
- ⚡ **Frontend React** super rápido
- 🚀 **Backend FastAPI** serverless
- 🗄️ **Banco Supabase** gerenciado
- 🌐 **Deploy automático** no Vercel

**URL do seu portfolio**: `https://seu-projeto.vercel.app` 🎊

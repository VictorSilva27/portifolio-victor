# Backend Portfolio - Migração para Supabase ✅

## 🎯 Resumo da Migração

Seu backend foi **completamente refatorado** do MongoDB para Supabase! Agora você tem:

- ✅ **Banco de dados gerenciado** (PostgreSQL)
- ✅ **API REST automática**
- ✅ **Dashboard visual** para gerenciar dados
- ✅ **Backups automáticos**
- ✅ **Escalabilidade automática**
- ✅ **Menor latência**

## 🚀 Como Configurar

### 1. Criar Projeto no Supabase
```bash
# 1. Acesse https://supabase.com
# 2. Clique em "New Project"
# 3. Escolha um nome e senha
# 4. Aguarde a criação (1-2 minutos)
```

### 2. Configurar Schema do Banco
```sql
-- Copie e cole este SQL no SQL Editor do Supabase:
-- (Arquivo: supabase_schema.sql)

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

### 3. Configurar Variáveis de Ambiente
```bash
# Copie .env.example para .env e preencha:
cp .env.example .env

# Edite o .env com suas credenciais do Supabase:
SUPABASE_URL="https://seu-projeto.supabase.co"
SUPABASE_KEY="sua-chave-anon"
SUPABASE_SERVICE_ROLE_KEY="sua-chave-service-role"
```

### 4. Instalar e Executar
```bash
# Criar ambiente virtual
python3 -m venv venv

# Ativar ambiente virtual
source venv/bin/activate

# Instalar dependências
pip install -r requirements.txt

# Executar servidor
uvicorn server:app --reload
```

## 🧪 Testar a API

```bash
# Executar testes automáticos
python test_api.py
```

Ou testar manualmente:
```bash
# Health check
curl http://localhost:8000/api/health

# Criar status check
curl -X POST http://localhost:8000/api/status \
  -H "Content-Type: application/json" \
  -d '{"client_name": "Test Client"}'

# Listar status checks
curl http://localhost:8000/api/status
```

## 📊 Endpoints Disponíveis

| Método | Endpoint | Descrição |
|--------|----------|-----------|
| `GET` | `/api/` | Hello World |
| `GET` | `/api/health` | Verificação de saúde |
| `POST` | `/api/status` | Criar status check |
| `GET` | `/api/status` | Listar status checks |

## 🔧 Principais Mudanças

### Antes (MongoDB)
```python
# Conexão assíncrona
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Operações assíncronas
await db.status_checks.insert_one(data)
await db.status_checks.find().to_list(1000)
```

### Depois (Supabase)
```python
# Conexão simples
supabase: Client = create_client(supabase_url, supabase_key)

# Operações síncronas e mais legíveis
supabase.table("status_checks").insert(data).execute()
supabase.table("status_checks").select("*").execute()
```

## 🎁 Benefícios da Migração

### 🛠️ **Facilidade de Uso**
- Dashboard visual para ver/editar dados
- Sem necessidade de configurar servidor de banco
- API REST automática para todas as tabelas

### 🚀 **Performance**
- PostgreSQL (mais rápido que MongoDB para sua aplicação)
- CDN global do Supabase
- Conexões otimizadas

### 🔒 **Segurança**
- Row Level Security (RLS) nativo
- Autenticação integrada
- Backup automático

### 💰 **Custo**
- Tier gratuito generoso (500MB, 2GB bandwidth)
- Sem custos de infraestrutura
- Escalabilidade automática

## 📁 Arquivos Criados

- `supabase_schema.sql` - Schema do banco de dados
- `test_api.py` - Testes automáticos da API
- `.env.example` - Exemplo de configuração
- `MIGRATION_GUIDE.md` - Guia detalhado da migração
- `README.md` - Este arquivo

## 🆘 Troubleshooting

### Erro de Conexão
```bash
# Verifique se as variáveis estão corretas:
echo $SUPABASE_URL
echo $SUPABASE_KEY
```

### Erro na Tabela
```sql
-- Execute no SQL Editor do Supabase:
SELECT * FROM status_checks LIMIT 1;
```

### Erro de Dependências
```bash
# Reinstalar no ambiente virtual:
pip install --force-reinstall supabase
```

## 🎉 Próximos Passos

1. **Configure seu projeto Supabase** (5 minutos)
2. **Execute o schema SQL** (1 minuto)
3. **Atualize as variáveis de ambiente** (1 minuto)
4. **Teste a API** com `python test_api.py`
5. **Deploy em produção** (Vercel/Railway/Render)

---

**🎊 Parabéns! Seu backend agora é mais moderno, rápido e confiável!**

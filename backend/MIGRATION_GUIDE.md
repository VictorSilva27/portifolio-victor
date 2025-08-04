# Migração do MongoDB para Supabase

## Mudanças Realizadas

### 1. Dependências
- **Removido**: `pymongo`, `motor` (MongoDB drivers)
- **Adicionado**: `supabase`, `postgrest` (Supabase client)

### 2. Configuração
- **Variáveis de ambiente atualizadas** no `.env`:
  ```env
  SUPABASE_URL="your-supabase-project-url"
  SUPABASE_KEY="your-supabase-anon-key"
  SUPABASE_SERVICE_ROLE_KEY="your-supabase-service-role-key"
  ```

### 3. Schema do Banco de Dados
- Criado arquivo `supabase_schema.sql` com a estrutura da tabela
- Tabela `status_checks` com campos:
  - `id` (TEXT, PRIMARY KEY)
  - `client_name` (TEXT, NOT NULL)
  - `timestamp` (TIMESTAMPTZ)
  - `created_at` (TIMESTAMPTZ, auto-gerado)

### 4. Código Refatorado
- Substituído AsyncIOMotorClient por Supabase Client
- Operações async/await removidas (Supabase client é síncrono)
- Adicionado tratamento de erros mais robusto
- Adicionado endpoint `/health` para verificação de saúde
- Melhorada a tipagem com novos modelos Pydantic

## Como Configurar

### 1. Criar Projeto no Supabase
1. Acesse [supabase.com](https://supabase.com)
2. Crie um novo projeto
3. Copie a URL e chaves do projeto

### 2. Configurar Schema
1. Vá para o SQL Editor no dashboard do Supabase
2. Execute o script `supabase_schema.sql`

### 3. Atualizar Variáveis de Ambiente
```env
SUPABASE_URL="https://seu-projeto.supabase.co"
SUPABASE_KEY="sua-chave-anon"
SUPABASE_SERVICE_ROLE_KEY="sua-chave-service-role"
```

### 4. Instalar Dependências
```bash
pip install -r requirements.txt
```

### 5. Executar o Servidor
```bash
uvicorn server:app --reload
```

## Endpoints Disponíveis

- `GET /api/` - Hello World
- `GET /api/health` - Verificação de saúde
- `POST /api/status` - Criar status check
- `GET /api/status` - Listar status checks

## Benefícios da Migração

1. **Managed Database**: Não precisa gerenciar infraestrutura
2. **Real-time**: Suporte nativo a subscriptions
3. **Auth Built-in**: Sistema de autenticação integrado
4. **REST API**: API REST automática
5. **Dashboard**: Interface visual para gerenciar dados
6. **Backups**: Backups automáticos
7. **Escalabilidade**: Auto-scaling baseado em PostgreSQL

## Migração de Dados

Se você tiver dados existentes no MongoDB, você pode:

1. Exportar dados do MongoDB:
```bash
mongoexport --db portfolio_db --collection status_checks --out status_checks.json
```

2. Importar para Supabase usando o dashboard ou API REST

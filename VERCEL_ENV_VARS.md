# 🔑 Variáveis de Ambiente para Vercel

## ⚠️ COPIE EXATAMENTE ESTAS VARIÁVEIS

Vá ao dashboard do Vercel > Settings > Environment Variables e adicione:

### 1. SUPABASE_URL
```
Nome: SUPABASE_URL
Valor: https://hajkpnnzkatougwbmddv.supabase.co
Ambiente: Production, Preview, Development
```

### 2. SUPABASE_KEY
```
Nome: SUPABASE_KEY
Valor: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imhhamtwbm56a2F0b3Vnd2JtZGR2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQzMjIzOTQsImV4cCI6MjA2OTg5ODM5NH0.gug3FGLPMMv0xAo9ndKtuY1PbiMHvWAjLR7RAVinhH0
Ambiente: Production, Preview, Development
```

### 3. SUPABASE_SERVICE_ROLE_KEY
```
Nome: SUPABASE_SERVICE_ROLE_KEY
Valor: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imhhamtwbm56a2F0b3Vnd2JtZGR2Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc1NDMyMjM5NCwiZXhwIjoyMDY5ODk4Mzk0fQ._XUfZnsSIeSmD4U3Bkr73XrM2uOzhgZhwwqGAeuAAG4
Ambiente: Production, Preview, Development
```

## 📝 Como Adicionar no Vercel

1. **Acesse seu projeto no Vercel**
2. **Vá em Settings > Environment Variables**
3. **Clique em "Add New"**
4. **Para cada variável**:
   - Cole o Nome exato
   - Cole o Valor exato
   - Selecione todos os ambientes: Production, Preview, Development
   - Clique em "Save"

## ⚡ Após configurar as variáveis

1. **Faça um novo deploy**: Clique em "Redeploy" ou faça push no GitHub
2. **Teste a API**: `https://seu-projeto.vercel.app/api/health`

## 🚨 Troubleshooting

Se der erro de variável não encontrada:
1. Verifique se o nome está exato (case-sensitive)
2. Verifique se selecionou todos os ambientes
3. Faça um redeploy após adicionar as variáveis

# 📋 Guia: Como Adicionar Recomendações do LinkedIn

## 🎯 Objetivo
Este guia explica como adicionar facilmente suas recomendações do LinkedIn ao portfólio.

## 📝 Passo a Passo

### 1. **Acesse suas recomendações no LinkedIn**
1. Faça login no LinkedIn
2. Vá para seu perfil
3. Role até a seção "Recomendações"
4. Clique em "Ver todas as recomendações"

### 2. **Copie o conteúdo da recomendação**
- Copie o texto exato da recomendação
- Anote o nome da pessoa
- Anote o cargo e empresa
- Salve a foto de perfil (opcional)

### 3. **Adicione ao arquivo de dados**
Edite o arquivo: `frontend/src/data/testimonials.js`

```javascript
// Adicione um novo objeto no array testimonials:
{
  id: 3, // Próximo número sequencial
  name: "Nome da Pessoa",
  position: "Cargo da Pessoa",
  company: "Empresa da Pessoa",
  text: "Texto exato da recomendação copiado do LinkedIn...",
  avatar: "/images/testimonials/nome-da-pessoa.jpg", // Caminho local da foto
  linkedinUrl: "https://linkedin.com/in/perfil-da-pessoa", // Opcional
  date: "2024-01-15", // Data da recomendação (YYYY-MM-DD)
  isLinkedInRecommendation: true
}
```

### 4. **Adicione a foto da pessoa**
1. Salve a foto da pessoa na pasta: `frontend/public/images/testimonials/`
2. Nomeie o arquivo de forma descritiva: `nome-sobrenome.jpg` ou `empresa-pessoa.jpg`
3. Formatos aceitos: `.jpg`, `.jpeg`, `.png`, `.svg`
4. Tamanho recomendado: 200x200px (quadrado)

### 5. **Teste a atualização**
- Salve os arquivos
- O carousel será atualizado automaticamente
- Verifique se a nova recomendação e foto aparecem

## 🔧 Opções Avançadas

### **Estrutura de Pastas de Imagens:**
```
frontend/public/images/
├── testimonials/          # Fotos de recomendações
│   ├── nome-pessoa.jpg
│   ├── empresa-cliente.png
│   └── colleague-male.svg  # Placeholder masculino
├── projects/              # Imagens de projetos
└── hero/                  # Imagens da seção hero
```

### **Fotos placeholder padrão:**
Se não tiver a foto da pessoa, use os placeholders:
```javascript
avatar: "/images/testimonials/colleague-male.svg"    // Homem
avatar: "/images/testimonials/client-female.svg"     // Mulher
```

### **Formatação de datas:**
```javascript
date: "2024-12-25" // Sempre no formato YYYY-MM-DD
```

### **Como obter fotos do LinkedIn:**
1. Clique com o botão direito na foto da pessoa no LinkedIn
2. Selecione "Salvar imagem como..."
3. Salve na pasta `frontend/public/images/testimonials/`
4. Renomeie para um nome descritivo

### **Recomendações longas:**
Para textos muito longos, considere resumir mantendo a essência.

## 🚀 Funcionalidades Implementadas

✅ **Carousel automático** - Troca a cada 8 segundos  
✅ **Navegação manual** - Setas esquerda/direita  
✅ **Indicadores visuais** - Pontos indicadores  
✅ **Design responsivo** - Funciona em mobile  
✅ **Identificação LinkedIn** - Marca recomendações do LinkedIn  
✅ **Data das recomendações** - Mostra quando foi feita  

## 🔮 Futuras Melhorias

- **Integração com API**: Quando/se o LinkedIn disponibilizar acesso
- **Sistema de admin**: Interface para adicionar recomendações
- **Backup automático**: Sync com base de dados
- **Filtros**: Por empresa, data, tipo de projeto

## ❓ Troubleshooting

**Problema**: Nova recomendação não aparece  
**Solução**: Verifique a sintaxe JSON e se o ID é único

**Problema**: Carousel não funciona  
**Solução**: Verifique se há pelo menos 2 recomendações

**Problema**: Foto não carrega  
**Solução**: Use um URL válido ou um placeholder

## 📞 Suporte

Para adicionar recomendações ou fazer ajustes, edite o arquivo:
`frontend/src/data/testimonials.js`

O sistema foi projetado para ser facilmente expansível e está preparado para futuras integrações com APIs.

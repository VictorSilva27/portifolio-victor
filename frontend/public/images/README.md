# 📁 Organização de Imagens

## 🎯 Estrutura de Pastas

```
frontend/public/images/
├── testimonials/          # 👥 Fotos de recomendações
│   ├── colleague-male.svg      # Placeholder masculino
│   ├── client-female.svg       # Placeholder feminino
│   └── [suas-fotos].jpg        # Suas fotos reais
├── projects/              # 🚀 Imagens de projetos
│   └── [em-desenvolvimento]
└── hero/                  # 🌟 Imagens da seção principal
    └── [em-desenvolvimento]
```

## 📋 Convenções de Nomenclatura

### **Testimonials (Recomendações):**
- `nome-sobrenome.jpg` - Ex: `joao-silva.jpg`
- `empresa-funcao.jpg` - Ex: `google-developer.jpg`
- `projeto-cliente.jpg` - Ex: `dashboard-gestor.jpg`

### **Projetos:**
- `projeto-nome.jpg` - Ex: `dashboard-escolar.jpg`
- `app-nome.jpg` - Ex: `app-educacional.jpg`

### **Hero Section:**
- `profile-photo.jpg` - Sua foto principal
- `background-hero.jpg` - Imagem de fundo

## 🖼️ Especificações Técnicas

### **Testimonials:**
- **Formato:** JPG, PNG ou SVG
- **Tamanho:** 200x200px (quadrado)
- **Peso:** < 100KB
- **Qualidade:** Alta resolução para telas Retina

### **Projetos:**
- **Formato:** JPG, PNG
- **Tamanho:** 800x600px (4:3) ou 1200x800px
- **Peso:** < 500KB
- **Qualidade:** Alta resolução

### **Hero:**
- **Formato:** JPG, PNG
- **Tamanho:** 400x400px (perfil) ou 1920x1080px (fundo)
- **Peso:** < 1MB

## 🔄 Como Substituir Placeholders

### **1. Obter fotos do LinkedIn:**
```bash
# Clique direito na foto no LinkedIn
# "Salvar imagem como..."
# Salve em: frontend/public/images/testimonials/
```

### **2. Atualizar referência no código:**
```javascript
// Em: frontend/src/data/testimonials.js
avatar: "/images/testimonials/sua-nova-foto.jpg"
```

### **3. Verificar se funciona:**
- Salve o arquivo
- Recarregue o navegador
- A nova foto deve aparecer

## ⚡ Otimização de Performance

### **Compressão recomendada:**
- Use ferramentas como [TinyPNG](https://tinypng.com/)
- Mantenha qualidade visual alta
- Reduza o tamanho do arquivo

### **Formatos modernos:**
- **WebP:** Para melhor compressão
- **SVG:** Para ícones e ilustrações
- **JPG:** Para fotos com muitas cores
- **PNG:** Para imagens com transparência

## 🛠️ Ferramentas Úteis

- **Redimensionamento:** [Canva](https://canva.com), Photoshop, GIMP
- **Compressão:** [TinyPNG](https://tinypng.com/), [ImageOptim](https://imageoptim.com/)
- **Conversão:** [CloudConvert](https://cloudconvert.com/)

## 📝 Checklist de Adição

- [ ] Foto salva na pasta correta
- [ ] Nome do arquivo descritivo
- [ ] Tamanho adequado (200x200px para testimonials)
- [ ] Arquivo comprimido (< 100KB)
- [ ] Referência atualizada no código
- [ ] Testado no navegador

---

💡 **Dica:** Mantenha sempre backups das imagens originais em alta resolução!

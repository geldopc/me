# Portfolio - Geldo Pina Costa

Portfólio profissional de um Engenheiro Frontend Sênior, construído com React, TypeScript, Vite e Tailwind CSS.

## 🎨 Design

- **Minimal**: Preto e branco - design clean e profissional
- **Dark/Light Mode**: Toggle entre temas claro e escuro
- **Responsivo**: Otimizado para desktop, tablet e mobile
- **Bilíngue**: Suporte para Português e Inglês

## 🛠️ Stack Tecnológico

- **Framework**: React 19 + TypeScript
- **Build**: Vite
- **Styling**: Tailwind CSS v4 + shadcn/ui
- **Icons**: Phosphor Icons
- **Fonts**: Outfit Variable & Space Grotesk Variable

## 🚀 Getting Started

### Instalação

```bash
npm install
```

### Desenvolvimento

```bash
npm run dev
```

O site estará disponível em `http://localhost:5173/`

### Build para Produção

```bash
npm run build
```

### Preview do Build

```bash
npm run preview
```

### Lint e Format

```bash
npm run lint
npm run format
```

## 📁 Estrutura do Projeto

```
src/
├── components/          # Componentes reutilizáveis
│   ├── TopMenu/        # Menu de navegação principal
│   ├── theme-provider/ # Provider de tema (Dark/Light)
│   └── ui/             # Componentes shadcn/ui
├── context/            # Contextos React
│   └── LanguageContext # Gerenciamento de idioma
├── hooks/              # Hooks customizados
│   └── useLanguage     # Hook para usar o LanguageContext
├── pages/              # Páginas da aplicação
│   ├── home/           # Página principal
│   └── sections/       # Seções da página home
│       ├── HeroSection
│       ├── AboutSection
│       ├── SkillsSection
│       ├── ProjectsSection
│       ├── ContactSection
│       └── FooterSection
├── lib/                # Utilitários e helpers
├── App.tsx             # Componente raiz
└── main.tsx            # Entry point
```

## 🚀 Deploy no GitHub Pages

### 1. Criar repositório no GitHub

```bash
git init
git add .
git commit -m "Initial commit: Portfolio v1"
git branch -M main
git remote add origin https://github.com/seu-usuario/seu-repositorio.git
git push -u origin main
```

### 2. Atualizar `vite.config.ts` para GitHub Pages

Se o repositório for: `https://github.com/seu-usuario/seu-repositorio`

```typescript
base: "/seu-repositorio/", // Ajuste conforme seu repositório
```

### 3. Adicionar script de deploy no `package.json`

```json
{
	"scripts": {
		"deploy": "npm run build && npx gh-pages -d dist"
	}
}
```

### 4. Instalar gh-pages

```bash
npm install --save-dev gh-pages
```

### 5. Deploy

```bash
npm run deploy
```

### 6. Configurar GitHub Pages

1. Vá para **Settings** do repositório
2. Navegue até **Pages**
3. Em **Source**, selecione **Deploy from a branch**
4. Em **Branch**, selecione **gh-pages**

Seu portfólio estará disponível em: `https://seu-usuario.github.io/seu-repositorio/`

## 📝 Seções do Portfólio

- **Hero**: Apresentação inicial com nome e descrição
- **About**: Sobre você e experiência profissional
- **Skills**: Habilidades técnicas e ferramentas
- **Projects**: Galeria de projetos (em desenvolvimento)
- **Contact**: Links de contato (Email, LinkedIn, GitHub)

## 🎯 Próximas Melhorias

- [ ] Adicionar seção de projetos com cards interativos
- [ ] Integrar blog com artigos técnicos
- [ ] Adicionar animações com Framer Motion
- [ ] SEO optimization
- [ ] Analytics integration

## 📄 Licença

Todos os direitos reservados © 2026 Geldo Pina Costa

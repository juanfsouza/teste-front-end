# Teste Econverse - Desenvolvedor Front-End

Este projeto foi desenvolvido como parte do processo seletivo para a vaga de Desenvolvedor Front-End na Econverse.

<img width="1920" height="4400" alt="download" src="https://github.com/user-attachments/assets/28031e69-3beb-4595-bba9-f49943a01187" />

## 📋 Sobre o Projeto

Aplicação e-commerce desenvolvida em React e TypeScript, consumindo dados de produtos via API JSON. O projeto apresenta uma vitrine de produtos com modal interativo, layout responsivo e seguindo as melhores práticas de desenvolvimento web.

## 🚀 Tecnologias Utilizadas

- **React 18** - Biblioteca JavaScript para construção de interfaces
- **TypeScript** - Superset do JavaScript com tipagem estática
- **Vite** - Build tool moderna e rápida
- **Sass (SCSS)** - Pré-processador CSS
- **HTML5 Semântico** - Estrutura semântica para melhor SEO e acessibilidade

## 📦 Pré-requisitos

- Node.js
- npm

## 🛠️ Instalação

1. Clone o repositório:
```bash
git clone https://github.com/juanfsouza/Front_Econverse_Test
cd react-ts-app
```

2. Instale as dependências:
```bash
npm install
```

## ▶️ Executando o Projeto

### Modo de Desenvolvimento

Para iniciar o servidor de desenvolvimento:

```bash
npm run dev
```

A aplicação estará disponível em `http://localhost:5173`

### Build para Produção

Para criar uma build de produção:

```bash
npm run build
```

Os arquivos otimizados estarão na pasta `dist/`

### Preview da Build

Para visualizar a build de produção localmente:

```bash
npm run preview
```

## 🧪 Testando o Projeto

O projeto pode ser testado executando o servidor de desenvolvimento e verificando:

1. **Vitrine de Produtos**: Verifique se os produtos são carregados corretamente do JSON
2. **Modal de Produto**: Clique em qualquer produto para abrir o modal com as informações detalhadas
3. **Responsividade**: Teste em diferentes tamanhos de tela (desktop, tablet, mobile)
4. **Navegação**: Teste os carrosséis e botões de navegação

## 📁 Estrutura do Projeto

```
react-ts-app/
├── src/
│   ├── components/          # Componentes React
│   │   ├── TopBar/         # Barra superior
│   │   ├── Header/         # Cabeçalho com busca
│   │   ├── Navigation/     # Menu de navegação
│   │   ├── Hero/           # Banner principal
│   │   ├── CategoryIcons/   # Ícones de categorias
│   │   ├── ProductShowcase/# Vitrine de produtos
│   │   ├── ProductCard/    # Card de produto
│   │   ├── ProductModal/   # Modal de detalhes do produto
│   │   ├── Partners/       # Seção de parceiros
│   │   ├── RelatedSection/ # Produtos relacionados
│   │   ├── BrandCarousel/  # Carrossel de marcas
│   │   ├── Newsletter/      # Formulário de newsletter
│   │   └── Footer/         # Rodapé
│   ├── styles/             # Estilos globais
│   ├── types/              # Definições TypeScript
│   ├── utils/              # Funções utilitárias (API)
│   ├── App.tsx             # Componente principal
│   └── main.tsx            # Ponto de entrada
├── public/                 # Arquivos estáticos
├── index.html              # HTML principal
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

## 🎯 Funcionalidades Implementadas

- ✅ Vitrine de produtos consumindo dados do JSON via API
- ✅ Modal interativo ao clicar em um produto
- ✅ Layout responsivo para desktop, tablet e mobile
- ✅ Carrosséis de produtos com navegação
- ✅ Componentização adequada e reutilizável
- ✅ HTML semântico e acessível
- ✅ SEO otimizado com meta tags
- ✅ Pré-processador Sass para estilização

## 📝 Especificações Técnicas Atendidas

- ✅ Desenvolvido em React e TypeScript
- ✅ Layout conforme especificação (pixel a pixel)
- ✅ Consumo de produtos via JSON
- ✅ Modal com informações do produto
- ✅ Pré-processador Sass utilizado
- ✅ Sem uso de bibliotecas UI (Bootstrap, Foundation, etc.)
- ✅ HTML semântico
- ✅ Boas práticas de SEO

## 🔍 Pontos de Destaque

- **Componentização**: Código organizado em componentes reutilizáveis
- **TypeScript**: Tipagem forte para maior segurança e manutenibilidade
- **Responsividade**: Layout adaptável para todos os dispositivos
- **Acessibilidade**: Uso de aria-labels, roles e HTML semântico
- **Performance**: Otimizações com Vite e lazy loading quando necessário
- **SEO**: Meta tags, Open Graph e estrutura semântica


**Boa sorte na avaliação! 🚀**

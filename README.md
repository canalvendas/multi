# Welcome to your Dyad app

## Preparação para Implantação na Vercel

Este projeto está configurado para ser facilmente implantado na Vercel. Siga os passos abaixo:

### 1. Configuração das Variáveis de Ambiente

Antes de implantar, configure as seguintes variáveis de ambiente na Vercel:

```
VITE_SUPABASE_URL=https://slmwnuwuouetzjvwigdj.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNsbXdudXd1b3VldHpqdndpZ2RqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTg2MzY5MzMsImV4cCI6MjA3NDIxMjkzM30.eMa9NdmOoY5kBpo69NN9Rzn3FfmpvI5Gv0XevxQxsdk
```

### 2. Implantação na Vercel

1. Faça login na sua conta da Vercel
2. Clique em "New Project"
3. Importe este repositório do GitHub
4. Configure as variáveis de ambiente conforme indicado acima
5. Clique em "Deploy"

### 3. Configuração do Banco de Dados (Supabase)

Certifique-se de que as políticas de segurança do Supabase estão configuradas corretamente para permitir acesso ao frontend.

### 4. Configuração de Domínio (Opcional)

Após a implantação, você pode configurar um domínio personalizado nas configurações do projeto na Vercel.

## Desenvolvimento Local

Para rodar o projeto localmente:

1. Clone o repositório
2. Crie um arquivo `.env.local` com as variáveis de ambiente
3. Execute `npm install`
4. Execute `npm run dev`

## Estrutura do Projeto

- `src/` - Código fonte da aplicação
- `src/pages/` - Páginas da aplicação
- `src/components/` - Componentes reutilizáveis
- `src/integrations/` - Integrações com serviços externos
- `public/` - Arquivos estáticos

## Tecnologias Utilizadas

- React com TypeScript
- Vite
- Tailwind CSS
- Supabase (autenticação e banco de dados)
- shadcn/ui components
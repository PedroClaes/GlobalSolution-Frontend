# NextStep - Recomendação de Cursos

## 1. Descrição
Plataforma desenvolvida para a Global Solution da FIAP (Front-End Design Engineering), com o objetivo de recomendar cursos baseados no perfil do usuário. A solução utiliza um algoritmo de recomendação no front-end que cruza interesses e disponibilidade de tempo com uma base de dados consumida de uma API Java.

## 2. Status do Projeto
✅ **Concluído**

## 3. Sumário
1. [Descrição](#1-descrição)
2. [Status](#2-status-do-projeto)
3. [Sobre o Projeto](#4-sobre-o-projeto)
4. [Tecnologias Utilizadas](#5-tecnologias-utilizadas)
5. [Instalação](#6-instalação)
6. [Como Usar](#7-como-usar)
7. [Estrutura de Pastas](#8-estrutura-de-pastas)
8. [Rotas Principais](#9-endpoints-ou-rotas-principais)
9. [Autores](#10-autores-e-créditos)
10. [Demonstração](#11-screenshots--demonstração)
11. [Contato](#12-contato)

## 4. Sobre o Projeto
O **NextStep** é uma Single Page Application (SPA) focada em acessibilidade e usabilidade. O sistema permite:
* Gerenciamento de cursos (CRUD completo) integrado via API.
* Questionário interativo para traçar o perfil do estudante.
* Sistema de recomendação inteligente que sugere o curso ideal.
* Alternância de tema (Dark/Light Mode).

O projeto integra os conhecimentos de **Front-End Engineering** (React), **Domain Driven Design** (API Java) e **Database** (Oracle).

## 5. Tecnologias Utilizadas
* **Linguagem:** TypeScript
* **Framework:** React (via Vite)
* **Estilização:** Tailwind CSS
* **Roteamento:** React Router DOM
* **Ícones:** Lucide React
* **Validação:** Zod
* **API:** Fetch API (Nativa)

## 6. Instalação
Para rodar o projeto localmente:

```bash
# 1. Clone o repositório
git clone [https://github.com/PedroClaes/GlobalSolution-Frontend.git]

# 2. Entre na pasta
cd NextStep

# 3. Instale as dependências
npm install

# 4. Configure as variáveis de ambiente
# Crie um arquivo .env na raiz e adicione:
# VITE_API_URL=https://nextstep-xh5o.onrender.com

# 5. Rode o projeto
npm run dev


7. Como UsarA aplicação está disponível online através da Vercel.🔗 Acesse aqui: [global-solution-frontend.vercel.app]Funcionalidades principais:Home: Visão geral da plataforma.Cursos: Liste, crie, edite ou exclua cursos.Recomendação: Responda ao questionário para receber uma indicação personalizada.Tema: Clique no ícone de sol/lua na barra superior para alternar o modo de visualização.

8. Estrutura de Pastassrc/
├── api/            # Serviços de conexão com o backend Java
├── assets/         # Imagens e ícones estáticos
├── components/     # Componentes reutilizáveis (Navbar, Cards, Forms)
├── context/        # Context API (ThemeContext)
├── layouts/        # Estruturas de layout padrão
├── pages/          # Páginas da aplicação (Home, Team, Courses, About)
├── schemas/        # Validações Zod
├── types/          # Tipagem TypeScript (Interfaces)
└── utils/          # Lógica do algoritmo de recomendação

9. Endpoints ou Rotas PrincipaisA aplicação utiliza as seguintes rotas no Front-end:/ - Página Inicial/courses - Listagem de Cursos/courses/create - Criação de Novo Curso/courses/edit/:id - Edição de Curso/questionnaire - Questionário de Perfil/questionnaire/result - Resultado da Recomendação/team - Integrantes do Projeto/about - Sobre e FAQ

10. Autores e CréditosProjeto desenvolvido pela equipe da turma 1TDSPV da FIAP.Pedro Gabriel ClaesMatheus ArazinArtur Pioli

11. Screenshots / DemonstraçãoTela InicialRecomendação de Cursos(Adicione os prints na pasta do projeto ou hospede-os e coloque o link aqui)

12. ContatoIntegranteRMTurmaLinks Pedro Gabriel Claes RM566058 1TDSPV GitHub Matheus Arazin RM556649 1TDSPV GitHub Artur Pioli RM565597 1TDSPV GitHub

Links Importantes📺 Vídeo Demo (YouTube): [https://youtu.be/5eVy9IPud-8]💻 Repositório (GitHub): [https://github.com/PedroClaes/GlobalSolution-Frontend] Dominio (Vercel): [global-solution-frontend.vercel.app]
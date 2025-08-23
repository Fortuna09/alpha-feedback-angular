# Alpha Desk

![Badge do GitHub](https://img.shields.io/github/last-commit/Fortuna09/alpha-feedback-angular)
[![Netlify Status](https://api.netlify.com/api/v1/badges/4956270e-6692-4363-9b6a-235fed090517/deploy-status)](https://app.netlify.com/projects/alpha-feedback/deploys)


[![Aplicação Online](https://img.shields.io/badge/Ver%20Online-green?style=for-the-badge)](https://alpha-feedback.netlify.app/)

![Prévia do Alpha Desk em ação](/PREVIEW.gif)

### Descrição
Um sistema de feedback e análise de dados para empresas. Permite a coleta de avaliações de clientes e oferece um dashboard seguro para administradores visualizarem e analisarem os resultados em tempo real.

### Funcionalidades
* Envio anônimo de feedback via formulário.
* Autenticação de administrador com token JWT para acesso seguro aos dados.
* Dashboard com visualização de dados em tempo real, exibindo notas, gráficos e contagem de votos.
* API RESTful para gerenciamento completo dos feedbacks (CRUD).

### Tecnologias Utilizadas
* **Frontend:** Angular, ng2-charts, chart.js
* **Backend:** Node.js
* **Banco de Dados:** MongoDB Atlas

---

### Desafios e Aprendizados

O projeto começou com a premissa de ser uma simples landing page em React com JavaScript para coletar feedbacks. No entanto, o objetivo evoluiu, criando a necessidade de ir além da mera coleta: era preciso visualizar os dados. Isso apresentou um desafio central: como exibir feedbacks e métricas de forma segura e significativa para o administrador?

A complexidade exigiu a migração do frontend para Angular com TypeScript, uma escolha estratégica para organizar a arquitetura da aplicação com componentes e tipagem forte.

Para resolver a questão da segurança, implementei um sistema de autenticação robusto, utilizando JWT (JSON Web Tokens) para proteger as rotas da API, garantindo que apenas administradores autenticados pudessem acessar os dados sensíveis.

No frontend, o desafio foi transformar os dados brutos em insights visuais. Para isso, utilizei as bibliotecas `ng2-charts` e `chart.js` para criar gráficos que exibem a média de notas e a distribuição total de cada avaliação, permitindo uma análise rápida e intuitiva da performance do serviço.

Esta evolução do projeto me ensinou a adaptar a arquitetura e a stack tecnológica em resposta a novas necessidades, além de aprofundar meu conhecimento em autenticação segura e visualização de dados.

----

### Como Rodar o Projeto

Siga os passos abaixo para executar o projeto em sua máquina.

**Pré-requisitos:**
* Node.js (v18 ou superior)
* Angular CLI (v17 ou superior)
* Git

**1. Clone o Repositório FRONT-END:**
```bash
# Clone o repositório remoto
git clone https://github.com/Fortuna09/alpha-feedback-angular

# Navegue para o diretório principal 
cd alpha-feedback-angular

# Instale as dependências
npm install

# Inicie o servidor
ng serve
```

**2. Clone o Repositório BACK-END:**
```bash
# Clone o repositório remoto
git clone https://github.com/Fortuna09/alpha-feedback-api

# Navegue até a pasta da API
cd alpha-feedback-api

# Instale as dependências
npm install

# Crie um arquivo .env na raiz da pasta 'backend'
# Adicione as variáveis de ambiente necessárias (ex: string de conexão do MongoDB, segredo do JWT)
MONGO_URI=SUA_STRING_DE_CONEXAO
JWT_SECRET=SEU_SEGREDO

# Inicie o servidor
npm start

```

**2. Acessar a Aplicação:**
* Abra seu navegador e acesse http://localhost:4200.

## 📬 Contato

**Rafael Fortuna**

- **LinkedIn:** [Meu perfil](https://www.linkedin.com/in/rafael-fortuna-990184264/)

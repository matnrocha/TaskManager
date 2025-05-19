# Task Manager App – Setup Guide

## Requisitos

- **Node.js:** v23.10.0  
- **npm:** v11.2.0  
- Conta no [MongoDB Atlas](https://www.mongodb.com/)

---

## Backend

### 1. Instalar dependências

```bash
cd backend
npm install
```

### 2. Configurar o MongoDB

- Crie um novo projeto no MongoDB Atlas
- Crie um cluster (Free)
- Crie um usuário com senha e adicione seu IP (ou allow all)
- Copie a string de conexão para Node.js Driver

### 3. Configurar variáveis de ambiente

- Crie um arquivo `.env` no diretório backend com:

```
MONGO_URL=<sua_connection_string>
JWT_SECRET=<uma_string_segura>
```

- Para gerar o `JWT_SECRET`:
```bash
node -e "console.log(require('crypto').randomBytes(64).toString('hex'))"
```

### 4. Iniciar o backend
```bash
npm run dev
```

---

## Frontend

### 1. Instalar dependências
```bash
cd frontend/Task-Manager
npm install
```

### 2. Iniciar o frontend
```bash
npm run dev
```

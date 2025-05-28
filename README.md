# 📋 Gerenciador de Tarefas

Um site simples de gerenciamento de tarefas criado com **React** e **Vite**. Com ele, você pode adicionar tarefas com título e descrição, marcar como feitas ou não feitas e deletar tarefas.

# imagens
![image](https://github.com/user-attachments/assets/b6e435f8-ddbc-44d7-8b81-9f12f5843091)
![image](https://github.com/user-attachments/assets/631df4f3-26a6-4e00-8575-a3c3e2fbcde6)
## 🚀 Tecnologias utilizadas

- [Vite 5.5.2](https://vitejs.dev/)
- [React](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Lucide React](https://lucide.dev/)
- [React Router DOM](https://reactrouter.com/)
- ESLint (com `react/prop-types` desativado)

---

## 💾 Como baixar e rodar o projeto localmente

### 1. Clone este repositório

```bash
git clone https://github.com/seu-usuario/nome-do-repo.git
cd nome-do-repo
```

### 2. Abra a pasta no VSCode

```bash
code .
```

### 3. Instale as dependências

```bash
npm i
```

### 4. Rode o projeto

```bash
npm run dev
```

O projeto estará disponível em `http://localhost:5173` (ou a porta exibida no terminal).

---

## 🛠️ Configuração do ambiente

### Criar o projeto com Vite

```bash
npm create vite@5.5.2 .
# Escolher template: React + JavaScript
```

### Instalar Tailwind CSS

```bash
npm install tailwindcss @tailwindcss/vite
```

No arquivo CSS principal (`index.css` ou similar):

```css
@import "tailwindcss";
```

### Configurar ícones com Lucide

```bash
npm install lucide-react
```

### Desativar regra de ESLint para prop-types

No arquivo `eslint.config.js`:

```js
rules: {
  'react/prop-types': 'off',
}
```

### Instalar React Router DOM (opcional para navegação)

```bash
npm install react-router-dom
```

---

## ✅ Funcionalidades

- ➕ Adicionar tarefa (título e descrição)
- ✅ Marcar tarefa como feita ou não feita
- 🗑️ Deletar tarefa

---

## 📁 Estrutura básica do projeto (sugestão)

```
src/
├── components/
│   └── Task.jsx
├── pages/
│   └── TaskPage.jsx
├── App.jsx
├── main.jsx
├── index.css
```

---

## 📄 Licença

Este projeto está sob a licença MIT.

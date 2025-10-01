# TaskManager Web App

A scalable task management web application built with **React** (frontend) and **Node.js/Express** (backend) with JWT authentication and a dashboard featuring CRUD-enabled tasks.

---

## **Features**

### ✅ Frontend

- Built with **React.js** and **TailwindCSS**
- Responsive **dashboard** with task management cards
- **Search & filter** tasks
- Interactive UI with **hover animations** and typewriter-style hero section

### ✅ Backend

- **Node.js + Express** API server
- **MongoDB Atlas** database for storing users & tasks
- **JWT-based authentication** (register, login, logout)
- **Protected routes** for authenticated users
- CRUD APIs for **Tasks**: Create, Read, Update, Delete
- Password hashing with **bcryptjs**
- Error handling and input valid

## **Installation**

### 1️⃣ Clone the repository

```
`git clone <your-github-repo-url>
 cd taskmanager`
```

### 2️⃣ Backend setup

```
cd backend
npm install
```

- Create `.env` file in backend folder:

```
PORT=5000
MONGO_URI=<your-mongodb-connection-string>
JWT_SECRET=<your-secret-key>
```

- Start backend server:

```
npm run dev
```

### 3️⃣ Frontend setup

```
cd ../frontend/TaskManager
npm install
npm start
```

- Frontend runs on `http://localhost:3000`

## **API Endpoints**

### Auth

| Method | EndPoint           | Description                  |
| ------ | ------------------ | ---------------------------- |
| POST   | /api/auth/register | Register a new user          |
| POST   | /api/auth/login    | Login and get JWT token      |
| GET    | /api/auth/profile  | Get user profile (protected) |

### Tasks

| Method | EndPoint              | Description               |
| ------ | --------------------- | ------------------------- |
| GET    | /api/tasks            | Get all tasks (protected) |
| POST   | /api/tasks            | Create a new task         |
| PUT    | /api/tasks/:id        | Update a task             |
| DELETE | /api/tasks/:id        | Delete a task             |
| PUT    | /api/tasks/toggle/:id | Toggle task completion    |

## **Technologies Used**

- **Frontend:** React.js, TailwindCSS, React Router
- **Backend:** Node.js, Express, MongoDB Atlas, Mongoose
- **Authentication:** JWT, bcryptjs
- **Tools:** VS Code

## **Project Structure**

```
frontend/
├─ src/
│  ├─ components/      # UI components (Navbar, DashboardNavBar, TaskForm, etc.)
│  ├─ pages/           # LandingPage, Login, Register, Dashboard
│  └─ App.js
backend/
├─ controllers/        # Auth & Task controllers
├─ routes/             # API routes
├─ models/             # Mongoose models
├─ middleware/         # Auth middleware
└─ server.js
```

### **5️⃣ Scaling Frontend-Backend Integration (Production)**

- **Frontend**

  - Build optimized bundle (`npm run build`)
  - Serve with **Netlify, Vercel, or static hosting**
  - Use environment variables for API base URL

- **Backend**

  - Deploy on **Heroku, Render, Railway, or AWS EC2**
  - Use a **production-grade database** (MongoDB Atlas, Postgres)
  - Add **CORS, rate limiting, and security headers**

- **Integration**

  - Store **API base URL** in environment variables (`REACT_APP_API_URL`)
  - Token management via **HTTP headers**
  - Use **Axios or Fetch with interceptors** to handle expired tokens

- **Scalability considerations**

  - Separate frontend & backend into microservices if needed
  - Add caching (Redis) for frequently fetched data
  - Modular code structure: controllers, routes, models, components

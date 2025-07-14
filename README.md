# 🚀 Full Stack Web App – Go backend  + React  frontend 

A modern full-stack web application using **Golang** for the backend REST API and **React** for the frontend. Designed to be scalable, fast, and easy to deploy with Docker.

## 🌟 Features

- RESTful API built with Go (`net/http` or `Gin` framework)
- Frontend UI built with React (Hooks, Axios, React Router)
- JWT-based user authentication (login/register)
- Role-based access control (Admin/User)
- CRUD operations for entities (e.g., posts, products, blogs, users)
- Dockerized setup for both frontend and backend

## 🧰 Tech Stack

| Layer       | Technology          |
|-------------|----------------------|
| Frontend    | React, Tailwind CSS or Bootstrap |
| Backend     | Go (Golang), Gin / Echo / Fiber |
| Database    | PostgreSQL / MySQL / SQLite |
| Auth        | JWT, bcrypt |
| DevOps      | Docker, Docker Compose |

## 📂 Project Structure

project-root/
├── backend/ # Go REST API
│ ├── main.go
│ ├── routes/
│ ├── controllers/
│ ├── models/
│ └── middleware/
├── frontend/ # React App
│ ├── src/
│ ├── public/
│ └── package.json
├── docker-compose.yml
└── README.md

bash
Copy
Edit

## ▶️ Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/Uday-Shastrakar/fullstack-go-react-app.git
cd fullstack-go-react-app
2. Run with Docker
bash
Copy
Edit
docker-compose up --build
React: http://localhost:3000

Go API: http://localhost:8080

3. Or Run Manually (Dev Mode)
Backend (Go)
bash
Copy
Edit
cd backend
go mod tidy
go run main.go
Frontend (React)
bash
Copy
Edit
cd frontend
npm install
npm start
🧠 Key Concepts Used
JWT Authentication in Go

CORS config for React-Golang integration

Modular Go packages

React state management (useState, useEffect)

Secure API calls with Axios + JWT

🛡️ Security
Hashed passwords using bcrypt

Protected routes with middleware

Token-based access control

📸 Screenshots
Add login screen, dashboard, API responses, etc.

📌 Future Improvements
Add pagination and filtering

Improve UI/UX with Material UI / Tailwind

Add Swagger docs for API

👨‍💻 Developed By
Uday Shastrakar
📧 uday.shastrakar@gmail.com
🌐 GitHub
🌐 Portfolio

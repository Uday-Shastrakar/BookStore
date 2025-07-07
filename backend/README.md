# 📚 Bookstore App - Backend (Go + MySQL + JWT)

A secure and modular Bookstore REST API built with **Go (Golang)**, **Gin**, **GORM**, and **MySQL**.  
Supports **user registration**, **JWT login**, and **CRUD operations** on books.

---

## 🚀 Tech Stack

- 🐹 Go 1.20+
- 🔥 Gin Web Framework
- 💾 MySQL 8+
- 🔐 JWT Authentication (bcrypt-hashed passwords)
- 🧱 GORM ORM

---

## 📂 Project Structure

bookstore/
├── main.go
├── go.mod
├── database/
│ └── mysql.go
├── models/
│ ├── user.go
│ └── book.go
├── controllers/
│ ├── auth_controller.go
│ └── book_controller.go
├── middleware/
│ └── jwt.go
├── utils/
│ └── token.go
└── routes/
└── routes.go

yaml
Copy
Edit

---

## ⚙️ Setup Instructions

### 1. 🐬 MySQL Setup

Create the database:
```sql
CREATE DATABASE bookstore;
Update the connection string in database/mysql.go:

go
Copy
Edit
dsn := "root:your_password@tcp(127.0.0.1:3306)/bookstore?charset=utf8mb4&parseTime=True&loc=Local"
2. 📦 Install Dependencies
bash
Copy
Edit
go mod tidy
Install required packages:

bash
Copy
Edit
go get github.com/gin-gonic/gin
go get gorm.io/gorm
go get gorm.io/driver/mysql
go get github.com/golang-jwt/jwt/v5
go get golang.org/x/crypto/bcrypt
3. ▶️ Run the App
bash
Copy
Edit
go run main.go
You should see:

pgsql
Copy
Edit
✅ Connected to MySQL
✅ Tables created successfully!
🧪 API Endpoints
🔐 Auth
Method	Endpoint	Description
POST	/register	Register a user
POST	/login	Login & get token

📚 Books (🔒 JWT Protected)
Method	Endpoint	Description
GET	/books	List all books
POST	/books	Add a new book
PUT	/books/:id	Update book by ID
DELETE	/books/:id	Delete book by ID

📌 Sample curl Commands
Register
bash
Copy
Edit
curl -X POST http://localhost:8080/register \
  -H "Content-Type: application/json" \
  -d '{"username":"uday", "password":"123456"}'
Login
bash
Copy
Edit
curl -X POST http://localhost:8080/login \
  -H "Content-Type: application/json" \
  -d '{"username":"uday", "password":"123456"}'
Use Token to Fetch Books
bash
Copy
Edit
curl -X GET http://localhost:8080/books \
  -H "Authorization: Bearer YOUR_JWT_TOKEN"
🔒 Security Features
Passwords hashed using bcrypt

JWT-based auth with expiration

Protected /books routes using middleware

🛠️ Future Plans
React frontend integration

Swagger/OpenAPI documentation

Docker support

👨‍💻 Author
Uday Shastrakar
📫 uday.shastrakar@gmail.com
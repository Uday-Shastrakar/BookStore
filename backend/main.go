package main

import (
	"bookstore/database"
	"bookstore/models"
	"bookstore/routes"
	"fmt"
	"time"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
)

func main() {
	// Connect to MySQL
	database.Connect()

	// Auto-create tables
	err := database.GetDB().AutoMigrate(&models.User{}, &models.Book{})
	if err != nil {
		fmt.Println("❌ AutoMigrate failed:", err)
	} else {
		fmt.Println("✅ Tables created successfully!")
	}

	// Check if tables exist
	if database.GetDB().Migrator().HasTable("users") {
		fmt.Println("✅ 'users' table exists")
	}
	if database.GetDB().Migrator().HasTable("books") {
		fmt.Println("✅ 'books' table exists")
	}

	// Setup Gin with CORS
	r := gin.Default()

	// ✅ Enable CORS for React frontend (http://localhost:5173)
	r.Use(cors.New(cors.Config{
		AllowOrigins:     []string{"http://localhost:5173"},
		AllowMethods:     []string{"GET", "POST", "PUT", "DELETE", "OPTIONS"},
		AllowHeaders:     []string{"Origin", "Content-Type", "Authorization"},
		ExposeHeaders:    []string{"Content-Length"},
		AllowCredentials: true,
		MaxAge:           12 * time.Hour,
	}))

	// Routes
	routes.RegisterRoutes(r)

	// Start server
	r.Run(":8080")
}

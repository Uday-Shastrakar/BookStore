package main

import (
	"bookstore/database"
	"bookstore/models"
	"bookstore/routes"
	"fmt"

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

	// Setup routes
	r := gin.Default()
	routes.RegisterRoutes(r)
	r.Run(":8080")
}

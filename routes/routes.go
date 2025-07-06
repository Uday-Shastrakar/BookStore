package routes

import (
	"bookstore/controllers"
	"bookstore/middleware"
	"github.com/gin-gonic/gin"
)

func RegisterRoutes(r *gin.Engine) {
	r.POST("/register", controllers.Register)
	r.POST("/login", controllers.Login)

	// ✅ Protect books routes using JWT middleware
	books := r.Group("/books", middleware.AuthMiddleware())
	{
		books.GET("", controllers.GetBooks)
		books.POST("", controllers.AddBook)
		books.PUT(":id", controllers.UpdateBook)
		books.DELETE(":id", controllers.DeleteBook)
	}
}

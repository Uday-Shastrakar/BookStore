package routes

import (
	"bookstore/controllers"
	"github.com/gin-gonic/gin"
)

func RegisterRoutes(r *gin.Engine) {
	r.POST("/register", controllers.Register)
	r.POST("/login", controllers.Login)

	books := r.Group("/books")
	{
		books.GET("", controllers.GetBooks)
		books.POST("", controllers.AddBook)
		books.PUT(":id", controllers.UpdateBook)
		books.DELETE(":id", controllers.DeleteBook)
	}
}

package main

//test
import (
	"fmt"
	"net/http"
	"os"

	"github.com/gorilla/mux"
)

func main() {
	//init api

	mx := mux.NewRouter()

	PublicRouter := mx.PathPrefix("/public").Subrouter()

	ConnectToDatabase("local")
	defer Accessor.Close()

	SetupPublicRoutes(PublicRouter)

	PublicRouter.HandleFunc("/test", func(w http.ResponseWriter, r *http.Request) {
		fmt.Printf("test hit")
		w.Header().Set("Access-Control-Allow-Origin", "*")
		// io.WriteString(w, "{'Status': 'Green'}")
	})

	fmt.Print("server is serving")
	fmt.Print(http.ListenAndServe(":"+os.Getenv("PORT"), mx))
	// fmt.Print(http.ListenAndServe(":8080", mx))
}

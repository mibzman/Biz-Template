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

	// PublicRouter := mux.NewRouter().PathPrefix("/public").Subrouter()
	SetupPublicRouter(mx)

	// PrivateRouter := mux.NewRouter().PathPrefix("/private").Subrouter()
	SetupPrivateRouter(mx)

	ConnectToDatabase("local")
	defer Accessor.Close()

	fmt.Print("server is serving")
	fmt.Print(http.ListenAndServe(":"+os.Getenv("PORT"), mx))
	// fmt.Print(http.ListenAndServe(":8080", mx))
}

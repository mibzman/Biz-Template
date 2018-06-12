package main

//test
import (
	"fmt"
	"net/http"

	"github.com/gorilla/mux"
)

func SetupPublicRoutes(mx *mux.Router) {

	mx.HandleFunc("/test", Test)

}

func Test(w http.ResponseWriter, r *http.Request) {
	fmt.Printf("test hit")
	w.Header().Set("Access-Control-Allow-Origin", "*")
	// io.WriteString(w, "{'Status': 'Green'}")
}

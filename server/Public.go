package main

//test
import (
	"io"
	"net/http"

	"github.com/gorilla/mux"
)

func SetupPublicRouter(mx *mux.Router) {

	mx.HandleFunc("/test", PublicTest)

}

func PublicTest(w http.ResponseWriter, r *http.Request) {
	// fmt.Printf("test hit")
	w.Header().Set("Access-Control-Allow-Origin", "*")
	io.WriteString(w, "{'Status': 'Green'}")
}

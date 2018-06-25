package main

//test
import (
	"io"
	"net/http"

	"github.com/gorilla/mux"
)

type PrivateServer struct {
	Router *mux.Router
}

// type HttpFunc func(w http.ResponseWriter, r *http.Request)

func SetupPrivateRouter(mx *mux.Router) {

	PrivateServer := PrivateServer{mx}

	PrivateServer.HandleFunc("/test", PrivateTest, "GET")

}

func (PrivateServer PrivateServer) HandleFunc(Path string, Fun http.HandlerFunc, Method string) {
	PrivateServer.Router.HandleFunc("/eater/"+Path,
		BuildSecureHandler(Fun)).
		Methods(Method)
}

func BuildSecureHandler(fun http.HandlerFunc) http.HandlerFunc {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Access-Control-Allow-Origin", "*")
		w.Header().Set("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")

		// Check that the JWT is well formed
		// Check the signature
		// Validate the standard claims

		if r.Method == "OPTIONS" {
			return
		}

		// if err := ValidateRequest(r); err != nil {
		// 	// WriteError(err)
		// 	// w.WriteHeader(http.StatusUnauthorized)
		// 	// w.Write([]byte("Unauthorized: no token"))
		// 	// return
		// }

		// // make sure userID is included
		// // if it's there check auth0
		// err := HandleUser(r)
		// if err != nil {
		// 	w.WriteHeader(http.StatusUnauthorized)
		// 	w.Write([]byte("Unauthorized: no user info"))
		// 	return
		// }

		fun(w, r)

		// //If we've gotten this far the user is legit
		// RecordEaterActivity(r)

	})
}

func PrivateTest(w http.ResponseWriter, r *http.Request) {
	// fmt.Printf("test hit")
	w.Header().Set("Access-Control-Allow-Origin", "*")
	io.WriteString(w, "{'Status': 'Green'}")
}

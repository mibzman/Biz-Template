package main

import (
	"log"
)

func Write(Data ...interface{}) {
	//do some dev/prod stuff

	log.Println(Data)
}

func WriteFatal(Data ...interface{}) {
	//do some dev/prod stuff

	log.Fatal(Data)
}

func WriteError(Data ...interface{}) {
	//do some dev/prod stuff

	log.Println("ERROR: ", Data)
}

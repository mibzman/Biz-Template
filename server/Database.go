package main

//test
import (
	"fmt"

	"github.com/jinzhu/gorm"
	_ "github.com/jinzhu/gorm/dialects/postgres"
)

var Accessor *DatabaseAccessor

type DatabaseAccessor struct {
	*gorm.DB
}

func ConnectToDatabase(EnvMode string) {
	var db *gorm.DB
	var err error

	// EnvMode := os.Getenv("DATABASE")

	if EnvMode == "stage" {
		Write("connected to stage")
		// db, err = gorm.Open("postgres", fmt.Sprintf("host=hungerperks2.c48f4qkjqnq6.us-east-2.rds.amazonaws.com user=gorm dbname=staging sslmode=disable password=thisisthegormpassword"))
	} else if EnvMode == "prod" {
		Write("connected to prod")
		// db, err = gorm.Open("postgres", fmt.Sprintf("host=hungerperks2.c48f4qkjqnq6.us-east-2.rds.amazonaws.com user=gorm dbname=hungerperks sslmode=disable password=thisisthegormpassword"))
	} else {
		Write("connected locally")
		db, err = gorm.Open("postgres", fmt.Sprintf("host=localhost user=gorm dbname=template sslmode=disable password=password"))
	}

	db.LogMode(true)
	Accessor = &DatabaseAccessor{db}
	// defer db.Close()

	if err != nil {
		WriteFatal(err)
	}
}

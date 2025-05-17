package main

import (
    "fmt"
    "net/http"
    "github.com/gorilla/mux"
    "github.com/gorilla/websocket"
)

func main() {
    r := mux.NewRouter()
    fmt.Println("Backend running on :8080")
    http.ListenAndServe(":8080", r)
}

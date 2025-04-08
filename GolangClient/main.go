package main

import (
	"fmt"
	"io"
	"net/http"
	"os"
)

type logWriter struct{}

func main() {
	CallEndpoint("http://localhost:8080/")
}

func CallEndpoint(endpoint string) (*http.Response, error) {
	lw := logWriter{}
	resp, err := http.Get(endpoint)

	if err != nil {
		fmt.Println("Error:", err)
		os.Exit(1)
	}

	io.Copy(lw, resp.Body)

	return resp, err
}

func (logWriter) Write(bs []byte) (n int, err error) {

	fmt.Println(string(bs))
	return len(bs), nil
}

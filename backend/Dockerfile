
FROM golang:1.21

WORKDIR /app
COPY . .
RUN go mod init backend && go mod tidy
CMD ["go", "run", "main.go"]

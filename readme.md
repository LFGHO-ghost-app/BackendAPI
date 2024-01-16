# Boo API for LFGHO

This project contains a Full Stack JavaScript application that consumes data from an external API and presents it in an organized manner on the frontend. The API and the frontend are containerized using Docker and can be run together using Docker Compose.

## Prerequisites

Make sure you have the following installed on your system:

- Docker: [Install Docker](https://docs.docker.com/get-docker/)
- Docker Compose: [Install Docker Compose](https://docs.docker.com/compose/install/)

## Getting Started

1. Clone this repository to your local machine:
```
git clone <repository_url>
cd <repository_name>
```

2. Build the Docker images:

```
docker-compose build
```

3. Run the application using Docker Compose:

```
docker-compose up
```


This will start both the API server and the frontend client.

## API

### Endpoint

The API serves data at the following endpoint:

GET http://localhost:3000/api/v1/assets


### API Documentation

For detailed API documentation, refer to the Swagger UI provided by the external API: [API Externo - Swagger](https://echo-serv.tbxnet.com/explorer/#/Secret)

### Optional Endpoints

## Notes

- The API runs on Node.js 16.
- The API is written in JavaScript (ES6+), and no transpilers like Babel or TypeScript are used.
- Docker is used for containerizing the application, making it easy to deploy and run in different environments.

## License

This project is licensed under the [MIT License](LICENSE).

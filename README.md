# ProyectoBackendIII_JesusMedina

This project is a backend application for an AdoptMe platform, developed as part of a Backend III course.

## Features

-   User and Pet management
-   Adoption process
-   Authentication (Login/Register)
-   Mocking endpoints for generating test data
-   Swagger API Documentation

## Getting Started

### Prerequisites

-   Node.js (v18 or higher)
-   MongoDB Atlas connection string (provided in `src/app.js`)
-   Docker (for containerized deployment)

### Local Development

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/JesMedC/ProyectoBackendIII_JesusMedina.git
    cd ProyectoBackendIII_JesusMedina
    ```
2.  **Install dependencies:**
    ```bash
    npm install
    ```
3.  **Start the application:**
    ```bash
    npm start
    # or for development with hot-reloading
    npm run dev
    ```
    The API will be available at `http://localhost:8080`.

### API Documentation (Swagger)

Access the API documentation at `http://localhost:8080/api/docs`.

### Running Tests

```bash
npm test
```

## Dockerization

This project can be run using Docker.

### Build the Docker Image

To build the Docker image, navigate to the root of the project and run:

```bash
docker build -t YOUR_DOCKERHUB_USERNAME/adoptme-backend:latest .
```
Replace `YOUR_DOCKERHUB_USERNAME` with your actual Docker Hub username.

### Run the Docker Container

After building the image, you can run the application in a Docker container:

```bash
docker run -p 8080:8080 YOUR_DOCKERHUB_USERNAME/adoptme-backend:latest
```

The application will be accessible at `http://localhost:8080`.

### Push to Docker Hub

To push your image to Docker Hub, first log in:

```bash
docker login
```

Then push the image:

```bash
docker push YOUR_DOCKERHUB_USERNAME/adoptme-backend:latest
```
Remember to replace `YOUR_DOCKERHUB_USERNAME` with your actual Docker Hub username.

## Project Structure

```
.
├── Dockerfile
├── package.json
├── README.md
├── src/
│   ├── app.js
│   ├── controllers/
│   ├── dao/
│   ├── models/
│   ├── routes/
│   ├── services/
│   └── utils/
└── test/
    └── adoption.test.js
```

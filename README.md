In this DevOps task, you need to build and deploy a full-stack CRUD application using the MEAN stack (MongoDB, Express, Angular 15, and Node.js). The backend will be developed with Node.js and Express to provide REST APIs, connecting to a MongoDB database. The frontend will be an Angular application utilizing HTTPClient for communication.  

The application will manage a collection of tutorials, where each tutorial includes an ID, title, description, and published status. Users will be able to create, retrieve, update, and delete tutorials. Additionally, a search box will allow users to find tutorials by title.

## Project setup

### Node.js Server

cd backend

npm install

You can update the MongoDB credentials by modifying the `db.config.js` file located in `app/config/`.

Run `node server.js`

### Angular Client

cd frontend

npm install

Run `ng serve --port 8081`

You can modify the `src/app/services/tutorial.service.ts` file to adjust how the frontend interacts with the backend.

Navigate to `http://localhost:8081/`

## CI/CD pipeline

The workflow at `.github/workflows/ci-cd.yml` runs on every push to `main` or `master` and:

1. Builds/pushes `arshthakur/dd-task-backend:latest` from `backend/`.
2. Builds/pushes `arshthakur/dd-task-frontend:latest` from `frontend/`.
3. SSHs into the VM, pulls both images, and restarts the containers.

### Required GitHub secrets

| Secret | Description |
| --- | --- |
| `DOCKERHUB_USERNAME` | Docker Hub username (e.g., `arshthakur`). |
| `DOCKERHUB_TOKEN` | Docker Hub PAT with read/write permissions. |
| `SSH_HOST` | Public IP/DNS of the VM (e.g., `13.127.186.219`). |
| `SSH_USER` | SSH username on the VM. |
| `SSH_KEY` | Private SSH key (PEM) that can access the VM. |
| `MONGO_URL` | Atlas/DB URI injected into the backend container. |

Update the deploy commands in the workflow if your container names, ports, or environment variables differ.

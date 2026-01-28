Web Text App (Frontend + Backend) – Kubernetes + Docker
Project Overview

This project is a Fullstack Web Text Application consisting of:

Backend: Node.js server exposing APIs on port 5000.

Frontend: React application (SPA) served via Nginx on port 3000.

The entire project is containerized with Docker and managed using Kubernetes (Minikube) for easy deployment, testing, and portability.

Project Structure
Web-Text-App-k8s/
│
├─ backend/               # Node.js backend
│  ├─ Dockerfile
│  ├─ server.js
│  ├─ package.json
│  └─ package-lock.json
│
├─ frontend/              # React frontend
│  ├─ Dockerfile
│  ├─ nginx.conf
│  ├─ package.json
│  ├─ package-lock.json
│  └─ src/               # React source files
│     ├─ index.js
│     ├─ App.js
│     └─ Components/
│
├─ k8s/                  # Kubernetes manifests
│  ├─ backend.yaml
│  └─ frontend.yaml
│
└─ .gitignore

Prerequisites

Docker
 installed

Minikube
 installed for local Kubernetes cluster

Node.js >= 18

npm >= 9

Running the Project
1️⃣ Start Minikube
minikube start --driver=docker

2️⃣ Use Minikube's Docker Environment

This ensures images are built inside Minikube and accessible to the cluster.

& minikube -p minikube docker-env --shell powershell | Invoke-Expression

3️⃣ Build Docker Images
# Backend
docker build -t kerolos024/backend:latest ./backend

# Frontend
docker build -t kerolos024/frontend:latest ./frontend

4️⃣ Deploy to Kubernetes
kubectl apply -f k8s/backend.yaml
kubectl apply -f k8s/frontend.yaml


Check pods status:

kubectl get pods

5️⃣ Access Frontend

Since the frontend service is NodePort type:

minikube service frontend-service


It will open the frontend in your browser.

Example URL: http://127.0.0.1:51602 (NodePort may vary).

6️⃣ Access Backend

The backend service is accessible inside the cluster on port 5000.

To access it externally:

kubectl port-forward svc/backend-service 5000:5000


Then open: http://localhost:5000

Notes

For development, you can also run backend and frontend locally using npm start (backend) and npm start (frontend) without Docker/Kubernetes.

Using Docker + Kubernetes gives you:

Container isolation

Easy scaling

Self-healing (pods restart automatically)

Portability across environments
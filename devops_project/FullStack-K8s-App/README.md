# My Project
# FullStack-K8s-App 🚀

A full-stack web application deployed on **Kubernetes**, using **Docker**, **ConfigMaps**, **Secrets**, **Persistent Volumes**, and **Ingress**.  
The project demonstrates a complete development-to-deployment workflow for modern cloud-native applications.

---

## 📂 Project Structure

k8s/
├─ backend-deployment.yaml
├─ frontend-deployment.yaml
├─ backend-service.yaml
├─ frontend-service.yaml
├─ ingress.yaml
├─ pv-pvc.yaml
├─ configmap.yaml
└─ secret.yaml
backend/
├─ Dockerfile
├─ server.js
├─ package.json
└─ ...
frontend/
├─ Dockerfile
├─ index.html
├─ dashboard.html
├─ login.js
└─ ...

yaml
Copy code

---

## ⚙️ Features

- **Frontend:** Nginx serving HTML/JS/CSS files.
- **Backend:** Node.js API with login and data endpoints.
- **Kubernetes Resources:**  
  - Deployments & ReplicaSets  
  - Services (ClusterIP & NodePort)  
  - Ingress with custom hostnames  
  - ConfigMap for environment variables  
  - Secret for sensitive credentials  
  - Persistent Volume & PVC for frontend storage
- **Docker Images:** Hosted on Docker Hub (`kerolos024/frontend:v2`, `kerolos024/backend:v2`)

---

## 🚀 Prerequisites

- Docker
- Kubernetes cluster (Minikube recommended)
- Kubectl CLI

---

## 🛠️ Deployment Steps

1. **Start Minikube**
```bash
minikube start
Build & Push Docker images

bash
Copy code
# Backend
docker build -t kerolos024/backend:v2 backend/
docker push kerolos024/backend:v2

# Frontend
docker build -t kerolos024/frontend:v2 frontend/
docker push kerolos024/frontend:v2
Apply Kubernetes resources

bash
Copy code
kubectl apply -f k8s/configmap.yaml
kubectl apply -f k8s/secret.yaml
kubectl apply -f k8s/pv-pvc.yaml
kubectl apply -f k8s/backend-deployment.yaml
kubectl apply -f k8s/frontend-deployment.yaml
kubectl apply -f k8s/backend-service.yaml
kubectl apply -f k8s/frontend-service.yaml
kubectl apply -f k8s/ingress.yaml
Verify Pods & Services

bash
Copy code
kubectl get pods
kubectl get svc
kubectl get ingress
Access Application

Frontend: http://frontend.local/login

Backend API: http://api.local/data

Make sure your /etc/hosts file includes:

lua
Copy code
127.0.0.1 frontend.local
127.0.0.1 api.local
🔑 Default Login Credentials
makefile
Copy code
Username: admin
Password: admin123
💡 Notes
The frontend is served via Nginx with persistent volume storage.

All sensitive data (DB credentials) are stored in Kubernetes Secrets.

ConfigMap is used for environment variables like APP_MODE=production.

The project demonstrates a production-ready Kubernetes deployment workflow.


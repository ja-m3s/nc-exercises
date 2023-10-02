### Share any challenges you had and how you resolved them

#Docker build and push commands:

cd backend-api; export COMPONENT=backend-api; export VERSION=3.0; sudo docker build -t ce-todo-list-project-${COMPONENT}:${VERSION} .; sudo docker tag ce-todo-list-project-${COMPONENT}:${VERSION} jamesw202307/ce-todo-list-project-${COMPONENT}:${VERSION}; sudo docker push jamesw202307/ce-todo-list-project-${COMPONENT}:${VERSION}; cd ../;

cd database; export COMPONENT=database; export VERSION=4.0; sudo docker build -t ce-todo-list-project-${COMPONENT}:${VERSION} .; sudo docker tag ce-todo-list-project-${COMPONENT}:${VERSION} jamesw202307/ce-todo-list-project-${COMPONENT}:${VERSION}; sudo docker push jamesw202307/ce-todo-list-project-${COMPONENT}:${VERSION}; cd ../;

cd todo-frontend; export COMPONENT=todo-frontend; export VERSION=4.0; sudo docker build -t ce-todo-list-project-${COMPONENT}:${VERSION} .; sudo docker tag ce-todo-list-project-${COMPONENT}:${VERSION} jamesw202307/ce-todo-list-project-${COMPONENT}:${VERSION}; sudo docker push jamesw202307/ce-todo-list-project-${COMPONENT}:${VERSION}; cd ../;

#Kubernetes
cd backend-api/kubernetes; sudo microk8s kubectl apply -f deployment.yaml; sudo microk8s kubectl apply -f service.yaml; cd ../../;
cd database/kubernetes; sudo microk8s kubectl apply -f deployment.yaml; sudo microk8s kubectl apply -f service.yaml; cd ../../;
cd todo-frontend/kubernetes; sudo microk8s kubectl apply -f deployment.yaml; sudo microk8s kubectl apply -f service.yaml; cd ../../;

cd backend-api/kubernetes; sudo kubectl delete -f deployment.yaml; sudo kubectl delete -f service.yaml; cd ../../;
cd database/kubernetes; sudo kubectl delete -f deployment.yaml; sudo kubectl delete -f service.yaml; cd ../../;
cd todo-frontend/kubernetes; sudo kubectl delete -f deployment.yaml; sudo kubectl delete -f service.yaml; 

#enable a local LB:
kubectl apply -f https://raw.githubusercontent.com/metallb/metallb/v0.13.11/config/manifests/metallb-native.yaml
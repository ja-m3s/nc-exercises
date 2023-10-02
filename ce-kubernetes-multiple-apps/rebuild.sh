#!/usr/bin/env bash
set -x

#Full fresh rebuild of entire kubernetes environment.Call with ./rebuild.sh from project root

micro="microk8s"

$micro kubectl delete -f kubernetes/backend-deployment.yaml 
$micro kubectl delete -f kubernetes/backend-service.yaml 
$micro kubectl delete -f kubernetes/frontend-deployment.yaml 
$micro kubectl delete -f kubernetes/frontend-service.yaml 
$micro kubectl delete -f kubernetes/dns-test.yaml 

docker stop $(docker ps -q)
docker rm $(docker ps -aq)
docker rmi $(docker images -q)

cd bookstore-backend
docker build --platform linux/amd64 -t bookstore-backend . 
docker tag bookstore-backend jamesw202307/bookstore-backend
docker push jamesw202307/bookstore-backend
cd ../
cd bookstore-frontend
docker build --platform linux/amd64 -t bookstore-frontend . 
docker tag bookstore-frontend jamesw202307/bookstore-frontend; 
docker push jamesw202307/bookstore-frontend
cd ../

$micro kubectl apply -f kubernetes/backend-service.yaml 
$micro kubectl apply -f kubernetes/frontend-service.yaml 

$micro kubectl apply -f kubernetes/backend-deployment.yaml 
$micro kubectl apply -f kubernetes/frontend-deployment.yaml 

$micro kubectl get svc
$micro kubectl get pods
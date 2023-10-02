# Kubernetes

1. What is Kubernetes, and how would you explain it to someone who has never heard of it before?

K8s automates the deployment of, scales and manages containers

2. Can you describe the basic components of a Kubernetes cluster (such as nodes and control plane) and their role?

Control Plane:
API Server - control plane front end
Cloud Controller manager - communicates with the specific cloud provider (e.g. AWS)
Controller manager - watches the nodes, jobs, endpoints and creates accounts
etcd - Configuration manager
Scheduler - selects nodes for pods to run on

Node:
Kubelet - runs on a node, makes sure containers are running in a Pod
kube-proxy - maintains network rules for comms in/out of the cluster
run-time - runs the containers

Addons: e.g. DNS logging.

3. How does Kubernetes ensure high availability and fault tolerance of applications within a cluster?

K8s manages the state of the nodes, and orchestrates the deployment of extra nodes when there is more needed (i.e. one goes down)

4. What is a Kubernetes Service, and why is it important for networking and communication between Pods?

Kubernetes Service is an abstraction above a group of pods that allows a user to access the group, not a group itself.

5. What is a Pod in Kubernetes, and why is it a fundamental building block for containerized applications?

Pods are the container and any storage volumes, config needed to run that container. 

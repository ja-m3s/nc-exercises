### The deployment runs a Docker container, what container does it run and what version?
It runs nginx:1.25.0-alpine

### Where do you think Kubernetes "pulls" this image from?

Docker hub

### The deployment.yaml defined a property called replicas. What do you think this means?

It's the number of 'pods'

### You had to increase the amount of pods running NGiNX, what command did you use to check the amount of running pods and what did it output?

sudo microk8s kubectl get pods

NAME                        READY   STATUS    RESTARTS   AGE
my-nginx-7954cb957d-8ssvg   0/1     Pending   0          3m33s
my-nginx-7954cb957d-ktjfp   0/1     Pending   0          3m33s
my-nginx-7954cb957d-xxbqx   0/1     Pending   0          3m33s
my-nginx-7954cb957d-xvpkk   0/1     Pending   0          5s
my-nginx-7954cb957d-qwklk   0/1     Pending   0          5s
my-nginx-7954cb957d-7jfbk   0/1     Pending   0          5s


### In the service.yaml, it had the identify which pods to send traffic to - which part of the service.yaml defined this?

 selector:
    app: my-nginx

    selects the pod

Extension:

Repo: https://hub.docker.com/repository/docker/jamesw202307/node-api/general
# Kubernetes introduction

It's time to play with [Kubernetes](https://kubernetes.io/)

In this repository you will work through starting a Kubernetes cluster (on your own computer) and getting it to run various [deployments](https://kubernetes.io/docs/concepts/workloads/controllers/deployment/) and [services](https://kubernetes.io/docs/concepts/workloads/controllers/deployment/).

## Pre-requisites

- Completed the [Docker Exercise](https://github.com/northcoders/ce-docker) if you wish to use Docker Desktop to create a Kubernetes cluster

## Scenario

In this guide, you will

- Create a kubernetes cluster that runs locally on your computer
- Deployment an NGiNX container to the cluster
- Scale that deployment to have multiple containers running
- Expose those containers via a service

You will also build out your knowledge of Kubernetes commands and using the [kubectl](https://kubernetes.io/docs/reference/kubectl/) command line tool.

## Instructions

### Running Kubernetes locally

Before we transition to the cloud (and run Kubernetes on AWS) let's start with running Kubernetes locally on your computer.

This allows us to play with Kubernetes commands without incurring cloud expenditure.

The first step is to install the kubectl command line tool

**Installing the kubectl tool**

In order to interact with Kubernetes we need a command line tool called **kubectl**

The kubectl tool allows us to interact with the Kubernetes API and instruct your cluster to take different actions.

Follow the corresponding link below to install kubectl

[Linux installation](https://kubernetes.io/docs/tasks/tools/install-kubectl-linux/)

[Mac installation](https://kubernetes.io/docs/tasks/tools/install-kubectl-macos/)

[Windows installation](https://kubernetes.io/docs/tasks/tools/install-kubectl-windows/)

Once kubectl has been installed it's time to get a kubernetes cluster running locally. There are various options for running kubernetes locally, two are outlined below. Pick one of the options before proceeding.

**Using Docker Desktop to run a kubernetes cluster**

Docker Desktop now comes bundled with an ability to run Kubernetes locally.

Follow the instructions on the Docker website for enabling Kubernetes

[Enabling kubernetes with Docker Desktop](https://docs.docker.com/desktop/kubernetes/)

**Using minikube to run a kubernetes cluster**

[Minikube](https://minikube.sigs.k8s.io/docs/) is another alternative for running a kubernetes cluster locally

The minikube website provides a getting started guide for installing minikube

[Minikube getting started guide](https://minikube.sigs.k8s.io/docs/start/)

### Verifying you can access your cluster

Much like you have to configure the AWS command line with authentication information, in order for it to know which AWS account to communicate with, you have to do the same for the **kubectl** command. You have to configure the kubectl with a context in order to know which cluster it is interacting with.

Both minikube and the docker desktop tool should automatically do this for you. In order to validate whether it has worked, try seeing if you can see the [nodes](https://kubernetes.io/docs/concepts/architecture/nodes/)

Run the command

```
kubectl get nodes
```

You should see output similar to (the name will be different if you are on Mini Kube)

```
NAME             STATUS   ROLES           AGE     VERSION
docker-desktop   Ready    control-plane   3h52m   v1.25.2
```

You can also check the versions of both the client (kubectl) and server (your cluster) by running:

```
kubectl version --output=yaml
```

And you should see output similar to:

```
clientVersion:
  buildDate: "2023-01-18T15:51:24Z"
  compiler: gc
  gitCommit: 8f94681cd294aa8cfd3407b8191f6c70214973a4
  gitTreeState: clean
  gitVersion: v1.26.1
  goVersion: go1.19.5
  major: "1"
  minor: "26"
  platform: darwin/arm64
kustomizeVersion: v4.5.7
serverVersion:
  buildDate: "2022-09-21T14:27:13Z"
  compiler: gc
  gitCommit: 5835544ca568b757a8ecae5c153f317e5736700e
  gitTreeState: clean
  gitVersion: v1.25.2
  goVersion: go1.19.1
  major: "1"
  minor: "25"
  platform: linux/arm64
```

### Deploying your first container

Have a look over the [deployment.yaml](./kubernetes-example/deployment.yaml) file located in the **kubernetes-example** directory.

Here you encounter your first kubernetes concept in the form of a YAML file.

In order to configure and run resources on Kubernetes you commonly define them as YAML files and then provide those YAML files to the kubectl command.

Navigate to the kubernetes directory and apply the deployment

```
kubectl apply -f deployment.yaml
```

### Exploring the running pods

The deployment will create a series of [Kubernetes pods](https://kubernetes.io/docs/concepts/workloads/pods/) on your cluster.

Let's see if your pods are running

```
kubectl get pods
```

And you should see something similar to:

```
NAME                                READY   STATUS    RESTARTS   AGE
nginx-deployment-5f5fb5bf4d-77kz8   1/1     Running   0          43s
nginx-deployment-5f5fb5bf4d-kvtcm   1/1     Running   0          43s
nginx-deployment-5f5fb5bf4d-wmbrq   1/1     Running   0          43s
```

### Exploring the logs

Often you might want to look at the logs of a pod, to find out what happened if an issue occurred.

Try viewing the logs using the command (replacing the pod name with one of your pod names)

```
kubectl logs nginx-deployment-5f5fb5bf4d-77kz8
```

You can also "follow" the logs

```
kubectl logs -f nginx-deployment-5f5fb5bf4d-77kz8
```

### Adding further pods

Another aspect you might have to do when operating a kubernetes cluster is to increase the amount of pods in order to handle the load. Essentially spread the load out over more containers - remember that load balancer concept 😉

Let's double our capacity of NGiNX pods - open up the deployment.yaml and change the replicas value to 6 instead of 3. Save the file and then re-apply it to your cluster in the exact same way

```
kubectl apply -f deployment.yaml
```

Now have a look at how many pods are running.

### Kubernetes services

Now you've got your pods running its time to expose access to them via a [service](https://kubernetes.io/docs/concepts/services-networking/service/)

Have a look over the [service.yaml](./kubernetes-example/service.yaml) file located in the **kubernetes-example** directory.

Let's create the service

```
kubectl apply -f service.yaml
```

Then have a look at your running services

```
kubectl get services
```

You should see output similar to:

```
NAME         TYPE        CLUSTER-IP       EXTERNAL-IP   PORT(S)          AGE
kubernetes   ClusterIP   10.96.0.1        <none>        443/TCP          5h49m
my-service   NodePort    10.110.170.104   <none>        3000:30377/TCP   53m
```

### Viewing your NGiNX app in the browser

The service defined some port mappings.

It specified that the service will **listen** on **port 3000** and **send traffic** to **port 80** on the containers.

Notice that under the **PORT(S)** column it seemed to list some ports. In the example above it lists **3000:30377**, review what yours lists and try going to [http://localhost:PORT-NUMBER](http://localhost:PORT-NUMBER).

So in the example above you would visit

[http://localhost:30377](http://localhost:30377)

**Note:** If you opted for using minikube, you will instead have to use the command `minikube service my-service --url` to get the URL to request instead of using localhost:XXXXX.

Were you able to see the NGiNX **Welcome to nginx!** page?

🎉🎉🎉 You've just deployed your first container and service to Kubernetes!! Well done!

### Extension exercise

In the exercise you deployed a the NGiNX container to Kubernetes.

By default, Kubernetes will "pull" this container image from Docker Hub.

In the extension it's time to try and deploy your own custom container - the API

In order to do this you will need to:

- Make sure you have built a Docker image for the Node API (as part of the Docker exercises) and can run that docker image locally using Docker
  - **🗒️ NOTE:** If you have built your docker image on a Mac with an Apple Silion chip then you will need to rebuild the docker image in order for it to work on non-mac machines. [See the note here](https://docs.docker.com/get-started/04_sharing_app/#run-the-image-on-a-new-instance)
- Create a free Docker Hub account
- Push your image up to your Docker Hub account (see the link in Further reading)
- Update the [deployment.yaml](./kubernetes-myapp/deployment.yaml) located in the **kubernetes-myapp** directory
- Update the [service.yaml](./kubernetes-myapp/service.yaml) located in the **kubernetes-myapp** directory

**💡 Hint:** You can use the example [deployment.yaml](./kubernetes-example/deployment.yaml) and [service.yaml](./kubernetes-example/service.yaml) as a basis for creating your own deployment and service.

## Tearing things down

Tearing down your local containers, is similar to setting them up

`kubectl delete -f service.yaml`

`kubectl delete -f deployment.yaml`

These commands will not delete your files but delete any configuration that was applied by them, in effect removing any containers and services that were created by them.

## Submission Process

Given the nature of using the Docker tool, much of what you will be doing is running commands so as part of submitting you work you will complete the [SOLUTION.md](./SOLUTION.md) file so that it acts as a study guide for completing docker.

1. Fork this repository

2. Complete the [SOLUTION.md](./SOLUTION.md) file

3. If you worked on the extension - make sure you have saved, committed and pushed your service and deployment YAML files

4. Share your repository link as indicated

## Further reading

[Pushing images to Docker Hub](https://docs.docker.com/get-started/04_sharing_app/)

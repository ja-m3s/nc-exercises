# Helm

Helm is a tool to allow for templating, variable substitution and packaging of Kubernetes YAML files.

In this exercise you are going to convert your applications to be Helm charts

## Pre-requisites

- You have completed the [ce-gitops-argocd](https://github.com/northcoders/ce-gitops-argocd) exercises

## Instructions

### Installing Helm

Firstly you will need to install the Helm command line tool. This will allow you to run commands like `helm install` and `helm create`

Follow the [instructions on the Helm website](https://helm.sh/docs/intro/install/) to install Helm on your computer

You can verify that Helm is installed by running the command:

```
helm version
```

Helm will use your local `kubectl` for authenticating with your cluster

After installing you may have a warning about your kube config file being world-readable. We can change the permissions using the following command;

```
chmod 600 ~/.kube/config
```

### Converting your NGiNX container

You are now going to convert the NGiNX container from the [ce-gitops-argocd](https://github.com/northcoders/ce-gitops-argocd) exercise to be a Helm chart instead.

Firstly create the helm chart, on the command line whilst within this repository run

```
helm create nginx-argo-helm-example
```

You should notice this will create a new directory called **nginx-argo-helm-example**

Explore the files and then using what you know about Helm (you can explore the NC Notes application for pointers) work on converting the NGiNX application to be a Helm chart instead.

You will notice that the starter code produced by `helm create` actually produces a Helm chart for NGiNX but it is over complicated for our needs - you won't need a serviceaccount, ingress or hpa. Use your helm knowledge to strip it back to only what is needed.

**💡HINT:** You might want to install VS Code extensions such as the [VS Code Kubernetes Extension](https://marketplace.visualstudio.com/items?itemName=ms-kubernetes-tools.vscode-kubernetes-to) and the [Helm Intellisense](https://marketplace.visualstudio.com/items?itemName=Tim-Koehler.helm-intellisense) extension to help with your editing experience.

### Manual deployment

**💡HINT:** You might want to stop any previous running containers such as NGiNX containers from running before working through this step. If you used ArgoCD to deploy then you can log back into ArgoCD and **Delete** the app. This helps you to identify the right containers and ensures you won't have any pod name conflicts.

Once you have edited your Helm chart, try installing it into your cluster manually using the `helm install` command, replacing the `CHART_NAME` with your desired chart name:

```
helm install CHART_NAME ./nginx-argo-helm-example
```

You can use `kubectl get pods` to verify that your chart has been installed successfully or alternatively use `helm list` to see which helm charts are installed.

### Manual uninstall

You can run `helm list` to show which helm charts you have installed to your cluster.

Then run `helm uninstall CHART_NAME` to uninstall a chart.

For example if I installed the chart with the name `nginx-app` then I would uninstall the chart using the command

```
helm uninstall nginx-app
```

### Deployment

Now explore deploying your Helm chart using ArgoCD

You will need to setup a new repository in ArgoCD pointing to this repository and then remind yourself of how you setup a new application.

## Extension exercise

Try creating a new Helm chart for the Java application we have encountered on the programme.

See if you can create the helm chart and get it installed using ArgoCD

## Submission process

1. Fork this repository

2. Remember to commit and push regularly to your repository

3. Share link to your repository as indicated

## Further reading

[Helm documentation](https://helm.sh/docs/)

[VS Code Kubernetes Extension](https://marketplace.visualstudio.com/items?itemName=ms-kubernetes-tools.vscode-kubernetes-to)

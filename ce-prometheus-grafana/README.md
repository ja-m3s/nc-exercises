# Prometheus and Grafana

## Scenario

In this exercise you will use ArgoCD to deploy Prometheus to your local Kubernetes cluster.

Given the nature of deployment, there are a series of videos to follow and understand the aspects of deploying Prometheus to your cluster and how it can be configured to scrape your custom metrics.

## Pre-requisites

- The exercise assumes you have completed the [ce-code-telemetry](https://github.com/northcoders/ce-code-telemetry) exercise and have instrumented the Python bookstore API

## Instructions

Follow through this series of videos to bring together your custom metrics, Prometheus and Grafana dashboards

### 1. Resetting cluster and getting the app deployed

This video shows resetting the Kubernetes cluster from scratch and getting the BookStore API deployed, complete with metrics up to the cluster

[Video Tutorial](https://cloud-engineering-learners-media.s3.eu-west-2.amazonaws.com/prometheus/prometheus_initial_setup.mp4)

### 2. Installing prometheus using ArgoCD

This video shows how to install and configure Prometheus using ArgoCD

[Video Tutorial](https://cloud-engineering-learners-media.s3.eu-west-2.amazonaws.com/prometheus/prometheus_install_using_argocd.mp4)


### 3. Prometheus custom metrics

Finally it's time to configure your custom dashboard and set Prometheus up to consume your custom metrics. This video guides you through that.

[Video Tutorial](https://cloud-engineering-learners-media.s3.eu-west-2.amazonaws.com/prometheus/prometheus_custom_metrics.mp4)


## Submission process

1. Fork this repository

2. Follow through the instructions

3. Complete the SOLUTION.md

4. Share your GitHub repository as indicated

## Further reading

[Service monitoring with Kubernetes and Prometheus](https://dev.to/apgapg/creating-a-service-monitor-in-k8s-nl8)
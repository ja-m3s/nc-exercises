# Code Telemetry

## Introduction

In this exercise, you are going to take the concept of observability and add telemetry to your existing applications.

Specifically, you'll add telemetry to the Python Books API, and the Java spring boot application to expose information about how the applications are performing.

For your reference, the Python books API was given to you in the [**ce-kubernetes-multiple-apps**](https://github.com/northcoders/ce-kubernetes-multiple-apps) exercise and the Java application was given to you in the [**ce-cicd-sample-java-app**](https://github.com/northcoders/ce-cicd-sample-java-app) exercise so navigate back to these to instrument them when prompted.

Also, do not worry if you haven't experienced working with either Python or Java, this might feel uncomfortable - having to work with code and understand languages/frameworks that you are yet to use is part of a cloud engineer's role; understanding an application codebase and identifying how it could be instrumented in order to better educate the team that created the application.

## Prometheus client libraries

Prometheus has client libraries that can be added as dependencies to your code. You can find the listing of client libraries on the page below

[Prometheus client libraries](https://prometheus.io/docs/instrumenting/clientlibs/)

Then there are specific wrappers around those client libraries applicable to the frameworks used in the applications being created

- For **Python**, the application is a Python Flask API and the [Prometheus Flask Exporter](https://pypi.org/project/prometheus-flask-exporter/) provides observability tools that can work with Prometheus

- For **Java**, the application is a Spring Boot application and [Micrometer](https://micrometer.io/) provides observability tools that can work with Prometheus

You will need to use a combination of both the appropriate Prometheus client library as well as the framework relevant wrapper. The first to implement the tracking of any given metric and the second to configure the application to expose the collected metrics.

## Instructions

Your goal is to instrument the Python and Java application.

Once instrumented you should be able to start the applications, using Docker, and view the metrics being exposed by them.

To view the metrics you should be able to:

- Visit [http://localhost:5000/metrics](http://localhost:5000/metrics) on the Python application
- Visit [http://localhost:8080/actuator/prometheus](http://localhost:8080/actuator/prometheus) on the Java application and see the list of metrics

**note**: You may have applied port mappings to the docker containers running these applications. Eg `-p 5050:5000`. It could be helpful to run your docker containers without the `-d` (detach) flag to allow any errors to be made available directly in your terminal for debugging purposes.

**hint**: You may well need to alter the dependencies to each application as well the application code itself. As you revisit each of the repositories, consider **how** dependencies are applied in the project and **when** this occurs eg. which line in the Dockerfile handles this.

At a minimum your instrumentation should have:

- The Python app should count how many times the `get` method for getting the list of books is called
- The Java app should count how many times the `getGreeting` method is called within the `GreetingServiceImpl`
- The Java app should time how long the `greeting` method in the `GreetingController` takes to execute

## How do I know I am finished?

You should be able to visit the metrics pages listed for each API and see your custom metrics.

For example here is a sample from the Java metrics exposed. It shows a custom metric called `greeting_counted_total`

![Screenshot of prometheus metrics showing customer counted metric](./media/images/metrics_spring_boot.png 'Screenshot of prometheus metrics showing customer counted metric')

## Submission process

1. Apply the telemetry to your Python books API repository, commit and push

2. Apply the telemetry to your Java application repository, commit and push

3. Complete the [SOLUTION.md](./SOLUTION.md) in this repository

## Further reading

[Micrometer and Spring Boot](https://mehmetozkaya.medium.com/monitor-spring-boot-custom-metrics-with-micrometer-and-prometheus-using-docker-62798123c714)

[Counted annotation stack overflow post](https://stackoverflow.com/questions/70975346/springboot-micrometer-metrics-not-showing-up)

# Docker Compose

​
Docker Compose is a tool for defining and running multi-container Docker applications. It allows you to specify an entire application stack, including all of its services, networks, and volumes. With Docker Compose, you can easily manage and orchestrate complex applications consisting of multiple interconnected containers. It simplifies the process of launching, scaling, and managing containerized applications, making it a valuable tool for development, testing, and production deployment.
​

## Scenario

​
You have been tasked with deploying a multi-service application using Docker Compose. Instead of building the application code from scratch, you will use existing Docker images for each service. The application stack consists of a web frontend, an API backend, and a database.
​
For this exercise use Nginx as the front end, the node-api supplied in the main sprint as backend, and PostgresQL for the database. You do not need to create any code for this exercise, we are more focused on using Docker Compose to get this infrastructure ready.
​
The containers should accept traffic on the relevant ports;
​

- nginx - 80
- Node API - 3000
- PostgresQL - 5432
  ​

1. Create a Docker Compose YAML file that defines this multi-service application. Configure each service to use the relevant image, expose the correct ports, and an environment variable in each to signify that these containers are part of the "dev" environment.
   ​
2. Create a Docker network for the application to ensure communication between services.
   ​
3. Configure data persistence for the database service using Docker volumes.
   ​
4. Build and run your application and test each of the containers directly to prove they start as expected with Docker Compose

## Advanced extension

Add the necessary code so that if I were to send a GET request to an endpoint of /log on the node API, it logs the users IP address in the PSQL containers database with the time of request.

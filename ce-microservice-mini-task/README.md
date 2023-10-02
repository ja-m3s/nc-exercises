# Microservice Mini Task

This repository contains three Express.js microservices, each with a corresponding Dockerfile to build Docker images. The objective of this task is to build these images and set up a Kubernetes cluster to orchestrate and connect these services. For this task, we'll focus on local image builds, and there's no need to push them to Dockerhub.

## Services

### Users Service

The Users Service is the only API intended to be publicly accessible. It provides information about users in the system and their associated orders.

#### Endpoints

- **GET: /api/users**

  - Description: Retrieve a list of all available users in the system with their corresponding ID and first name.

- **GET: /api/users/:user_id/orders**
  - Description: Retrieve a list of ordered items by a specific user.
  - Example Request: `/api/users/02/orders`
  - Example Response:
    ```json
    {
      "02": {
        "products": ["Gaming Console", "Printer", "Fitness Tracker"]
      }
    }
    ```
    The second endpoint interacts with the Orders Service to fetch user order details. The Orders Service, in turn, queries the Products Service to obtain the names of ordered items instead of just returning order numbers.

### Orders Service

The Orders Service manages order-related information and connects with the Products Service to obtain product details.

#### Endpoints

- **GET: /api/orders/:user_id**
  - Description: Retrieve a list of ordered items by a specific user.
  - Example Request: `/api/orders/02`
  - Example Response:
    ```json
    {
      "orders": {
        "products": ["Gaming Console", "Printer", "Fitness Tracker"]
      }
    }
    ```

### Products Service

The Products Service handles product-related data and provides product details.

#### Endpoints

- **POST: /api/orders/:user_id**
  - Description: Retrieve a list of product names for a list of product codes.
  - Example Request: `/api/products`
  - RequestBody:
    ```json
    {
      "productCodes": ["K7P9W2"]
    }
    ```
  - Example Response:
    ```json
    {
      "products": ["Laptop"]
    }
    ```

## Service Architecture

Consider the following service architecture to achieve the intended communication flow:

- **Users Service** communicates with the **Orders Service** to retrieve user order numbers.
- **Orders Service** communicates with the **Products Service** to obtain product details based on order numbers.

Remember that only the Users Service should be publicly accessible, while the other services should be restricted to internal communication within the Kubernetes cluster.

## Getting Started

1. **Build Docker Images**

   - Navigate to each service's directory (e.g., `users`, `orders`, `products`).
   - Build Docker images for each service using the respective Dockerfiles.
   - Example: `docker build -t users-service .`

2. **Kubernetes Setup**

   - Create and Apply Kubernetes manifests (Deployment and Service YAML files) for each service to deploy them on your local cluster, in the Kubernetes folder.

3. **Service Communication**

   - Ensure that the services communicate with each other using internal DNS within the Kubernetes cluster.
   - Think about where you might have to supply this DNS

4. **Testing**

   - Test the functionality by making API requests (use Insomnia, Postman, or even your browser) to the Users Service and verifying that it can access data from the Orders and Products Services as expected.

## Tearing things down

To tear all of your Kubernetes files down at once you can apply or delete an entire folder by supplying the path to the folder instead of single files.

`kubectl delete -f ./kubernetes` if you are in the root directory of this repo

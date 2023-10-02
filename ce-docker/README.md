# Docker

Throughout this repository you will explore various aspects of the containerisation tool [Docker](https://www.docker.com/)

You will both build containers and also run them using Docker

## Exercises

Consult the Submission Process below before working through the various exercises

Remember to commit and push after working through each exercise

## Running containers

You wil start off working through exercise for getting containers running.

Using containers on the public Docker container registry, the [Docker Hub](https://hub.docker.com/) and run publicly available Docker containers

### 1. Docker installation

In order to work with Docker you will first need it installed on your own computer

Navigate to [Docker.com](https://www.docker.com/) in order to install Docker Desktop

**🗒️ NOTE:** You do NOT need to have a Docker account or pay for anything when completing the exercises.

### 2. Explore running containers

You can look at your current running containers by using the command:

```
docker ps
```

If you use the `-a` flag it will show all current and past running containers

```
docker ps -a
```

### 3. Explore images you have built or "pulled down"

You can explore the images you have built or pulled down from Docker Hub by using the command:

```
docker images
```

### 4. Running a container

Remember that NGiNX web server - instead of running it on an instance, let's try to get it running via Docker.

The Docker Hub has an [official NGiNX Docker image](https://hub.docker.com/_/nginx), read through the Docker material and see if you can get the NGiNX container running locally on your computer.

At this point just showing the regular NGiNX "Welcome to nginx!" page is great

**💡 HINT:** In order to see the webpage in your browser you will need to **Expose an external port**

### 5. Running a container with your custom HTML page

Re-visiting the NGiNX container, let's get it showing the HTML located within the [nginx-website](./nginx-website) directory.

Re-review the [official NGiNX Docker image documentation](https://hub.docker.com/_/nginx) and see if you can get the container showing the index.html.

📷 - Remember to take some screenshots for your solutions file

## Building containers

Now let's turn attention to building your own custom containers

### 6. Building an echo container

Create a new directory called **echo-command-app** and within that directory create a file called **Dockerfile**

Add the following contents to the file

```
FROM ubuntu:22.10


CMD ["/usr/bin/echo", "Hello, World!"]
```

Now navigate to that directory and let's build the container

Run the command

```
docker build -t ubuntu-echo .
```

As long as you are within the directory that contains the Dockerfile (the . at the end of the command means "look in my current directory for the dockerfile) then the Docker build will kick in to action.

In the above command you created a docker image called **ubuntu-echo** - now let's have a look at your docker images

```
docker images
```

Using knowledge from the previous section, can you get the container running?

**💡 NOTE:** If you find that your terminal no longer works after running the container, simply close the terminal and open a new one.

**💡 HINT:** You should see the container start, print "Hello, World!" and then immediately stop.

### 7. A note on tagging

It is good practice to tag each new container build with a new version

Under the hood when you run the command

```
docker build -t ubuntu-echo .
```

Docker actually creates a tag called **latest** and associates it with that build, you can see this under the **TAG** column when you run `docker images`

Try updating the command from **Hello, world!!** to being something else and lets build a new version of the image

```
docker build -t ubuntu-echo:1.0 .
```

Notice in the above command you specify the tag after the image name in the format of `<image-name>:<image-tag>` such as `ubuntu-echo:1.0`

Then if you want to run that particular version you can run

```
docker run ubuntu-echo:1.0
```

### 8. Your own Node container

Remember that Node API that allowed you to add learners - now you are going to containerise it.

Within the [node-api](./node-api) directory you will find the code for the application and an [empty Dockerfile](./node-api/Dockerfile)

See if you can populate that Dockerfile in order to get your Node API running - you should be able to visit http://localhost:8080/health-check in order to view the health of the application.

**💡 HINT:** You should use the [Node official image](https://hub.docker.com/_/node) as your **Base Image** and have a look at the further reading for a guide that might help.

**💡 HINT:** Remember you will need to expose ports, the above example uses port 8080 which could be mapped to port 3000

**💡 HINT:** You will need a command to start the application, take a look at the **package.json** and in particular the **start** script - you'll need that command.

### 9. Docker multi-stage builds

In task 8 you might have found that your container builds the app, using `npm install` and then also runs it using `node src/index.js`

Have a look over Docker multistage builds as a way of separating building the application from running it.

[https://docs.docker.com/build/building/multi-stage/](https://docs.docker.com/build/building/multi-stage/)

## Submission Process

Given the nature of using the Docker tool, much of what you will be doing is running commands so as part of submitting you work you will complete the [SOLUTION.md](./SOLUTION.md) file so that it acts as a study guide for completing docker.

1. Fork this repository

2. Complete the [SOLUTION.md](./SOLUTION.md) file

3. Share your repository link as indicated

## Further reading

[Building a NodeJS app](https://nodejs.org/en/docs/guides/nodejs-docker-webapp)

[Docker multistage builds - NodeJS example](https://sachithsiriwardana.medium.com/dockerizing-nodejs-application-with-multi-stage-build-e30477ca572)

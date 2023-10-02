# Solutions

## How do you inspect the version of Docker you are running via the command line? 

docker -v

## What command(s) did you use to get the NGiNX container running and showing the Welcome to NGiNX page?

docker pull nginx && docker run -p 8080:80 nginx


## With Docker, what does it mean when you "expose a port"?

map a port from docker to host

## What command(s) or approach did you use to get NGiNX showing your index.html file?

Create a Dockerfile see nginx-website/Dockerfile.
docker build -t nginx-modified .
docker run -p 8080:80 nginx-modified


## Share a screenshot of your browser showing your index.html file

See screen nginx-website/nginx-proof.png

## After working with the NGiNX container, what is the output of your docker images command?

root@Ubuntu:/home/vboxuser/Docker# docker images

REPOSITORY       TAG       IMAGE ID       CREATED         SIZE

nginx-modified   latest    4a149a27e393   5 minutes ago   206MB

nginx            latest    eea7b3dcba7e   2 weeks ago     187MB

...

## What command did you use to build your custom ubuntu-echo command?
Create Dockerfile as per instructions, cd echo-command-app, then
docker build -t ubuntu-echo .

## What command did you use to get your custom ubuntu-echo container running?

sudo docker run ubuntu-echo

## What Dockerfile did you create for your NodeAPI container?

See node-api/Dockerfile

## What command did you use to build your Node API container?

sudo docker build -t node-api:2.0 && sudo docker run -p 3000:3000 node-api:2.0


#Step 9 learning:

Multistage builds separat building the application from running it. Not really
worth doing in Stage 8's work as no massive build steps to complete but, if
using something to build your app like GCC, Maven, you'd build your base image,
then layer a new 'runnable' Docker image over the top in your Dockerfile which would use 
the build image previously created.


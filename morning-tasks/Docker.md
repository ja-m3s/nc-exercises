# Docker

1. What is containerization, and how does it differ from virtualization?

Essentially, containerization is a way of packaging an application in a consistent OS environment along with any dependencies it has. Virtualization is the provisioning of a virtual machine to run an application.

Perhaps better explained here: https://www.ibm.com/blog/containers-vs-vms/

2. Why is containerization important in modern software development and deployment?

Prevent's the underlying OS affecting the running application, consistent running env. 'Jails' the application into a specific mountpoint/process/network namespace on the OS (more secure) (using namespaces and chroots). Portability.

3. What is the difference between an image and a container in Docker?

Image - so an image is a layered file containing instructions on how to create a Docker container, it contains the libraries, the application, any dependencies needed to run it.

Container is an instance of an image.

4. Can you give an example of a situation where you might choose to use Docker containers in a software development project?

Packaging applications you may wish to run on heterogeneous environments i.e. (AWS and GCP) may have differences in OS deploymen but both can run probably docker.

5.If you were tasked with explaining Docker to someone who has never heard of it before, how would you describe it in a few sentences?

Software which creates packaged apps (images) and runs those packaged versions of applications in the form of containers. Helps to make apps portable, consistent. It's also more lightweight than traditional virtualization (i.e. one app per VM)

## Extension

Fill in this cheat sheet throughout the day to help and remind you understand how to use Docker commands

| Command | Description |
| :-----: | ----------- |
|   ps    | Show running docker processes
| images  | Displays all the currently installed docker images
|  pull   | Pulls a docker image from the docker repo
|  build  | Builds a docker image
|   run   | Start a docker process
|  stop   | Stop a running docker process

| Flag | Description  
|:------:|---------------------------------------------------
| -a |
| -d |
| -t |
| -p |

Below is an example of a how you might format a docker command. (In documentation having something wrapped in square brackets [] denotes that it is optional to provide this in the command)

```bash
docker run [OPTIONS] <IMAGE[:TAG|@DIGEST]> [COMMAND] [ARG...]
```

# Kubernetes Networking

1. What is Kubernetes internal DNS, and why is it essential for containerized applications within a cluster?

Intra-kube name resolution, as kubes go up and down, their IPs might change, need a service name to be defined such that it is referenced rather than the IP

2. Can you explain the concept of a Kubernetes ReplicaSet and why it's useful for maintaining a specified number of pod replicas?

 Kubernetes ReplicaSet - a collection of instances of pods, maintained for availability

3. In your own words what is the difference between a ClusterIP, NodePort, and LoadBalancer service types?

ClusterIP - a load-balanced IP address, used for Pod-to-Pod communication
NodePort -  exposes your application to external clients outside the K8s cluster
LoadBalancer - cloud-specific addition to NodePorts. Creates a load balancer to spread the traffic between NodePorts

4. If you have a front and backend, what service might be best to use to expose the backend to the frontend?

I'd probably connect a client through a NodePort or a LoadBalancer to the BE depending on how much traffic.

5. What is service discovery in Kubernetes and what is it's purpose?

Using the endpoints API, client software can discover the IP and ports of pods in an application

1. For now you can assume that all your customers are going to be located within the United Kingdom. What AWS region do you think your VPC should be set up in and why?

**eu-west-2 - UK-based, so, easier from a legislation point of view, lower latency assuming customers are UK based.**

2. Now you have decided the AWS region it is time to move on to the availability zones. Which availability zones will you use? (Remember to check the diagram as well)

**a,b and/or c - We are designing a HA cluster, hence, more than 1.**

3. What IP range will you use for defining your VPC and why have you chosen that range?
Hint: You should specify a CIDR range for your VPC

**(3xNAT IPs, 3xBastion IPs, 3xN Kubernetes nodes so 10.0.0.0/24) - 256 IPs should be enough.**

4. Now you have your VPC range, it is time to define the subnets.
How many subnets do you require?

**six subnets, 3 public and 3 private**

What IP range will you use for each subnet?
Hint: You might want to give each subnet a name that relates to its purpose and location

**10.0.0.0/27**

## Extension

Consider a scenario where we have customers all over Europe.

How do you think this might change our infrastructure?

**Depending on requirements, we may need to utilise another region like eu-central-1**

## Advanced

Have a go at creating a VPC in the AWS console, without using the set up wizard available. See if you can get the following working;

- A VPC with 3 availability zones
- A public and private subnet for each of the availability zones
- Security groups which allow HTTP and HTTPS requests as Ingress (incoming) and all traffic as Egress (outgoing)
- An EC2 instance in one of the public subnets that you can SSH into
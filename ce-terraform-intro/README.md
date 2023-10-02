# Introduction to Terraform

You have used the web console to configure AWS services

You have used the CLI to configure AWS services

Now it's time to step up our coding and automation skills and use [Infrastructure as Code](https://developer.hashicorp.com/terraform/tutorials/aws-get-started/infrastructure-as-code), in the form of Terraform, to create your cloud infrastructure 👩‍💻

Once you've finished the morning task tutorial, have a go at this exercise to set up a production network using Terraform!

## ⭐️ Golden rule ⭐️

Now that you are entering the world of infrastructure as code there is one golden rule to keep in your mind.

**_Once you are managing a piece of infrastructure using terraform you should ALWAYS manage that infrastructure with terraform._**

Said another way, don't edit things bespokely in the console or via the CLI. If Terraform was used to create the infrastructure then terraform should be used to modify or remove it

### 1. Re-creating the production ready network

Using your new skills it's time to create that production ready VPC in terraform

In this directory, create your **main.tf** file.

Your terraform config should include:

- A VPC with the correct private IP address space CIDR range
- 6 subnets in total
- 3 subnets, one in each availability zone, named as public
- 3 subnets, one in each availability zone, named as private
- An Internet Gateway
- A route table that can direct local traffic as well as external traffic

Make sure to commit and push your code at this point

### 2. Variables and looping

Let's now refactor - its often a good tactic to keep your code [DRY](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself)

If you haven't used variables, see if you can utilise variables for defining the CIDR ranges and how you might loop over them to create your subnets

Make sure to commit and push your code at this point

### 3. Modules

Let's take things even further - people have made it even easier to write terraform by providing re-usable [modules](https://developer.hashicorp.com/terraform/language/modules) which means less boiler plater code for you to write.

See if you can refactor your code to utilise the [AWS VPC module](https://registry.terraform.io/modules/terraform-aws-modules/vpc/aws/latest)

### Extension

Provision an EC2 instance in one of your public subnets that you can SSH into.

To achieve this you will need to consider the following;

- Key pair for SSH (create this via CLI rather than Terraform) - [Creating a key pair via CLI](https://docs.aws.amazon.com/cli/latest/userguide/cli-services-ec2-keypairs.html)
- An internet gateway
- Route tables
- Security Groups

Separate your code into different files such as **igw.tf** for the internet gateway and **sg.tf** for the security groups.

Separation of concerns is good practice to keep your projects clean and easy to navigate.

## Tearing things down

Make sure you have ran `terraform destroy` within your morning task directory **and** this directory.

You can validate this by going on to the console and making sure your EC2 instance is no longer running and any VPC's created by Terraform are no longer there.

## Submission process

1. Fork this GitHub repository

2. Make regular commits and pushes back to your repository as you write your code. At a minimum commit and push when indicated in the instructions but feel free to commit more often. It help's to see the journey you worked through when completing the task.

3. Share your GitHub link

4. Tear things down as described above

## Further reading

[Terraform variables](https://developer.hashicorp.com/terraform/language/values/variables)

[Terraform loops and tricks](https://blog.gruntwork.io/terraform-tips-tricks-loops-if-statements-and-gotchas-f739bbae55f9)

[Terraform module library](https://registry.terraform.io/browse/modules)

[Cloud Development Kit (CDK) - An AWS specific infrastructure as code tool](https://aws.amazon.com/cdk/)

[Pulumi - An alternative infrastructure as code tool](https://www.pulumi.com/)

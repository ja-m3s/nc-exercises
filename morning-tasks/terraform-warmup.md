

# Terraform project warm up

​

1. Imagine you need to make changes to the configuration of an existing AWS EC2 instance that's being managed by Terraform. How might you go about making those changes while minimizing disruption to your production environment?

​Modify tf file, then use terraform apply (only updates bits that have changed)

2. In your own words, what is a module in Terraform?

​A folder containing a group of (hopefully) logically separated components of some infra. I.E a folder containing the VPC config called 'vpc'.

3. What are some advantages of using modules in your Terraform code?

​Logical separation for ease of understanding. Easier to swap in/out modules.

4. What are some instances that you might use an output block?

​Passing variables between modules.

5. How can you pass arguments to a module? What steps do you need to take to add an argument?

​Use variables.tf output.tf in main folder,

6. Imagine you're creating a Terraform module to deploy an AWS VPC. What are some variables you might define for this module to make it adaptable for different environments?

A tag for env, like 'environment name' e.g prd, uat, staging, dev etc, perhaps database name to prevent dev pointing to prd. Subnet range.


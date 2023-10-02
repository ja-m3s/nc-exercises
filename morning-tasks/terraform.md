# Terraform

1. What is infrastructure as code (IaC) and why is it important in modern IT operations? What are the advantages?

Software defined servers and networking. Reproducible, reusable, speedy to deploy.

2. Explain the concept of "Infrastructure as Code" (IaC) and how Terraform fits into this concept.

It's a platform agnostic coding language for infrastructure

3. What problems do modules help address, and how do they promote reusability?

separate out code so it's 'modular', swap bits in and out you need/don't need.

4. Explain in your own words what the following commands achieve;

- `terraform init` - pull down terraform connectors

- `terraform plan` -  preview changes 

- `terraform apply` - runs the 'plan' (CRUD)
 
- `terraform destroy` - tear down resources in plan

- `terraform fmt` - formatting of plans into a standard fashion

- `terraform output` - prints out variables

- `terraform taint` - marks a resource as broken, to be replaced in next apply
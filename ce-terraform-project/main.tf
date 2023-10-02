terraform {
  required_version = ">= 1.0.0"
  /* Use S3 bucket and dynamo table as backend*/
  backend "s3" {
    bucket         = "tf-project-bucket-jw"
    key            = "global/s3/terraform.tfstate"
    region         = "eu-west-2"
    dynamodb_table = "tf-project-table"
    encrypt        = true
  }
}

/*Create VPC with public and private subnets*/
module "vpc" {
  source = "terraform-aws-modules/vpc/aws"

  name = "ce-terraform-project-vpc"
  cidr = "10.2.0.0/16"

  azs             = ["eu-west-2a", "eu-west-2b", "eu-west-2c"]
  private_subnets = ["10.2.10.0/24", "10.2.20.0/24", "10.2.30.0/24"]
  public_subnets  = ["10.2.11.0/24", "10.2.21.0/24", "10.2.31.0/24"]

  enable_nat_gateway = true
  enable_vpn_gateway = false

  public_subnet_suffix = "public"
  create_igw = true
}

/*All security groups required for project:
  SSH, HTTP, HTTPS and an allow all out rule*/
module "security_groups" {
  source = "./modules/security_groups"
  vpc_id = module.vpc.vpc_id
}

/*Creates an EC2 instance using Ubuntu LTS which
  runs nginx (currently serving http only) */
module "ec2" {
  source                 = "./modules/ec2"
  sg_http_id             = module.security_groups.sg_http_id
  sg_https_id            = module.security_groups.sg_https_id
  sg_ssh_id              = module.security_groups.sg_ssh_id
  sg_egress_allow_all_id = module.security_groups.sg_egress_allow_all_id
}

/*Creates a load balancer which shares across three subnets*/
module "load_balancer" {
  source                 = "./modules/load_balancer"
  vpc_id                 = module.vpc.vpc_id
  sg_http_id             = module.security_groups.sg_http_id
  sg_https_id            = module.security_groups.sg_https_id
  sg_ssh_id              = module.security_groups.sg_ssh_id
  sg_egress_allow_all_id = module.security_groups.sg_egress_allow_all_id
  public_subnets         = module.vpc.public_subnets
}


/*Creates an autoscale group which maintains three instances at all times*/
module "autoscaling_group" {
  source             = "./modules/autoscaling_group"
  public_subnets     = module.vpc.public_subnets
  target_group_id    = module.load_balancer.target_group_id
  public_instance_id = module.ec2.public_instance_id
}


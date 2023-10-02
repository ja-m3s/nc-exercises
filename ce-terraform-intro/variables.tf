variable "environment_name" {
  type    = string
  default = "ce_cloud_terraform"
}

variable "vpc_cidr" {
  type    = string
  default = "10.2.0.0/16"
}

variable "private_subnets_cidrs" {
  type    = list(string)
  default = ["10.2.10.0/24", "10.2.20.0/24", "10.2.30.0/24"]
}

variable "public_subnets_cidrs" {
  type    = list(string)
  default = ["10.2.11.0/24", "10.2.21.0/24", "10.2.31.0/24"]
}

variable "num_private_subnets" {
  type    = number
  default = 3
}

variable "num_public_subnets" {
  type    = number
  default = 3
}

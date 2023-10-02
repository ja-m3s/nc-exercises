variable "vpc_id" {}
variable "sg_http_id" {}
variable "sg_https_id" {}
variable "sg_ssh_id" {}
variable "sg_egress_allow_all_id" {}
variable "public_subnets" {}

/*variable "load_balancer_certificate" {
  description = "Uses a cert in my aws, might need changing if running on another AWS account"
  type        = string
  default = "arn:aws:acm:eu-west-2:296134751514:certificate/6841e437-0e00-4957-8179-7e9fa1a606b0"
}*/
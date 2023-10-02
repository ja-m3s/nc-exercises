variable "vpc_id" {}

data "http" "myip" {
  url = "https://ifconfig.me/ip"
}
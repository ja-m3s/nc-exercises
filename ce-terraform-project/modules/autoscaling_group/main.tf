variable "public_subnets" {}
variable "public_instance_id" {}
variable "target_group_id" {}

resource "aws_autoscaling_group" "asg" {
  name_prefix = "asg-"
  #maintain 3 instances at any time
  desired_capacity    = 3
  min_size            = 3
  max_size            = 3
  vpc_zone_identifier = var.public_subnets
  launch_template {
    id      = var.public_instance_id
    version = "$Latest"
  }
  target_group_arns = [var.target_group_id]
}
resource "aws_launch_template" "public-instance" {
  name_prefix   = "public-nginx-"
  image_id      = "ami-0eb260c4d5475b901" # Ubuntu LTS
  instance_type = "t2.micro"
  key_name      = "public-instance-keypair"
  user_data = filebase64("modules/ec2/user-data.sh")
  
  network_interfaces {
    associate_public_ip_address = true
    security_groups = [
    var.sg_http_id,
    var.sg_https_id,
    var.sg_ssh_id,
    var.sg_egress_allow_all_id
  ]
    delete_on_termination       = true 
  }

  lifecycle {
    create_before_destroy = true
  }
}

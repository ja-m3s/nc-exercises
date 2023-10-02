resource "aws_security_group" "sg-http" {
  name_prefix = "ingress-http-sg-"
  description = "HTTP"
  vpc_id      = var.vpc_id

  ingress {
    from_port   = 80
    to_port     = 80
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }
}

resource "aws_security_group" "sg-https" {
  name_prefix = "ingress-https-sg-"
  description = "HTTPS"
  vpc_id      = var.vpc_id

  ingress {
    from_port   = 443
    to_port     = 443
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }
}

/* ALLOW SSH from Amazon CLI in console 'Amazon EC2 Connect'
    {
      "ip_prefix": "3.8.37.24/29",
      "region": "eu-west-2",
      "service": "EC2_INSTANCE_CONNECT",
      "network_border_group": "eu-west-2"
    },
*/
resource "aws_security_group" "sg-ssh" {
  name_prefix = "ingress-ssh-sg-"
  description = "Amazon Connect, MY IP SSH"
  vpc_id      = var.vpc_id

  ingress {
    description = "SSH from Amazon Connect"
    from_port   = 22
    to_port     = 22
    protocol    = "tcp"
    cidr_blocks = ["3.8.37.24/29"]
  }

  ingress {
    description = "SSH from personal machine"
    from_port   = 22
    to_port     = 22
    protocol    = "tcp"
    cidr_blocks = ["${data.http.myip.response_body}/32"]
  }
}

resource "aws_security_group" "sg-egress-allow-all" {
  name_prefix = "egress-allow-all-sg-"
  description = "Allow out all traffic"
  vpc_id      = var.vpc_id

  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }
}
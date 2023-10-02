resource "aws_alb" "app-load-balancer" {
  name_prefix               = "alb-"
  internal           = false
  load_balancer_type = "application"
  security_groups = [
    var.sg_http_id,
    var.sg_https_id,
    var.sg_egress_allow_all_id
  ]
  subnets                    = var.public_subnets
  enable_deletion_protection = false
}

resource "aws_lb_target_group" "target-group" {
  name_prefix = "tg-"
  target_type = "instance"
  port        = 80
  protocol    = "HTTP"
  vpc_id      = var.vpc_id

  health_check {
    enabled             = true
    interval            = 30
    path                = "/"
    port                = "traffic-port"
    protocol            = "HTTP"
    timeout             = 5
    healthy_threshold   = 2
    unhealthy_threshold = 2
    matcher             = "200"
  }
}

resource "aws_lb_target_group" "target-group-ssl" {
  name_prefix = "tg-"
  target_type = "instance"
  port        = 443
  protocol    = "HTTPS"
  vpc_id      = var.vpc_id

  health_check {
    enabled             = true
    interval            = 30
    path                = "/"
    port                = "traffic-port"
    protocol            = "HTTPS"
    timeout             = 5
    healthy_threshold   = 2
    unhealthy_threshold = 2
    matcher             = "200"
  }
}

resource "aws_alb_listener" "alb-listener-80" {
  load_balancer_arn = aws_alb.app-load-balancer.id
  port              = 80
  protocol          = "HTTP"
  default_action {
    type             = "forward"
    target_group_arn = aws_lb_target_group.target-group.id
  }
}

#NB: ARN NOT MANAGED IN TF. Design decision taken to prevent email prompt 
#delaying runs of apply. Also, it's probably not desirable to swap your certificate
#on each apply owing to the potential for downtime.
/*resource "aws_alb_listener" "alb-listener-443" {
  load_balancer_arn = aws_alb.app-load-balancer.id
  port              = 443
  protocol          = "HTTPS"
  ssl_policy      = "ELBSecurityPolicy-TLS13-1-2-2021-06"
  certificate_arn = "arn:aws:acm:eu-west-2:296134751514:certificate/6841e437-0e00-4957-8179-7e9fa1a606b0"

  default_action {
    type             = "forward"
    target_group_arn = aws_lb_target_group.target-group-ssl.id
  }
} */
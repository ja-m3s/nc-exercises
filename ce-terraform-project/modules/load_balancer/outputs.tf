output "target_group_id" {
  description = "ID of the target group"
  value       = aws_lb_target_group.target-group.id
}
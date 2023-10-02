output "sg_http_id" {
  description = "ID of the HTTP security group"
  value       = aws_security_group.sg-http.id
}

output "sg_https_id" {
  description = "ID of the HTTPS security group"
  value       = aws_security_group.sg-https.id
}

output "sg_ssh_id" {
  description = "ID of the SSH security group"
  value       = aws_security_group.sg-ssh.id
}

output "sg_egress_allow_all_id" {
  description = "ID of the egress-allow-all security group"
  value       = aws_security_group.sg-egress-allow-all.id
}
output "VPC" {
  description = "A reference to the created VPC"
  value       = aws_vpc.vpc.id
}

output "PublicSubnets" {
  description = "A list of the public subnets"
  value       = aws_subnet.public_subnets[*].id
}

output "PrivateSubnets" {
  description = "A list of the private subnets"
  value       = aws_subnet.private_subnets[*].id
}

output "NatGatewayIDs" {
  description = "A list of NAT Gateway IDs"
  value       = aws_nat_gateway.nat_gateways[*].id
}

output "NoIngressSecurityGroup" {
  description = "Security group with no ingress rule"
  value       = aws_security_group.no_ingress_security_group.id
}


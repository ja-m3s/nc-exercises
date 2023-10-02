provider "aws" {
  region = "eu-west-2"
}

resource "aws_vpc" "vpc" {
  cidr_block           = var.vpc_cidr
  enable_dns_support   = true
  enable_dns_hostnames = true

  tags = {
    Name = var.environment_name
  }
}

resource "aws_internet_gateway" "internet_gateway" {
  vpc_id = aws_vpc.vpc.id

  tags = {
    Name = var.environment_name
  }
}

resource "aws_subnet" "public_subnets" {
  count = var.num_public_subnets

  vpc_id                  = aws_vpc.vpc.id
  availability_zone       = element(data.aws_availability_zones.available.names, count.index)
  cidr_block              = var.public_subnets_cidrs[count.index]
  map_public_ip_on_launch = true

  tags = {
    Name = "${var.environment_name} Public Subnet (AZ${count.index + 1})"
  }
}

resource "aws_subnet" "private_subnets" {
  count = var.num_private_subnets

  vpc_id                  = aws_vpc.vpc.id
  availability_zone       = element(data.aws_availability_zones.available.names, count.index)
  cidr_block              = var.private_subnets_cidrs[count.index]
  map_public_ip_on_launch = false

  tags = {
    Name = "${var.environment_name} Private Subnet (AZ${count.index + 1})"
  }
}

resource "aws_eip" "nat_gateway_eips" {
  count = var.num_public_subnets
  vpc   = true
}

resource "aws_nat_gateway" "nat_gateways" {
  count         = var.num_public_subnets
  allocation_id = aws_eip.nat_gateway_eips[count.index].id
  subnet_id     = aws_subnet.public_subnets[count.index].id
}

resource "aws_route_table" "public_route_table" {
  vpc_id = aws_vpc.vpc.id

  tags = {
    Name = "${var.environment_name} Public Routes"
  }
}

resource "aws_route" "default_public_route" {
  route_table_id         = aws_route_table.public_route_table.id
  destination_cidr_block = "0.0.0.0/0"
  gateway_id             = aws_internet_gateway.internet_gateway.id
}

resource "aws_route_table_association" "public_subnet_associations" {
  count          = var.num_public_subnets
  subnet_id      = aws_subnet.public_subnets[count.index].id
  route_table_id = aws_route_table.public_route_table.id
}

resource "aws_route_table" "private_route_tables" {
  count  = var.num_private_subnets
  vpc_id = aws_vpc.vpc.id

  tags = {
    Name = "${var.environment_name} Private Routes (AZ${count.index + 1})"
  }
}

resource "aws_route" "default_private_routes" {
  count                  = var.num_private_subnets
  route_table_id         = aws_route_table.private_route_tables[count.index].id
  destination_cidr_block = "0.0.0.0/0"
  nat_gateway_id         = aws_nat_gateway.nat_gateways[count.index].id
}

resource "aws_route_table_association" "private_subnet_associations" {
  count          = var.num_private_subnets
  subnet_id      = aws_subnet.private_subnets[count.index].id
  route_table_id = aws_route_table.private_route_tables[count.index].id
}

resource "aws_security_group" "no_ingress_security_group" {
  name_prefix = "no-ingress-sg-"
  description = "Security group with no ingress rule"
  vpc_id      = aws_vpc.vpc.id
}

data "aws_availability_zones" "available" {}

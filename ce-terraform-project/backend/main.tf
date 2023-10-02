terraform {
  required_version = ">= 1.0.0"
  backend "local" {}
}

provider "aws" {
  region = "eu-west-2"
}

resource "aws_s3_bucket" "buckets" {
  count = length(var.bucket_names)
  bucket = var.bucket_names[count.index]
  force_destroy = true
}

resource "aws_s3_bucket_versioning" "buckets_versioning" {
  count = length(var.bucket_names)
  bucket = aws_s3_bucket.buckets[count.index].id

  versioning_configuration {
    status = "Enabled"
  }
}

resource "aws_s3_bucket_server_side_encryption_configuration" "buckets_sse" {
  count = length(var.bucket_names)
  bucket = aws_s3_bucket.buckets[count.index].id

  rule {
    apply_server_side_encryption_by_default {
      sse_algorithm = "AES256"
    }
  }
}

resource "aws_dynamodb_table" "tables" {
  count = length(var.table_names)
  name         = var.table_names[count.index]
  billing_mode = "PAY_PER_REQUEST"
  hash_key     = "LockID"

  attribute {
    name = "LockID"
    type = "S"
  }
}
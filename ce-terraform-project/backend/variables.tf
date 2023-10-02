variable "bucket_names" {
  description = "The names of the S3 buckets. Must be globally unique."
  type        = list(string)
  default = ["tf-project-bucket-jw"]
}

variable "table_names" {
  description = "The names of the DynamoDB tables. Must be unique in this AWS account."
  type        = list(string)
  default = ["tf-project-table"]
}
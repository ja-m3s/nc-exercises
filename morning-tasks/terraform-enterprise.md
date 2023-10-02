# Terraform Enterprise Approaches

1. What is remote state in Terraform and why is it important for collaborative projects?

Storing Terraform config in a remote location

2. What are some advantages to remote state besides being able to work collaboratively?

Transaction management if using a DB.  Everyone get's most recent version.

3. What are some options for remote backends and how do they differ?

S3, DynamoDB

4. Why is it important to not hardcode secrets, like API keys and passwords, directly into your Terraform config?

Not securely stored,

5. Provide an example of where using multiple Terraform workspaces would be beneficial

DEV, PRD, UAT environments, different WS for each.
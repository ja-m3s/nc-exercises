 - Answer the question - Why is remote state preferred to local state?

Collaboration is easier, since local files don't need to be shared, each user can use the s3 backend.

 - Answer the question - Why do you think both S3 and DynamoDB are required when taking a remote state approach?
 
 S3 stores the file, DynamoDB stores the 'lock' hash.

 - The steps you had to do in order to get remote state working. Think of this part as your own personal reminders of how you got remote state working.

 Copy config which defines the S3 and DynamoDB backend into main.tf
 terraform init 
 terraform apply 'yes' to create env.
 terraform init 'yes' to use remote backend.
 terraform apply 

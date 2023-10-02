# Remote State and Workspaces

This sprint is to help you become comfortable with setting up remote state, sharing state between users and also getting to grips with setting up resources in different workspaces.

## Scenario

The boss wants us to make another VPC. Now i've paired you up here because we need to make sure we aren't just creating things in the production network before checking it works. One of you is going to be running the **staging** workspace and the other will apply any **WORKING** changes to the **production** workspace.

Now first things first. You're going to need to get yourself set up on one AWS account so have a look at the notes I found [here](https://notes.northcoders.com/courses/ce-fundamentals-provisioning/terraform-enterprise#aws-iam).

After that you're going to need to set up remote state for both environments, so you're going to need to have a look into how to achieve that. I think the boss said something about **S3 and DynamoDB**.

I want you to apply the following resources to the staging area and once you think you're done, after each one have the other person apply it to the production environment;

- VPC with 3 AZ's
- Private and Public Subnet for each AZ
- EC2 instance in each public subnet
- Load Balancer for the instances
- Auto Scaling Group for the instances

Remember only one machine should be applying things to the production environment and one to the staging area. Make sure you tag or name your resources with the environment that they're meant for!

## Tearing things down

Run `terraform destroy` on both machines/environments to ensure that all infrastructure is removed. You can check the AWS console on the VPC section. You shouldn't see either of the VPCs you created. (You can't delete the VPC without removing all resources first.)

## Submission process

1. Fork this GitHub repository

2. Make regular commits and pushes back to your repository as you write your code. It help us to see the journey you worked through when completing the task.

3. No matter where you get upto; when you're done with each piece, take screenshots of both your staging VPC and production VPC with an identical resource map. (If you click your vpc name, it should look like a few columns with some arrows between them). Just leave the screenshots with the furthest that you got in this repo and make sure to push them up to GitHub!

4. Create a SOLUTION.md that outlines the following

   - Answer the question - Why is remote state preferred to local state?
   - Answer the question - Why do you think both S3 and DynamoDB are required when taking a remote state approach?
   - The steps you had to do in order to get remote state working. Think of this part as your own personal reminders of how you got remote state working.

5. Share your GitHub link with your mentor

6. Tear things down as described above

## Further reading

[Terraform state S3 backend](https://developer.hashicorp.com/terraform/language/settings/backends/s3)

[Guide on setting up remote state](https://hackernoon.com/deploying-a-terraform-remote-state-backend-with-aws-s3-and-dynamodb)

[Setting up another user on AWS with IAM](https://notes.northcoders.com/courses/ce-fundamentals-provisioning/terraform-enterprise#aws-iam)

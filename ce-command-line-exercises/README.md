# Command Line Exercises

When debugging or navigating through servers, you will often have to do this via the command line.

Talking of the command line, you can also interact with your AWS account via the command line interface (CLI), using it to look at resources on your cloud account as well as provision them.

In this set of exercises you will develop knowledge on some common commands used for debugging things as well as playing with the AWS CLI.

## Pre-requisites

- The instructions will assume that you have access to a Unix command line. If you are running a Windows machine then you could spin up an Amazon EC2 instance and SSH to it to complete these steps.

- The instructions will assume that you have the AWS CLI installed and have configured it to access your account.
  - 🗒️ Note: If you need help with authenticating the AWS CLI take a look at the links in the further reading

## Exercises

🗒️ Note: Some of the exercises might require you to install new tools on the command line so you may also need to work out how to do that

## Unix command exercises

1. You want to see the size of files within the current directory

2. You are concerned about the amount of disk space remaining on the server, what command could you run to check this?

3. You need to create a new text file called `info.txt`

4. You need to create a new directory on the machine with the path `apps/backend/src` - the **apps** folder, **backend** folder and **src** folder all don't exist but you want to make the folders with a single command, using command line options with `mkdir` how can you make all the required directories in one single command?

5. You need to debug whether a server can access an API, specifically it is this end point `https://jsonplaceholder.typicode.com/users` which returns a list of users. You want to do this just via the terminal which tool could you run and what is the command?

6. You want to check the last 20 log entries from the [access.log](./access.log) file, what command do you run?

7. Users are reporting that the web server is giving back a 404 status on some occassions, you need to find out how many times it has happened using a command to explore the [access.log](./access.log)
   - 💡 Hint: You will need to use the `|` pipe character with 3 different commands to get the answer

## AWS CLI Exercises

🗒️ Note: Once you have successfully ran the command it is fun to check the AWS console and make sure the items you have created are present

1. You want to see what existing VPC's you have - what command should you run?

2. You need to make a new VPC with a CIDR range of `172.31.0.0/16` called `vpc-tr-nc-cli` - what command should you run?

3. You need to create a new subnet with a CIDR range of `172.31.16.0/20` within your new VPC - what command should you run?

4. You need to create a new S3 bucket and upload the [index.html](./index.html) file into that bucket - what command should you run?
   - 🗒️ Note: Don't forget that S3 bucket names need to be globally unique

5. You would like to convert some text to speech and save the generated audio file to an S3 bucket. Which Amazon service will you use and what commands should you run?

6. You need to make use of a NoSQL approach to databases and choose to use Amazon DynamoDB. You are designing a game and need to store data on game players and their scores. Players have data associated with which is their username, first name and last name. They can play multiple games and each game has a score of up to 100. You should be able to retrieve the scores for a particular user - what commands will you use to create the table, insert some players (and sample scores) into the table and retrieve data from the table?

## Extension

If you have worked through all the command exercises then finish off your day having a play with Vim Adventures

You can never have enough **vim** in your life 🤣

[https://vim-adventures.com/](https://vim-adventures.com/)

## Submission process

- Fork this repository
- Create a SOLUTION.md file and answer each of the questions in the exercises, giving the exact command and an explanation of any flags or arguments.
- Share the link to your forked repository

## Further reading

[Authenticating the AWS CLI](https://docs.aws.amazon.com/cli/latest/userguide/getting-started-quickstart.html)

[Information around the cURL tool](https://blog.hubspot.com/website/curl-command)

[AWS CLI documentation](https://docs.aws.amazon.com/cli/latest/index.html)

[Frequently used commands for Unix system adminstrators](https://haydenjames.io/90-linux-commands-frequently-used-by-linux-sysadmins/)

[DynamoDB - Single vs Multi table design](https://aws.amazon.com/blogs/database/single-table-vs-multi-table-design-in-amazon-dynamodb/)

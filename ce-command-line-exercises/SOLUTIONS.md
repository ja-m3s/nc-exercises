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

**ls -lah** 

2. You are concerned about the amount of disk space remaining on the server, what command could you run to check this?

**df -h**

3. You need to create a new text file called `info.txt`

**touch info.txt**

4. You need to create a new directory on the machine with the path `apps/backend/src` - the **apps** folder, **backend** folder and **src** folder all don't exist but you want to make the folders with a single command, using command line options with `mkdir` how can you make all the required directories in one single command?

**mkdir -p apps/backend/src**

5. You need to debug whether a server can access an API, specifically it is this end point `https://jsonplaceholder.typicode.com/users` which returns a list of users. You want to do this just via the terminal which tool could you run and what is the command?

**wget https://jsonplaceholder.typicode.com/users**

or **curl https://jsonplaceholder.typicode.com/users**

6. You want to check the last 20 log entries from the [access.log](./access.log) file, what command do you run?

**tail -20 access.log**

7. Users are reporting that the web server is giving back a 404 status on some occassions, you need to find out how many times it has happened using a command to explore the [access.log](./access.log)
   - 💡 Hint: You will need to use the `|` pipe character with 3 different commands to get the answer

**grep -c '404' access.log**

## AWS CLI Exercises

# Solutions

## UNIX Commands

### 1.

You want to see the size of files within the current directory

```
ls -s
```

- This lists the sizes of all of the files in the current directory

### 2.

You are concerned about the amount of disk space remaining on the server, what command could you run to check this?

```
df -ah
```

- This lists the disk usage of all drives in a human-readable format, and shows it's percentage usage of the total space available.

### 3.

You need to create a new text file called `info.txt`

```
touch info.txt
```

- This creates a new file called 'info.txt' inside the current directory.

### 4.

You need to create a new directory on the machine with the path `apps/backend/src` - the **apps** folder, **backend** folder and **src** folder all don't exist but you want to make the folders with a single command, using command line options with `mkdir` how can you make all the required directories in one single command?

```
mkdir apps apps/backend apps/backend/src apps/backend/src/new_directory
```

- This first creates an 'apps' directory, then creates the 'backend' dir inside, and the 'src' inside that, then finally creates the 'new_directory'. Putting spaces in between each command acts like it's a new command, and specifying the path creates the directory inside the path.

### 5.

You need to debug whether a server can access an API, specifically it is this end point `https://jsonplaceholder.typicode.com/users` which returns a list of users. You want to do this just via the terminal which tool could you run and what is the command?

```
curl https://jsonplaceholder.typicode.com/users
```

- This will connect to the API and print the response to the terminal. If the connnection is successful, then you receive the intended response, if not you get an error saying 'Could not resolve host'

### 6.

You want to check the last 20 log entries from the [access.log](./access.log) file, what command do you run?

```
tail access.log -n20
```

- The tail command will print the end of a file to the console. Using the -n flag allows you to specify how many lines back you want to go.

### 7.

Users are reporting that the web server is giving back a 404 status on some occassions, you need to find out how many times it has happened using a command to explore the [access.log](./access.log)

- 💡 Hint: You will need to use the `|` pipe character with 3 different commands to get the answer

```
cat access.log | grep '" 404' | wc -l
```

or

```
grep -c '" 404' access.log
```

- To find the number of occurances of a 404 error, you can either pipe the result of printing the access log into a grep command to find instances of '" 404' (including the " helps to filter out the error codes from other arbitary numbers that may include 404), then pipe the result of that into a word count with the line flag to count the lines. Or, to simplify it, you could run one grep command with the 'count' flag (-c) to search for the '" 404' in access.log

## Exercise 2

### 1.

You want to see what existing VPC's you have - what command should you run?

**aws ec2 describe-vpcs**

- This command will list all of the current VPCs and their information.

### 2.

You need to make a new VPC with a CIDR range of `172.31.0.0/16` called `vpc-tr-nc-cli` - what command should you run?

**aws ec2 create-vpc --cidr-block 172.31.0.0/16 --tag-specifications 'ResourceType=vpc,Tags=[{Key=Name,Value=vpc-tr-nc-cli}]'**

- This command will initiate a new VPC, set it's CIDR to 172.31.0.0/16 using the --cidr-block tag, and sets it's name to 'vpc-tr-nc-cli' by using the --tag-specifications tag.

### 3.

You need to create a new subnet with a CIDR range of `172.31.16.0/20` within your new VPC - what command should you run?


**aws ec2 create-subnet --vpc-id vpc-06cad699f604b40e1" --cidr-block 172.31.16.0/20**


- This command will create the new subnet inside the new vpc (id taken from aws), and set it's cidr range using the --cidr-block tag.

### 4.

You need to create a new S3 bucket and upload the [index.html](./index.html) file into that bucket - what command should you run? - 🗒️ Note: Don't forget that S3 bucket names need to be globally unique

**aws s3 mb s3://tr-nc-cli-bucket && aws s3 cp index.html s3://tr-nc-cli-bucket/index.html**

- This command will create a new s3 bucket using the 's3 mb' command, and then appends the 's3 cp' command, using &&, to copy the index.html file to the new bucket.

5. You would like to convert some text to speech and save the generated audio file to an S3 bucket. Which Amazon service will you use and what commands should you run?

https://aws.amazon.com/polly/ - used console tooling.

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

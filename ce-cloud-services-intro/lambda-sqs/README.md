# Cloud Services - Amazon Lambda Exercise

This repository provides a task for trying mutliple AWS services - specifically the [Lambda](https://aws.amazon.com/lambda/) and [Simple Queue Service (SQS)](https://aws.amazon.com/sqs/)

You will create a lambda function that consumes a message from an SQS queue.

## Scenario

You'll work through setting up a Lambda function to consume a message placed on an SQS queue.

This exercise also provides a venue to play with aspects like the Amazon Command Line Interface (CLI) and understand IAM roles a little more because your lamba function will need the access to read from the SQS queue. 

It's all fun stuff along your journey to cloud architecture and cloud engineering 😍

## Instructions

1. Fork this repository

2. Firstly have a go at creating your own lambda function by following this guide: https://docs.aws.amazon.com/lambda/latest/dg/getting-started.html#getting-started-create-function
    - 🗒️ Note: The page mentions creating new users - you do not need to do this you already have full access to your account

3. Store the code for the sample lambda function within this repository and call it basic_lambda.js (or py if you chose Python)

4. Once you have got the lambda function working from step 2 it is time to make another function but this time the function will be triggered by an SQS message. Follow through this guide: https://docs.aws.amazon.com/lambda/latest/dg/with-sqs-example.html
    - 🗒️ Note: The guide utilises the AWS command line, you will need to get this installed and configured first in order to run the commands mentioned
    - 🗒️ Note: The actual code of the lambda (to consume the message) can be found on [this page](https://docs.aws.amazon.com/lambda/latest/dg/with-sqs-create-package.html). I would utilise the Node or Python versions to get started.

5. Store the code for your SQS function within this repository and call it sqs_lamda.js (or py if you chose Python)

6. Store the various commands you ran within an INSTRUCTIONS.md file (make sure to not include any private data such as passwords)

7. Take a screenshot of the command line output showing you having invoked your lambda function and store the screenshot in this repository

8. Share your forked repository for your coaches

## Need some help?

Take a read over the [FAQs](FAQS.md) document that might be able to give some guidance

## Extension

Currently the function simply logs to the console.

Instead of printing to the console - see if you can get your lambda function to send an email using [Simple Email Service](https://aws.amazon.com/ses/)

* Take a screenshot of your email having been received from the Simple Email Service 🎉 and store it within this repository

* Store the code for your SQS function within this repository and call it sqs_lamda_ses.js (or py if you chose Python)


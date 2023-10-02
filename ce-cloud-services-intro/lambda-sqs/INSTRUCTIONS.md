[cloudshell-user@ip-10-4-82-119 ~]$ mkdir sqs-tutorial
[cloudshell-user@ip-10-4-82-119 ~]$ cd sqs-tutorial/
[cloudshell-user@ip-10-4-82-119 sqs-tutorial]$ nano index.mjs
[cloudshell-user@ip-10-4-82-119 sqs-tutorial]$ zip function.zip index.mjs 
  adding: index.mjs (deflated 26%)
[cloudshell-user@ip-10-4-82-119 sqs-tutorial]$ aws lambda create-function --function-name ProcessSQSRecord \
> --zip-file fileb://function.zip --handler index.handler --runtime nodejs18.x \
> --role arn:aws:iam::296134751514:role/sqs-lambda
{
    "FunctionName": "ProcessSQSRecord",
    "FunctionArn": "arn:aws:lambda:eu-west-2:296134751514:function:ProcessSQSRecord",
    "Runtime": "nodejs18.x",
    "Role": "arn:aws:iam::296134751514:role/sqs-lambda",
    "Handler": "index.handler",
    "CodeSize": 292,
    "Description": "",
    "Timeout": 3,
    "MemorySize": 128,
    "LastModified": "2023-08-16T13:15:48.977+0000",
    "CodeSha256": "Mvhh+FycI2LcrARLZz/BeyGoAmZG3KurJvrJBTiC7MY=",
    "Version": "$LATEST",
    "TracingConfig": {
        "Mode": "PassThrough"
    },
    "RevisionId": "086bfef7-ceef-4981-acfe-db81a0b808b6",
    "State": "Pending",
    "StateReason": "The function is being created.",
    "StateReasonCode": "Creating",
    "PackageType": "Zip",
    "Architectures": [
        "x86_64"
    ],
    "EphemeralStorage": {
[cloudshell-user@ip-10-4-82-119 sqs-tutorial]$ nano test.js
[cloudshell-user@ip-10-4-82-119 sqs-tutorial]$ ls
function.zip  index.mjs  test.js
[cloudshell-user@ip-10-4-82-119 sqs-tutorial]$ mv test test.json
mv: cannot stat ‘test’: No such file or directory
[cloudshell-user@ip-10-4-82-119 sqs-tutorial]$ mv test.js test.json
[cloudshell-user@ip-10-4-82-119 sqs-tutorial]$ aws lambda invoke --function-name ProcessSQSRecord --payload file://input.json out --log-type Tail \
> --query 'LogResult' --output text --cli-binary-format raw-in-base64-out | base64 --decode

Error parsing parameter '--payload': Unable to load paramfile file://input.json: [Errno 2] No such file or directory: 'input.json'
[cloudshell-user@ip-10-4-82-119 sqs-tutorial]$ mv test.json input.json
[cloudshell-user@ip-10-4-82-119 sqs-tutorial]$ aws lambda invoke --function-name ProcessSQSRecord --payload file://input.json out --log-type Tail --query 'LogResult' --output text --cli-binary-format raw-in-base64-out | base64 --decode
START RequestId: 582e64c2-bd18-4086-8add-c733b1b7c5c8 Version: $LATEST
2023-08-16T13:17:56.670Z        582e64c2-bd18-4086-8add-c733b1b7c5c8    INFO    test
END RequestId: 582e64c2-bd18-4086-8add-c733b1b7c5c8
REPORT RequestId: 582e64c2-bd18-4086-8add-c733b1b7c5c8  Duration: 12.95 ms      Billed Duration: 13 ms  Memory Size: 128 MB     Max Memory Used: 66 MB  Init Duration: 162.86 ms
[cloudshell-user@ip-10-4-82-119 sqs-tutorial]$ ls
function.zip  index.mjs  input.json  out
[cloudshell-user@ip-10-4-82-119 sqs-tutorial]$ cat out 
{}[cloudshell-user@ip-10-4-82-119 sqs-tutorial]$ aws configure set cli-binary-format raw-in-base64-out
[cloudshell-user@ip-10-4-82-119 sqs-tutorial]$ aws lambda invoke --function-name ProcessSQSRecord --payload file://input.json out --log-type Tail --query 'LogResult' --output text --cli-binary-format raw-in-base64-out | base64 --decode
START RequestId: 4df474fe-4ee4-4ca0-9bb9-d545ec48f9c4 Version: $LATEST
2023-08-16T13:19:17.279Z        4df474fe-4ee4-4ca0-9bb9-d545ec48f9c4    INFO    test
END RequestId: 4df474fe-4ee4-4ca0-9bb9-d545ec48f9c4
REPORT RequestId: 4df474fe-4ee4-4ca0-9bb9-d545ec48f9c4  Duration: 3.48 ms       Billed Duration: 4 ms   Memory Size: 128 MB     Max Memory Used: 67 MB
[cloudshell-user@ip-10-4-82-119 sqs-tutorial]$ aws lambda create-event-source-mapping --function-name ProcessSQSRecord  --batch-size 10 \
> --event-source-arn arn:aws:sqs:eu-west-2:296134751514:sqs-queue
{
    "UUID": "53bcb8e4-ec5b-494d-a3ba-295f10656691",
    "BatchSize": 10,
    "MaximumBatchingWindowInSeconds": 0,
    "EventSourceArn": "arn:aws:sqs:eu-west-2:296134751514:sqs-queue",
    "FunctionArn": "arn:aws:lambda:eu-west-2:296134751514:function:ProcessSQSRecord",
    "LastModified": "2023-08-16T13:26:00.900000+00:00",
    "State": "Creating",
    "StateTransitionReason": "USER_INITIATED",
    "FunctionResponseTypes": []
}
[cloudshell-user@ip-10-4-82-119 sqs-tutorial]$ aws lambda list-event-source-mappings --function-name ProcessSQSRecord
{
    "EventSourceMappings": [
        {
            "UUID": "53bcb8e4-ec5b-494d-a3ba-295f10656691",
            "BatchSize": 10,
            "MaximumBatchingWindowInSeconds": 0,
            "EventSourceArn": "arn:aws:sqs:eu-west-2:296134751514:sqs-queue",
            "FunctionArn": "arn:aws:lambda:eu-west-2:296134751514:function:ProcessSQSRecord",
            "LastModified": "2023-08-16T13:26:00.900000+00:00",
            "State": "Creating",
            "StateTransitionReason": "USER_INITIATED",
            "FunctionResponseTypes": []
        }
    ]
}
[cloudshell-user@ip-10-4-82-119 sqs-tutorial]$ aws lambda list-event-source-mappings --function-name ProcessSQSRecord
{
    "EventSourceMappings": [
        {
            "UUID": "53bcb8e4-ec5b-494d-a3ba-295f10656691",
            "BatchSize": 10,
            "MaximumBatchingWindowInSeconds": 0,
            "EventSourceArn": "arn:aws:sqs:eu-west-2:296134751514:sqs-queue",
            "FunctionArn": "arn:aws:lambda:eu-west-2:296134751514:function:ProcessSQSRecord",
            "LastModified": "2023-08-16T13:26:00.900000+00:00",
            "State": "Enabled",
            "StateTransitionReason": "USER_INITIATED",
            "FunctionResponseTypes": []
        }
    ]
}
[cloudshell-user@ip-10-4-82-119 sqs-tutorial]$ ls
function.zip  index.mjs  input.json  out
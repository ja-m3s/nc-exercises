# Cloud Services - Amazon S3 Exercise

This repository provides a task for trying one of the AWS services - specifically the [Simple Storage Service (S3)](https://aws.amazon.com/s3/).

You will use the S3 service to upload and store files, specifically HTML files, and then configure the storage bucket to serve back a website 🙌

## Scenario

Amazon S3 is used to store files. For example you might have an application that allows people to upload videos or photos. S3 would be a good choice for where those files are stored.

S3 can also be used to store files associated with creating a website such as HTML, CSS, images etc. It can be further configured to serve back those files and present them as a website much like a web server.

In this scenario, you will be doing just that. Creating an S3 bucket, uploading HTML and CSS to that bucket and configuring the bucket to serve back a static website.

## Pre-requisites

- An AWS account that you can access via the AWS web console
- Knowledge of your username and password for your AWS account
- Familiar with Git in order to clone this repository to your computer

## Instructions

🗒️ Note: The instructions below are not exhaustive on all the required steps. They provide the sense of direction but leave gaps that will require you to research, understand and ask questions around. You will find this throughout the programme where instructions will leave room for your to research things and build up your understanding so when following through any exercises like this try to focus on the journey of learning and almost forget the getting it done aspect. If you get stuck at any stage, the links in the **Further reading** section are there to provide further help whilst also aid you in developing further skills in reading documentation.

1. Log into the AWS console

2. Navigate to the S3 section

3. Click **Create bucket**

4. Give your bucket a name. Note that bucket names are globally unique so use some form of unique name for your S3 bucket.

5. Choose the **eu-west-2** region

6. By default S3 will understandably block all public access by default but we need the public to be able to access the objects (HTML files and CSS) so you should untick **Block all public access**

7. Once your bucket has been made, go into the bucket and **Upload** the index.html and the styles.css files from this repository. Feel free to edit the styles and HTML before uploading if you like 😃

8. Once the files have been uploaded, go back to the bucket and click the **Properties** tab

9. Navigate to **Static website hosting** and **Enable** it. Configure it to look for the **index.html** document by default. Once enabled it will give you the URL of the bucket. For example: http://some-s3-bucket-name-website.s3-website.eu-west-2.amazonaws.com - try clicking the link, did it work or did you get a `403 Forbidden Error` ?

10. Even though you have configured public access, we still have another step to open up the bucket. This is where we encounter another aspect of AWS called policies. We can configure access (or prevent access) via policy documents that are in the [form of JSON](https://www.json.org/json-en.html). Go back into the bucket and choose the **Permissions** tab then edit the **Bucket Policy**. Put in place a policy that enables public access. You can get the [sample JSON for the policy](https://docs.aws.amazon.com/AmazonS3/latest/userguide/HostingWebsiteOnS3Setup.html#step4-add-bucket-policy-make-content-public) from the AWS guide. 🗒️ Don't forget to edit the bucket name in the sample policy

11. Re-try the link for your website. Can you see it now?

12. Try editing the HTML and re-uploading to update your website. Try refreshing the page - can you see your changes?

13. Take a screenshot of your entire screen showing your website in the browser

14. Empty and delete your bucket once you are finished

15. 🎉 Celebrate - you now know how to create your own website on AWS

## Extension exercise

You'll have noticed that the Uniform Resource Locator (URL) for your website isn't very memorable. It is a little long.

Try to put together written answers for the questions below.

Which AWS service might you use to create your own domain name? Something more memorable and shorter such as "cloud-engineering.com"

When using that service what will you need to configure in order to "point" it at your S3 bucket website?

🗒️ Note: You should not buy anything at this stage just research the topic and put together your own notes as if you were going to buy and configure your own domain.

💡 Hint: If you need a hint, have a research around DNS services within AWS

## Further reading

[AWS Tutorial on Configuring a static website on Amazon S3](https://docs.aws.amazon.com/AmazonS3/latest/userguide/HostingWebsiteOnS3Setup.html)




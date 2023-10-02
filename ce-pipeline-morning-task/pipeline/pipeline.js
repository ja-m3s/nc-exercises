const { execSync } = require("child_process");
const { cpSync, existsSync, mkdirSync, writeFileSync } = require("fs");

function runPipeline() {
  // Check if theres a staging area
  console.log("Checking out the repo...");
  if (!existsSync(`${__dirname}/staging`)) {
    mkdirSync(`${__dirname}/staging`);
  }

  // Copy the files to the staging Area
  cpSync(`${__dirname}/../server/`, `${__dirname}/staging`, {
    recursive: true,
  });

  //  Build environment, install dependencies,  run tests
  console.log("Installing dependencies...");
  execSync(`cd ${__dirname}/staging && npm install`);
  console.log("Running Tests...");
  execSync(`cd ${__dirname}/staging && npm test`);

  console.log("Tests have passed, \n Now building the image...");

  // Grabbing the stored version number to increment it each time
  let majorV = 1;
  let minorV = 0;
  if (existsSync("./version.json")) {
    // Fetch previous version
    const { major, minor } = require("./version.json");

    majorV = major;
    minorV = minor + 1;
  }

  const versionTag = `${majorV}.${minorV}`;

  // Build the image with the updated tag
  execSync(
    `cd ${__dirname}/staging && docker build -t example-ci-server:${versionTag} .`
  );

  // Once we have confirmed the build went okay, update the stored version number by overwriting the file
  writeFileSync(
    `${__dirname}/version.json`,
    JSON.stringify({ major: majorV, minor: minorV }, null, 2),
    { flag: "w" }
  );

  //  Tag the image
  console.log("Tagging image...");
  execSync(
    `cd ${__dirname}/staging && docker tag example-ci-server:${versionTag} emilyb93/example-ci-server:${versionTag}`
  );

  // Push the image
  console.log("Publishing image...");
  execSync(
    `cd ${__dirname}/staging && docker push emilyb93/example-ci-server:${versionTag}`
  );


  // Put your Kubernetes code below here

  console.log("Pipeline Complete!");
}

runPipeline();


//TODO
/*Theres a few ways to achieve this effect but work through this list in order if you’re stuck on where to start:

    Create your deployment.yaml
    Create your service.yaml
    Apply both of the files
    Update the files each time so that it is always deploying the latest version of the code

Think about how you’re going to store the config to be written each time and how you can make it easy to update*/

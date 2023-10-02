# CICD Simulator

Use the pieces of JavaScript provided below try and create a series of function calls or commands in `pipeline.js` that achieves the following steps in order before moving onto the next one:

1. Checkouts the code to a `staging` folder
2. Installs the dependencies
3. Runs the test
4. Builds the Docker image
5. Tags the image to a Dockerhub repo
6. Pushes the Docker image to the repo

Your pipeline should log a message to the terminal to tell you what step its currently on.

## Tools

These may be useful to you but you are free to use other tools to achieve this pipeline:

- [existsSync](https://nodejs.org/api/fs.html#fsexistssyncpath)
- [mkdirSync](https://nodejs.org/api/fs.html#fsmkdirsyncpath-options)
- [cpSync](https://nodejs.org/api/fs.html#fsmkdirsyncpath-options)
- [execSync](https://nodejs.org/api/child_process.html#child_processexecsynccommand-options)

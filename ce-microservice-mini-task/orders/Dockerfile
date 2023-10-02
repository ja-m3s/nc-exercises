# Use an official Node.js runtime as a parent image
FROM node:18.13.0

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Expose the port the Express app is listening on
EXPOSE 3001

# Command to start the Express server
CMD ["npm", "start"]

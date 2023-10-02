# Use an official Node.js runtime as a parent image
FROM node:18.13.0

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install the application dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Expose the port that the Express app will run on (adjust as needed)
EXPOSE 3000

# Define the command to start your Express app
CMD [ "node", "app.js" ]
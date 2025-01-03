# Use official Node.js runtime as base image
FROM node:22

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy application source code
COPY . .

# Expose port (typically 3000 for Node apps)
EXPOSE 3000

# Add custom commands before npm start

# Start the application
CMD ["npm", "start"]

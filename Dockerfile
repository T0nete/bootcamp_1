FROM node:18.16.0-bullseye

# Create app directory
WORKDIR /app

# Install app dependencies
COPY package*.json ./

RUN npm install

# Bundle app source
COPY . .

# Expose port 8080
EXPOSE 8080

# Run the app
CMD ["npm", "start"]
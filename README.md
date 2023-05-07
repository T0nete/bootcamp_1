# CRUD Users NodeJS - MongoDB - Docker

## Description
Here you will find a simple CRUD API made with NodeJS and stroing the data in MongoDB. Both sides, the server and the database, are executed in two differents docker containers.

# Instructions
1. Clone this repository
2. npm install
3. sudo docker-compose build (build the images) 
4. sudo docker-compose up -d  (start the container for each service in silence mode)
5. You have mock data in the /mock/users.json that you can upload in the databse, or this will automatically be inserted by using /generateData.
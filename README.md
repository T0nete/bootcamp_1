# bootcamp_1
CRUD API con NodeJS, MongoDB y Docker

docker network create bootcamp_mongo_network

docker run --name bootcamp_mongo --hostname bootcamp_host_mongo -d -p 27017:2017 --network bootcamp_mongo_network mongo

docker cp ./mock/users.json bootcamp_mongo:/users.json

docker exec -it bootcamp_mongo mongoimport --db bootcamp_db --collection users --file ./users.json  --jsonArray
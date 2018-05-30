##Aspirity Web Template

[Development solutions and decisions](https://confluence.aspirity.com/display/DI/Development+solutions+and+decisions)

###Development
* Install docker with [instructions](https://docs.docker.com/install/linux/docker-ce/ubuntu/#set-up-the-repository)
* yarn install:all - installs packages both for server and client
* yarn start - would run docker-compose up
#### Server
* *cd server && yarn install* (just one time, for linter success)
* *docker-compose up server*
* To add new dependency install it locally (*yarn add ...*), and it'll be installed in docker container automatically


### Configuration
Default database connection uri:
*mongodb://admin:p1230h6t34qd4i7ex@aspiritywebtemplate_mongodb:27017/aspiritytemplate?authSource=admin*

where
  * username: admin
  * password: p1230h6t34qd4i7ex
  * host: aspiritywebtemplate_mongodb (it is container name for docker development flow)
  * port: 27017
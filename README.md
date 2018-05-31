##Aspirity Web Template

[Development solutions and decisions](https://confluence.aspirity.com/display/DI/Development+solutions+and+decisions)

###Development
* Install docker with [instructions](https://docs.docker.com/install/linux/docker-ce/ubuntu/#set-up-the-repository)
* Setup development environment: [WebStorm instructions](https://confluence.aspirity.com/display/DI/Preparation+for+work)
* Setup debugger: [Instructions](https://confluence.aspirity.com/display/DI/Debugging)
* cd project root (~/.../AspirityWebTemplate)
* yarn install:all - installs packages both for server and client
* yarn start - would run docker-compose up
#### Server
* To add new dependency install it locally (*yarn add ...*), and it'll be installed in docker container automatically

#### Client
* localhost:3000

#### Notes about test
* Unit tests running automatically with every commit/push
* yarn test - run unit tests
* yarn test:all - run all tests, including database (should be running in docker container to pass)

### Configuration
Default database connection uri:
*mongodb://admin:p1230h6t34qd4i7ex@aspiritywebtemplate_mongodb:27017/aspiritytemplate?authSource=admin*

where
  * username: admin
  * password: p1230h6t34qd4i7ex
  * host: aspiritywebtemplate_mongodb (it is container name for docker development flow)
  * port: 27017
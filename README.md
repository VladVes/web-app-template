##Aspirity Web Template

[Development solutions and decisions](https://confluence.aspirity.com/display/DI/Development+solutions+and+decisions)

###Development
* Install docker with[instructions](https://docs.docker.com/install/linux/docker-ce/ubuntu/#set-up-the-repository)
* *docker-compose up*
####Server
* *cd server && yarn install* (just one time, for linter success)
* *docker-compose up server*
* To add new dependency install it locally (*yarn add ...*), and it'll be installed in docker container automatically
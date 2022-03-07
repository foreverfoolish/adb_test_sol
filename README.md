# AdBrew Test Solution!

Hello! This is the solution to the test given by your firm. PLEASE READ THE UPDATED SETUP INSTRUCTIONS CAREFULLY TO GET THE PROJECT RUNNING.

There were many mistakes in your docker-compose.yml and Dockerfile files that I have debugged and sorted out. You had also made use of obsolete installation methods (eg. easy_install) that I replaced with updated and contemporary methods. 

I then worked on the API (views.py file) and created a working API that handles Get and Post requests. 

Creating the frontend using React useState hooks and props was a simple task.

*To test the API, go to http://localhost:8000/todos and insert values in key:value pair format with key = "name", for example:

```
{"name":"todo_item"}
```

Replace todo_item with whatever you'd like to add.


# Structure

This repository includes code for a Docker setup with 3 containers:
* App: This is the React dev server and runs on http://localhost:3000. The code for this resides in src/app directory.
* API: This is the backend container that run a Django instance on http://localhost:8000. 
* Mongo: This is a DB instance running on port 27017. Django views already have code written to connect to this instance of Mongo.

We highly recommend you go through the setup in `Dockerfile` and `docker-compose.yml`. If you are able to understand and explain the setup, that will be a huge differentiator.

# Setup
1. Clone this repository
```
git clone https://github.com/adbrew/test.git
```
2. Change into the cloned directory and set the environment variable for the code path. Replace `path_to_repository` appropriately.
```
export ADBREW_CODEBASE_PATH= 'path_to_repository'
```
3. Build container (you only need to build containers for the first time or if you change image definition, i.e., `Dockerfile`). This step will take a good amount of time.
```
docker-compose build
```
* Use -E flag if it can't get the code path right.
```
sudo -E docker-compose build
```
4. Once the build is completed, start the containers:
```
docker-compose up -d
```
*Again, use -E flag like in step 3 if docker-compose gives any trouble.
5. Once complete, `docker ps` should output something like this:
```
CONTAINER ID   IMAGE               COMMAND                  CREATED         STATUS         PORTS                      NAMES
e445be7efa61   adbrew_test_api     "bash -c 'cd /src/re…"   3 minutes ago   Up 2 seconds   0.0.0.0:8000->8000/tcp     api
0fd203f12d8a   adbrew_test_app     "bash -c 'cd /src/ap…"   4 minutes ago   Up 3 minutes   0.0.0.0:3000->3000/tcp     app
884cb9296791   adbrew_test_mongo   "/usr/bin/mongod --b…"   4 minutes ago   Up 3 minutes   0.0.0.0:27017->27017/tcp   mongo
```
6. Check that you are able to access http://localhost:3000 and http://localhost:8000/todos
7. If the containers in #5 or #6 are not up, we would like you to use your debugging skills to figure out the issue. Only reach out to us if you've exhausted all possible options. The `app` container may take a good amount of time to start since it will download all package dependencies.

# Tips
1. Once containers are up and running, you can view container logs by executing `docker logs -f --tail=100 {container_name}` Replace `container_name` with `app` or `api`(output of `docker ps`)
2. You can enter the container and inspect it by executing `docker exec -it {container_name} bash` Replace `{container_name}` with `app` or `api` (output of `docker ps`)
3. Shut all containers using `docker-compose down`
4. Restart a container using `docker restart {container_name}`


# Task

When you run `localhost:3000`, you would see 2 things:
1. A form with a TODO description textbox and a submit button. On this form submission, the app should interact with the Django backend (`POST http://localhost:8000/todos`) and create a TODO in MongoDB.
2. A list with hardcoded TODOs. This should be changed to reflect TODOs in the backend (`GET http://localhost:8000/todos`). 
3. When the form is submitted, the TODO list should refresh again and fetch latest list of TODOs from MongoDB.

# Instructions
1. All React code should be implemented using [React hooks](https://reactjs.org/docs/hooks-intro.html) and should not use traditional stateful React components and component lifecycle method.
2. Do not use Django's model or SQLite DB. Persist and retrieve all data from the mongo instance. A `db` instance is already present in `views.py`. 
3. We are looking for developers who have strong fundamentals and can ramp up fast. We expect you to learn and grasp basic React Hooks/Mongo/Docker concepts on the fly.
4. Do not submit your solution as a PR since this is a public repo and there are other candidates taking the same test. Send us a link to your repo privately.
5. If you are able to complete the test, we will have a live walkthrough of your code and ask questions to check your understanding.
6. The code for the actual solution is pretty easy. The code quality in your solution should be production-ready - error handling, abstractions, well-maintainable and modular code.

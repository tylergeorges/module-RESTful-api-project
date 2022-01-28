# moduleproject

SWAGGER: http://localhost:4242/swagger/#/

ENV variable names - MONGODB_URI , SALT , JWT_SECRET , PORT

How to install and run locally: 

download postman 

make sure node is installed

in console do:

npm init -y

npm i express mongoose helmet dotenv nodemon morgan bcrypt gitignore-it jsonwebtoken swagger-ui-express

make sure server is up in running in IDE of choice by typing "npm start" in the console

in post man type in "localhost:4242/endpoint"

endpoint will be replaced with the following endpoints:
---------------------

AUTH ROUTE - 

POST  /auth/register  (makes user MUST have username, password, email, birthday) (OPTIONAL - age)

POST  /auth/login     (checks to see if user has already been made MUST have username, password)

---------------------

BLOGS ROUTE - 

POST /blogs/username (posts/creates blog under username MUST have created_by, created_at, blog_title, blog_content, private(true or false))

GET /blogs/username  (gets ALL posts from user using their username)

GET /blogs (displays ALL posts made that are NOT private with their id)

PUT /show/id (updates SPECFIC post using the posts id reference line above for id )

DELETE /show/id (deletes SPECFIC post using the posts id)

# Simple BLOG API

## Routes

- Register new user POST /auth/register PAYLOAD EXAMPLE {"userName": "myName", "password": "12345","fullName":"my full name","email":"myName@gmail.com"}
- Login existing user POST /auth/login PAYLOAD EXAMPLE {"userName": "myName", "password": "12345"}
- Create blog POST /blogs PAYLOAD EXAMPLE {"title": "myTitle", "content": "my content"}
- Delete blog DELETE /blogs/blogId
- Update blog PATCH /blogs/blogId PAYLOAD EXAMPLE {"title": "myTitle", "content": "my content"}
- Get blogs (from start ordered by field named 'id' desc) /blogs?start=10&sort=id&desc=true
- Get blogs by user with id = 60 (from start ordered by field named 'id' desc) /users/60/posts?start=10&sort=id&desc=true

## Environment variables to run application

- NODE_ENV=production
- JWT_SECRET=mySecretKey
- DB_HOST=myHost (127.0.0.1,host.docker.internal etc)
- DB_PORT=myPort (3306 for mySql by default)
- DB_USERNAME=myUserName
- DB_PASSWORD=mypassword
- DB_NAME=myDbName
- PORT = myPort (default = 3000)

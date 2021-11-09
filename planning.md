## planning for chatterbox SQL

- [x] plan a schema for chatterbox-server
  -  schema requirements
   - [x] must include tables for username, messages, roomnames
- [x] using wwwsqldesigner generate schema according to requirements
  - [x] export schema
- [x] create a database in mysql
  - [x] import schema.sql by using method...
  - [x] mysql -u root < path/to/schema.sql.
  - [x] verify that tables were generated
  - [x] make id column primary key for all tables
  - [x] generate foreign key column for messages
  - [x] allow id's to auto increment
- [x] install mysql server module to interact with chatterbox-server


### what we did and did not do
- we did implement a node server with sequelize managing our mysql database
  - we used our models to create the tables in the database
  - our model handles insertion instead of running queries
- we did not use the mysql module to create a connection to the mysql server

- database has users table
  - id and username columns
- messages table now has foreign key userid which points to users table

## messages/post
- if username does not exist
  - generates unique userids for both Users and Messages tables


## db/index.js 
- connects database to server

## models/index.js 
- define messages and users model 

## controllers/index.

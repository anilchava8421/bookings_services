# NodeJS Application for Booking Service

## Description

It is simple booking services for cinema.

## Features

- You can create, update, delete and get users in User and Cinema Table.
- API Documentation available with Swagger.
- Available authentication feature for User and Empoyee endpoints.
- You can change Token Expiry time dynamically in .ENV file
- Reusable DB connection file available(i.s in Utility) for any relational database

## Installation

Install the devDependencies and start the server with below commands.

```sh
cd BOOKING_SERVICE
npm install
npm start
```

For development environments

```sh
#Stage
NODE_ENV='development'
PORT= 3000

#DB Values
DB_NAME='booking_services'
DB_HOST='localhost'
DB_USERNAME='user1'
DB_PASSWORD='password1'

#JWT Values
JWT_SECRET= 'BookingService_123'
JWT_REFRESH_SECRET= 'BookingService@123'


## API Swagger Documentation

Link: http://localhost:3000/api-docs/

## Note

- Create .ENV file before you use/run the application
- Provide required (i.e DB, JWT and PORT) details before you run the application.
- You can get the token and refreshToken values in user login (i.e /api/user/login) endpoint response.
```

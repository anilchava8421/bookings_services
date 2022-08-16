export default {
  swagger: "2.0",
  info: {
    version: "1.0.0",
    title: "Booking service API Documentation",
    description: "Booking service API Information",
  },
  host: `localhost:${process.env.PORT}`,
  schemes: ["http"],
  consumes: ["application/json"],
  produces: ["application/json"],
  paths: {
    "/api/user/login": {
      post: {
        tags: ["Authentication"],
        summary: "User Login",
        description: "User Login",
        parameters: [
          {
            name: "user",
            in: "body",
            schema: {
              properties: {
                email: {
                  type: "string",
                },
                password: {
                  type: "string",
                },
              },
            },
          },
        ],
        produces: ["application/json"],
        responses: {
          200: {
            description: "Login Successfully",
          },
        },
      },
    },
    "/api/user/updatepassword": {
      post: {
        tags: ["Authentication"],
        summary: "User Update Password",
        description: "User Update Password",
        parameters: [
          {
            name: "user",
            in: "body",
            schema: {
              properties: {
                token: {
                  type: "string",
                },
                password: {
                  type: "string",
                },
              },
            },
          },
        ],
        produces: ["application/json"],
        responses: {
          200: {
            description: "Updated Successfully",
          },
        },
      },
    },
    "/api/user": {
      post: {
        tags: ["User"],
        summary: "User Sign up",
        description: "Create new user in User table",
        parameters: [
          {
            name: "user",
            in: "body",
            description: "User that we want to create",
            schema: {
              properties: {
                name: {
                  type: "string",
                },
                email: {
                  type: "string",
                },
                password: {
                  type: "string",
                },
              },
            },
          },
        ],
        produces: ["application/json"],
        responses: {
          200: {
            description: "New user is created",
          },
        },
      },
      get: {
        tags: ["User"],
        summary: "Get all users from User table",
        responses: {
          200: {
            description: "OK",
          },
        },
      },
    },
    "/api/user/{id}": {
      parameters: [
        {
          name: "id",
          in: "path",
          required: true,
          description: "ID of user that we want to find",
          type: "number",
        },
      ],
      get: {
        tags: ["User"],
        summary: "Get user with given ID",
        responses: {
          200: {
            description: "User is found",
          },
        },
      },
      delete: {
        tags: ["User"],
        summary: "Delete user with given ID",
        responses: {
          200: {
            description: "User Deleted",
          },
        },
      },
    },
    "/api/book/cinema": {
      post: {
        tags: ["Cinema"],
        summary: "Book Cinema",
        description: "Book Cinema",
        parameters: [
          {
            name: "cinema",
            in: "body",
            description: "User that we want to book cinema",
            schema: {
              properties: {
                movieName: {
                  type: "string",
                },
                description: {
                  type: "string",
                },
                ticketPrice: {
                  type: "string",
                },
                totalPrice: {
                  type: "string",
                },
                city: {
                  type: "string",
                },
                seats: {
                  type: "string",
                },
              },
            },
          },
        ],
        produces: ["application/json"],
        responses: {
          200: {
            description: "Tickets has been booked successfully",
          },
        },
      },
    },
    "/api/cancel/cinema/{id}": {
      parameters: [
        {
          name: "id",
          in: "path",
          required: true,
          description: "ID of cinema that we want to find",
          type: "number",
        },
      ],
      get: {
        tags: ["Cinema"],
        summary: "Get cinema with given ID",
        responses: {
          200: {
            description: "Tickets has been canceled successfully",
          },
        },
      },
    },
  },
};

## Nginx


## routes

### Authorization
##### /auth/login
Login route that takes `userName` and `password` parameters. Returns a web token that contains permissions and login time. 

### Users
##### /users
Returns all businesses. No authorization required.
##### /users/new
Creates a new business. Must use admin web token in the `Authorization` header.

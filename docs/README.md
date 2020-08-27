# API Documentation

The API will always respond in JSON, and requests need also to be in JSON.

## Open Endpoints

Open endpoints require no Authentication.

_You can use an election id to retrieve an election._

* [Authenticate](election/autheticate/post.md) : `POST /election/:id/authenticate/`
* [Create Election](election/post.md) : `POST /election/`

## Endpoints that require Authentication

Closed endpoints require a valid jwt token to be included in the header of the
request. A Token can be acquired from the authenticate route above.

In principle, every user and every voter receives an access code for each election. With this code, a jwt token can be retrieved via the authenticate route, which is used for verification in the application. This token is valid for one hour.

### Current User related

Each endpoint manipulates or displays information related to the User whose
Token is provided with the request:

* [Election](election/get.md) : `GET /election/:id/`
* [Update Election](user/put.md) : `PUT /api/user/`
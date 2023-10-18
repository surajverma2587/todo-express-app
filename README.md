# Todo Express App Challenge

## User Story

> As a API I should provide CRUD capabilities for todo items.

## Acceptance Criteria

- GET endpoint `/todo` returns all todo items
- GET endpoint `/todo/:id` returns a specific todo item
- POST endpoint `/todo` add a new todo item and the response should return a 201 status code
- PUT endpoint `/todo/:id` updates a specific todo item
- DELETE endpoint `todo/:id` removes a specific todo item
- If the individual todo item is not found then the response should return a 404 status code
- If any of the API requests fail then the response should return a 500 status code
- Add a logger middleware to log the incoming requests
- The todo items will be stored and retrieved from a file `todo.json`
- Use express routers to define a routes
- The POST, PUT and DELETE routes will require an API key in the request header as `x-api-key` to perform the operations
- If the `x-api-key` is missing for the POST, PUT and DELETE routes then the response should return a 401 status code

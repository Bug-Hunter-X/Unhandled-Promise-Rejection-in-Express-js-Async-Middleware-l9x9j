# Unhandled Promise Rejection in Express.js Async Middleware

This repository demonstrates a common error in Express.js applications where asynchronous operations within middleware functions are not properly handled, leading to unhandled promise rejections and unexpected application behavior.

## Bug Description:

The `bug.js` file contains an Express.js application with an asynchronous operation (simulated using `someAsyncOperation()`) inside a route handler.  If the asynchronous operation fails, the error is logged to the console, but the client receives no error response.

## Solution:

The `bugSolution.js` file presents the corrected code. It handles potential errors within the `.catch()` block of the promise, sending an appropriate error response to the client using `res.status(500).send('Error')`. This ensures that the client receives proper feedback in case of an issue.

## How to reproduce:

1. Clone this repository.
2. Navigate to the repository directory.
3. Install dependencies: `npm install express`
4. Run `node bug.js`.
5. Make a request to `http://localhost:3000`.  Observe the server console for errors.
6. Run `node bugSolution.js` and observe that it handles errors gracefully.
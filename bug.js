const express = require('express');
const app = express();
app.get('/', (req, res) => {
  // Asynchronous operation (e.g., database query) that might take time
  someAsyncOperation().then(() => {
    res.send('Hello World!');
  }).catch(err => {
    console.error(err);
    // Missing error handling for the response
  });
});
app.listen(3000, () => console.log('Server listening on port 3000'));
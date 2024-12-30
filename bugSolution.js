const express = require('express');
const app = express();
app.get('/', (req, res) => {
  someAsyncOperation().then(() => {
    res.send('Hello World!');
  }).catch(err => {
    console.error(err);
    res.status(500).send('Error'); // Proper error handling
  });
});
app.listen(3000, () => console.log('Server listening on port 3000'));

function someAsyncOperation() {
  //Simulate an async operation that might fail
  return new Promise((resolve, reject) => {
    const success = Math.random() < 0.5;
    setTimeout(() => {
      if (success) {
        resolve();
      } else {
        reject(new Error('Something went wrong!'));
      }
    }, 1000);
  });
} 
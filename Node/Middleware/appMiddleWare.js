const express = require('express');
const app = express();

// Middleware 1: Logging
app.use((req, res, next) => {
  console.log(`Request received at ${new Date().toISOString()}`);
  next();
});

// Middleware 2: Authentication (simplified)
app.use((req, res, next) => {
  if (req.query.auth === 'true') {
    next();
  } else {
    res.status(401).send('Unauthorized');
  }
});

// Final Route Handler
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.listen(5000, () => {
  console.log('Server running on http://localhost:5000');
});

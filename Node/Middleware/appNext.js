/* Basic Use
 * In this case, when a request is made to the "'/'" route, 
 * "Middleware 1" and " Middleware 2" would be sent 
 * to the console before the response "Hello, World!" 
 * is sent to the client.
 */
app.use((req, res, next) => {
  console.log("Middleware 1");
  next();
});

app.use((req, res, next) => {
  console.log("Middleware 2");
  next();
});

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

/* Error handling
 * You can also pass an argument to "next" to specifically signal an error.
 * This will bypass all other middleware in the stack and go straight
 * to any error-handling middleware.
 */
let someErrorCondition = true;
app.use((req, res, next) => {
  if (someErrorCondition) {
    next(new Error('Something went wrong'));
  } else {
    next();
  }
});

/* Error-handling
 * You can also pass an argument to "next" to signal an error. 
 * This will bypass all other middleware and go straight 
 * to any error-handling middleware.
 */
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send('Internal Server Error');
});

/* Conditional Next
 * Sometimes, you may want to decide whether to move 
 * to the next middleware based on a condition. Here,
 * the middleware checks a query parameter "isAdmin". 
 * If it's "true", the request goes to the next middleware. 
 * Otherwise, it ends with a 403 Forbidden status.
 */
app.use((req, res, next) => {
  if (req.query.isAdmin === 'true') {
    next();
  } else {
    res.status(403).send('Forbidden');
  }
});

/* Route-specific Next
 * When attaching multiple handlers to a specific route, 
 * you can use "next" to pass control through them.
 */
app.get('/', 
  (req, res, next) => {
    console.log('First function');
    next();
  },
  (req, res, next) => {
    console.log('Second function');
    next();
  },
  (req, res) => {
    res.send('Hello, World!');
  }
);

/* 'next('route')'
 * A special use-case is calling "next('route')", which will 
 * skip all other middleware for the current route and move 
 * to the next registered route.
 * If "someCondition" is "true", the "Skipped Outcome" will 
 * be sent to the client instead of the "Regular Outcome".
*/
app.get('/example',
  (req, res, next) => {
    if (someCondition) {
      next('route');
    } else {
      next();
    }
  },
  (req, res) => {
    res.send('Regular Outcome');
  }
);
app.get('/example', (req, res) => {
  res.send('Skipped Outcome');
});

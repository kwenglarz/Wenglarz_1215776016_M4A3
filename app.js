// // Import the required modules
// const express = require('express');
// const bodyParser = require('body-parser');
// const path = require('path');
// const dotenv = require('dotenv');
// dotenv.config({ path: './config.env' });

// // Create an instance of express
// const app = express();

// // HAD TO ADD - need to allow express to parse out JSON body
// app.use(express.json());

// // We use the 'body-parser' middleware to parse the incoming request bodies
// app.use(bodyParser.urlencoded({
//   extended: true
// }));

// // Set the view engine to ejs
// app.set('view engine', 'ejs');
// app.set('views', path.join(__dirname, 'views'));
// console.log('views', path.join(__dirname, 'views'));

// // Add the routes to the app
// const studentsRouter = require('./routes/studentsRoutes');
// app.use('/students', studentsRouter);

// // connecting to database
// const mongoose = require('mongoose');

// mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.b60zlzq.mongodb.net/${process.env.DB_NAME}`, {useNewUrlParser: true})
//   .then(() => console.log('connection successful'))
//   .catch((err) => console.log(err));

// // Start the server on port 3000
// app.listen(3000, () => {
//   console.log('Server is running on port 3000');
// });

const express = require('express');
const morgan = require('morgan');


// const userRouter = require('./routes/userRoutes');

const app = express();

// 1) MIDDLEWARES
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(express.json());
app.use(express.static(`${__dirname}/public`));

app.use((req, res, next) => {
  console.log('Hello from the middleware 👋');
  next();
});

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

// 3) ROUTES
// app.use('/api/v1/courses', courseRouter);
// app.use('/api/v1/users', userRouter);
const loanRouter = require('./routes/loanRoutes');
app.use('/api/v1/loans', loanRouter);

module.exports = app;
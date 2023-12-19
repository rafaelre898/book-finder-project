const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const authRouter = require('./src/routes/auth');
const bookRouter = require('./src/routes/book');
const favouriteRouter = require('./src/routes/favourite');



const PORT = 3000;
const app = express();

app.use(cors("*"));
app.use(morgan('tiny'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/', authRouter);
app.use('/', bookRouter);
app.use('/', favouriteRouter);



app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});


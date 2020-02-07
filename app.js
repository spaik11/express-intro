const express = require('express');
const app = express();
const path = require('path');
const users = require('./models/Users');
// const { logMe } = require('./middleware/logger');
// const { showMoment } = require('./middleware/moment');
const logger = require('morgan');
const port = process.env.PORT || '3000';

// import userRoutes file from routes folder
const userRoutes = require('./routes/userRoutes');

// used for collecting information in .post route
app.use(logger('dev'));

// parses json as middleware that we can use
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// connect the default path to the userRoutes in routes folder
app.use('/api/users', userRoutes);
// app.use(logMe);
// app.use(showMoment);
app.use(express.static(path.join(__dirname, 'public')));

// app.get('/', (req, res) => {
//     res.send(path.join(__dirname, 'models'));
// });

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});


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

// get all users
// app.get('/api/users', (req, res) => {
//     res.json(users);
// });

// get a single user
// app.get('/api/users/:id', (req, res) => {
//     const userExists = users.filter((user) => user.id === req.params.id);

//     if (userExists.length !== 0) {
//         return res.status(200).json(userExists[0]);
//     } else {
//         return res
//             .status(400)
//             .json({ message:`User with id: ${req.params.id} does not exist` });
//     };
// });

// create user
// app.post('/', (req, res) => {
//     if(!req.body.name || !req.body.email) {
//         return res
//             .status(400)
//             .json({ message: 'Please enter both a name and an email' });
//     }
//     const newUser = {};
//     newUser.id = uuid();
//     newUser.name = req.body.name;
//     newUser.email = req.body.email;
//     users.push(newUser);
//     return res.json(req.body);
// });

// app.put('/api/users/:id', (req, res) => {
//     const userExists = users.filter((user) => user.id === req.params.id);
//     const user = userExists[0];

//     if (userExists.length !== 0) {
//         const updatedUser = req.body;

//         if (user.id === req.params.id) {
//             user.name = updatedUser.name ? updatedUser.name : user.name;
//             user.email = updatedUser.email ? updatedUser.email : user.email;
//             return res
//                 .status(200)
//                 .json({ message: 'User updated.', user });
//         }
//     } else {
//         return res
//             .status(400)
//             .json({ message: `User with id: ${req.params.id} does not exist.`});
//     }
// })

// app.delete('/api/users/:id', (req, res) => {
//     const userExists = users.filter((user) => user.id === req.params.id);
//     const user = userExists[0];

//     if (userExists.length !== 0) {
//         const deletedUser = users.indexOf(user);
//         users.splice(deletedUser, 1);
//         return res
//             .status(200)
//             .json({ message: 'User Deleted', user });
//     } else {
//         return res
//             .status(400)
//             .json({ message: `User with id: ${req.params.id} does not exist.`});
//     };
// });

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});


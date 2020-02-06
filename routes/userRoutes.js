const express = require('express');
const router = express.Router();
const users = require('../models/Users');
const uuid = require('uuid/v4');

router.get('/', (req, res) => {
    res.json(users);
});

router.get('/:id', (req, res) => {
    const userExists = users.filter((user) => user.id === req.params.id);

    if (userExists.length !== 0) {
        return res.status(200).json(userExists[0]);
    } else {
        return res
            .status(400)
            .json({ message:`User with id: ${req.params.id} does not exist` });
    };
});

router.post('/', (req, res) => {
    if(!req.body.name || !req.body.email) {
        return res
            .status(400)
            .json({ message: 'Please enter both a name and an email' });
    };

    const newUser = {};
    newUser.id = uuid();
    newUser.name = req.body.name;
    newUser.email = req.body.email;
    users.push(newUser);
    return res.json(req.body);
});

router.put('/:id', (req, res) => {
    const userExists = users.filter((user) => user.id === req.params.id);
    const user = userExists[0];

    if (userExists.length !== 0) {
        const updatedUser = req.body;

        if (user.id === req.params.id) {
            user.name = updatedUser.name ? updatedUser.name : user.name;
            user.email = updatedUser.email ? updatedUser.email : user.email;
            return res
                .status(200)
                .json({ message: 'User updated.', user });
        };
    } else {
        return res
            .status(400)
            .json({ message: `User with id: ${req.params.id} does not exist.`});
    };
});

router.delete('/:id', (req, res) => {
    const userExists = users.filter((user) => user.id === req.params.id);
    const user = userExists[0];

    if (userExists.length !== 0) {
        const deletedUser = users.indexOf(user);
        users.splice(deletedUser, 1);
        return res
            .status(200)
            .json({ message: 'User Deleted', user });
    } else {
        return res
            .status(400)
            .json({ message: `User with id: ${req.params.id} does not exist.`});
    };
});

module.exports = router;

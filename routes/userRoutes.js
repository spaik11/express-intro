const express = require('express');
const router = express.Router();
const users = require('../models/Users');

router.get('/', (req, res) => {
    res.json(users);
});

router.get('/:id', (req, res) => {
    const userExists = users.filter((user) => user.id === parseInt(req.params.id));

    if (userExists.length !== 0) {
        return res.status(200).json(userExists[0]);
    } else {
        return res
            .status(400)
            .json({ message:`User with id: ${req.params.id} does not exist` });
    };
});

module.exports = router;

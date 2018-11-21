const User = require('../models').User,
    Github = require('../models').Github,
    Linkedin = require('../models').Linkedin;
const jwt = require('jsonwebtoken');
const secret = require('../config').secret;
const uniqid = require('uniqid');
const md5 = require('md5');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const axios = require('axios');
const linkedinConfig = require('../config/linkedin.json')


createAccountHelper = (req, res) => {
    User.create({
        id: uniqid("user-"),
        email: req.body.email,
        username: req.body.username,
        password: md5(req.body.password),
    })
    .then(user => {
        const jwttoken = jwt.sign({
            userId: user.id,
            email: req.body.email,
            username: req.body.username,
            password: md5(req.body.password),
        }, secret, { expiresIn: '24h' });
        res.status(201).send({
            user: {
                userId: user.id,
                email: req.body.email,
                username: req.body.username,
                github: req.body.github,
                linkedin: req.body.linkedin,
            },
            jwttoken: jwttoken
        })

        Linkedin.create({ name: req.body.linkedin, userId: user.id})
        .then(linkedin => console.log("Create linkedin success: " + linkedin))
        .catch(err => console.log("Create linkedin fail: " + err))
        Github.create({ name: req.body.github, userId: user.id})
        .then(github => console.log("Create github success: " + github))
        .catch(err => console.log("Create github fail: " + err))
    }) 
    .catch(err => res.status(403).send({
        error: err})
    )
             
},

    loginHelper = (user, req, res) => {
        if (!user)
            return res.status(404).send({ error: 'Wrong username or email' })
        else if (user.password === md5(req.body.password)) {
            console.log("user = " + user)
            const jwttoken = jwt.sign({
                userId: user.id,
                username: user.username,
                email: user.email,
                password: user.password,
            }, secret, { expiresIn: '24h' });
            return res.status(200).send({
                user: {
                    userId: user.id,
                    email: user.email,
                    username: user.username,
                },
                jwttoken: jwttoken
            });
        }
        return res.status(404).send({ error: 'wrong password' })
    }

module.exports = {
    createAccount(req, res) {
        User.findOne({ where: { email: req.body.email } })
            .then(user => {
                if (user) {
                    res.status(400).send({
                        error: "Email address is used"
                    })
                    return;
                } else {
                    User.findOne({ where: { username: req.body.username } })
                        .then(user => {
                            if (user) {
                                res.status(400).send({
                                    error: "Username is used"
                                })
                                return;
                            } else {
                                createAccountHelper(req, res);
                            }
                        })
                        .catch((err) => res.status(404).send({ error: err }))
                }
            })
            .catch((err) => res.status(404).send({ error: err }))
    },

    login(req, res) {
        if (req.body.username) {
            User.findOne({ where: { [Op.or]: [{ email: req.body.username }, { username: req.body.username }] } })
                .then((user) => loginHelper(user, req, res))
                .catch(err => res.status(200).send({ err: err }));
        } else {
            res.status(404).send({ err: 'There is no such username' })
        }
    },

    find(req, res) {
        console.log("find request");
        const username = req.query.username;
        if (username) {
            console.log("username = " + username)
            User.findOne({ where: {username: username} })
                .then(user => {
                    return res.status(200).send({
                        username: user.username,
                        userId: user.id
                    })
                })
                .catch(err => res.status(404).send({ err: err }));
        } else {
            res.status(400).send({ err: "No username param. " });
        }
    },

    /**
     * Response conatain a json object
     * @param {*} req 
     * @param {*} res 
     */
    user(req, res) {
        console.log("/user");
        const userId = req.query.userId;
        if (userId) {
            User.findById(userId)
            .then(user => {
                if (!user) {
                    return res.status(404).send({ err: 'no such user'})
                }
                Github.findOne({where: {userId: userId}})
                .then(github => {
                    console.log("github: " + github.name)
                    if (!github.name)
                        return res.status(404).send({ err: "Repos not found" })
                    else {
                        axios.get(`https://api.github.com/users/${github.name}/repos`)
                        .then(response => {
                            return res.status(200).send({
                                username: user.name,
                                email: user.email,
                                userId: userId,
                                repos: response.data
                            })
                        })
                        .catch(err => {
                            res.status(400).send({ err: "Fetch from gethub fail: " + err })
                        })
                    }
                })
                .catch(err => {
                    res.status(400).send({ err: 'Finding repo fail: ' + err})
                });
            })
            .catch(err => {
                res.status(400).send({ err: 'Finding repo fail: ' + err})
            });
        } else {
            res.status(400).send({ err: "No id param. " });
        }
    },

    userList(req, res) {
        User.findAll({ limit: 10 }) // Only return 10 users's list
            .then(users => {
                res.status(200).send(users.map(user => {
                    return { username: user.username, userId: user.id }
                }))
            })
            .catch(err => {
                res.status(400).send({ err: err })
            })
    },

    // Test code: 
    // TODO: change the function below
    linkedinAuth(req, res) {
        console.log(req.query.code);
        res.status(200).send('Hi')
    },

    linkedin(req, res) {
        axios.get("https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=86g4me4vprq5yo&redirect_uri=https%3A%2F%2Fwww.google.com&state=987654321&scope=r_basicprofile")
            .then(response => {
                console.log(response.data)
                res.status(200).send(response.data);
            })
            .catch(err => {
                res.status(400).send({ err: "Fetch from linkedin error: " + err })
            })
    },
}
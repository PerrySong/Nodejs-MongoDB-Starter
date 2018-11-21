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

module.exports = {
  getGithub(req, res) {
    const userId = req.query.userId;
    User.findById(userId)
    .then(user => {
        if (!user) {
            return res.status(404).send({ err: 'no such user'})
        }
        Github.find({ where: { userId: userId } })
        .then(github => {
            return res.status(200).send({
                userId: `Hi${userId}`,
                github: github
            })
        })
        .catch(err => {
            return res.status(400).send({ err: err })
        })
    })
    .catch(err => {
        return res.status(400).send({ err: err })
    })
  },
  
}
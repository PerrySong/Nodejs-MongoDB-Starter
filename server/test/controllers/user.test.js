const assert = require('chai').assert;
const userController = require('../../controllers').user;
const mockResponse = require('./mockResponse').mockResponse;
const axios = require('axios');
const root_Url = "/api";

// How to test when it connect to data base
describe('User controller testing', function() {
  describe('System test register', () => {
    const req = {
      username: "test1",
      email: "test1@gmail.com",
      password: "test1_password",
      linkedin: "test1_linkedin",
      github: "test1_github"
    }
    
    const res = axios.post(`${root_Url}/register`, req)
    .then(res => console.log(res.data))
    .catch(err => (console.log(err)))
    
  })
})

  // describe('Test register', () => {
  //   it ('Test register a user', () => {
  //     const req = {
  //       body: {
  //         username: 'tester2',
  //         email: 'testeremail2@gmail.com',
  //         password: 'Some_password123',
  //         linkedin: 'Some linkedin account',
  //         github: 'testerGithub'
  //       }
  //     }
  //     let res = Object.create(mockResponse);
  //     res.status()
  //     userController.createAccount(req, res);

  //     console.log(res.getStatus())
  //   })
  // })


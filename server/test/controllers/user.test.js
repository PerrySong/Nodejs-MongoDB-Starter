const assert = require('chai').assert;
const userController = require('../../controllers').user
const mockReq = require('sinon-express-mock').mockReq;
const mockRes = require('sinon-express-mock').mockRes;

// How to test when it connect to data base
describe('User controller testing', function() {
  describe('Test register', () => {
    it ('Test register a user', () => {
      const request = {
        body: {
          username: 'tester1',
          email: 'testeremail@gmail.com',
          password: 'Some_password123',
          linkedin: 'Some linkedin account',
          github: 'testerGithub'
        }
      }
      const req = mockReq(request)
      const res = mockRes()

      userController.createAccount(req, res);
      assert.equal(res.status, 200);
    })
  })

})
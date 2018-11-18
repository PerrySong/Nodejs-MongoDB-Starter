const usersController = require('../controllers').user,
      jwtCheck = require('../middleware/authorization').jwtCheck,
      formatChecker = require('../middleware/formatChecker')

module.exports = (app) => {
  app.get('/', (req, res) => res.status(200).send({
    message: 'Welcome to the UserAuth API!'
  }));

  //Use middleware
  app.use('/auth', jwtCheck);
  app.use('/register', formatChecker.registerChecker);

   //Users' routes:
  app.post('/register', usersController.createAccount);
  app.post('/login', usersController.login);
  app.get('/find', usersController.find);
  
  //Users' github repo
  app.get('/user', usersController.user);
  app.get('/linkedin', usersController.linkedin);
  app.get('/userlist', usersController.userList);
  app.get('/github', usersController.getGithub);
  //TODO:
  // Create worker to fetch data from linkedin and github and store data in the db

  // app.get('/test', usersController.test)
}
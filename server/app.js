const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');

// const search = require('./server/helpers/crypto-search/search');


//Send email notification to user at 8am every day
// const j = schedule.scheduleJob('0 * * * * *', function(){
//   console.log("sent email")
//   notification.pushNotification();
// });


// schedule.scheduleJob('0 * * * * *', function(){
//   console.log("Update similarity")
//   recommendation.updateSimilarity();
// });

// Set up the express app
const app = express('');

// Log requests to the console.
app.use(logger('dev'));

app.use(cors());

// Parse incoming requests data (https://github.com/expressjs/body-parser)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

require('./routes')(app);
// Setup a default catch-all route that sends back a welcome message in JSON format.
app.get('*', (req, res) => res.status(200).send({
  message: 'Welcome to the beginning of nothingness.',
}));

module.exports = app;
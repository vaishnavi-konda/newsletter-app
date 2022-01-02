const express = require('express');
const bodyParser = require('body-parser');
const https = require('https');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public')); // To access local files on the system

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/signup.html');
});

app.post('/', function (req, res) {
  const firstName = req.body.fName;
  const lastName = req.body.lName;
  const email = req.body.email;

  const data = {
    members: [
      {
        email_address: email,
        status: 'subscribed',
        merge_fields: {
          FNAME: firstName,
          LNAME: lastName,
        },
      },
    ],
  };

  const jsonData = JSON.stringify(data);

  const url = 'https://us20.api.mailchimp.com/3.0/lists/1ea70ba998';

  const options = {
    method: 'POST',
    auth: 'vaishnavi:27419672d7f7848511474a96537b4eae-us20',
  };

  const request = https.request(url, options, function (response) {
    response.on('data', function (data) {
      // console.log(JSON.parse(data));

      if (response.statusCode === 200) {
        res.sendFile(__dirname + '/success.html');
      } else {
        res.sendFile(__dirname + '/failure.html');
      }
    });
  });

  request.write(jsonData);
  request.end();
});

app.post('/failure || /success', function (req, res) {
  res.redirect('/');
});

app.listen(process.env.PORT || 3000, function (req, res) {
  console.log('Listening on port 3000...');
});

// API Key
// 27419672d7f7848511474a96537b4eae-us20

// Audience id or List id
// 1ea70ba998

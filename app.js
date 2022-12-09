import * as dotenv from 'dotenv';
dotenv.config();

import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

import express from 'express';
import nodemailer from 'nodemailer';
const app = express();
const router = express.Router();
const port = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static(__dirname + '/'));
app.use('/images', express.static(path.join(__dirname + '/images')));
app.use('/fonts', express.static(path.join(__dirname + '/fonts')));
app.use('/css', express.static(path.join(__dirname + '/css')));
app.use('/js', express.static(path.join(__dirname + '/js')));

import bodyParser from 'body-parser';
router.use(bodyParser.json());
router.use(
  bodyParser.urlencoded({
    extended: false,
  })
);

router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/index.html'));
});

router.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, '/about.html'));
});

router.get('/projects', (req, res) => {
  res.sendFile(path.join(__dirname, '/projects.html'));
});

router.post(
  '/contact',
  function (req, res, next) {
    try {
      const recipient = req.body.email;
      console.log('recipient:', recipient);

      let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          type: 'OAuth2',
          user: process.env.MAIL_USERNAME,
          pass: process.env.MAIL_PASSWORD,
          clientId: process.env.OAUTH_CLIENTID,
          clientSecret: process.env.OAUTH_CLIENT_SECRET,
          refreshToken: process.env.OAUTH_REFRESH_TOKEN,
        },
      });

      let mailOptions = {
        from: 'andrewdevvv@gmail.com',
        to: 'andrew.sokolowsky@gmail.com',
        subject: `Message from ${recipient}`,
        text: 'Hi there, I want to get in touch with you :)',
      };

      transporter.sendMail(mailOptions, function (err, data) {
        if (err) {
          console.log('Error ' + err);
        } else {
          console.log('Email sent successfully');
          next();
          res.sendFile(path.join(__dirname, '/contact_success'));
        }
      });
    } catch (err) {
      console.log(err);
      return res.send('Error uploading file');
    }
  },
  function (req, res, next) {
    res.sendFile(path.join(__dirname, '/contact_success'));
  }
);

router.get('/contact', (req, res) => {
  res.sendFile(path.join(__dirname, '/contact.html'));
});

router.get('contact_success', (req, res) => {
  res.sendFile(path.join(__dirname, '/contact_success.html'));
});

app.use('/', router);
app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`);
});

export { app };

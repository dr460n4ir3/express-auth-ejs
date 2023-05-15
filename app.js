const express = require('express');
const indexRouter = require('./routes/index');
const { auth } = require('express-openid-connect');
require('dotenv').config();

const config = {
  authRequired: false,
  auth0Logout: true,
  secret: process.env.SECRET,
  baseURL: process.env.BASEURL,
  clientID: process.env.CLIENTID,
  issuerBaseURL: process.env.ISSUER
};

const app = express();
app.set('views', 'views');
app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
// auth router attaches /login, /logout, and /callback routes to the baseURL
app.use(auth(config));

port = process.env.PORT;

app.use('/', indexRouter);

app.listen(port, () => {
    console.log(`Server is listening on http://localhost:${port}`);
});

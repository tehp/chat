import * as mongoose from 'mongoose';
import * as express from 'express';
import * as chalk from 'chalk';
import * as morgan from 'morgan';
import * as bodyParser from 'body-parser';
import * as session from 'express-session';

var app = express(); // express construct
let router = express.Router();

import * as userRouter from './routes/user';
import * as teamRouter from './routes/team';
import * as messageRouter from './routes/message';

var db_url = 'mongodb://localhost/chat';
var port = 8080;

app.use(session({
  secret: "CHANGE_THIS",
  saveUninitialized: true,
  resave: true
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(morgan('dev'));

// database connection
mongoose.connect(db_url);

var db_test = mongoose.connection;
db_test.on('error', console.error.bind(console, 'connection error:'));
db_test.once('open', () => {
  console.log('connected to db');
});

app.use('/user', userRouter);
app.use('/team', teamRouter);
app.use('/message', messageRouter);

app.listen(port);

export = router;

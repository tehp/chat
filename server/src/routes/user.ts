import * as express from 'express';
import * as mongoose from 'mongoose';
import {User, UserModel} from '../models/User';

let router = express.Router();

router.get('/', (_req:any, res:any) => {
  res.send('/user');
})

router.post('/', async (_req:any, res:any) => {
  var user = new UserModel({
    username: _req.body.username,
    email: _req.body.email
  });
  await user.save();
  res.next();
})

export = router;

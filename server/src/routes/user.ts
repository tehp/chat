import * as express from 'express';
import {UserModel} from '../models/User';

let router = express.Router();

router.get('/', async (_req:any, res:any) => {
  var users = await UserModel.find();
  res.send(users);
})

router.get('/:id', async (_req:any, res:any) => {
  var user = await UserModel.find({ '_id': _req.params.id });
  res.send(user);
})

router.post('/', async (_req:any, res:any) => {
  var user = new UserModel({
    name: _req.body.name,
    password: _req.body.password
  });
  await user.save();
  res.send(user);
})

export = router;

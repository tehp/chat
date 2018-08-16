import * as express from 'express';
import {MessageModel} from '../models/Message';

let router = express.Router();

router.get('/', async (_req:any, res:any) => {
  var messages = await MessageModel.find();
  res.send(messages);
})

router.get('/:id', async (_req:any, res:any) => {
  var message = await MessageModel.find({ '_id': _req.params.id });
  res.send(message);
})

router.post('/', async (_req:any, res:any) => {
  var message = new MessageModel({
    body: _req.body.body,
    sender: _req.body.sender,
    team: _req.body.team
  });
  await message.save();
  res.send(message);
})

export = router;

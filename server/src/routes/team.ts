import * as express from 'express';
import {TeamModel} from '../models/Team';
import { User } from '../models/User';

let router = express.Router();

router.get('/', async (_req:any, res:any) => {
  var teams = await TeamModel.find();
  res.send(teams);
})

router.get('/:id', async (_req:any, res:any) => {
  var team = await TeamModel.find({ '_id': _req.params.id });
  res.send(team);
})

router.post('/', async (_req:any, res:any) => {
  var team = new TeamModel({
    name: _req.body.name
  });
  await team.save();
  res.send(team);
})

export = router;

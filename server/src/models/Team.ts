import { prop, Typegoose, ModelType, InstanceType, instanceMethod } from 'typegoose';
import * as mongoose from 'mongoose';
import { User } from './User';

export class Team extends Typegoose {
  @prop({ unique: true })
  name?: string;

  @prop()
  admin?: User;

  @prop()
  members?: User[];
}

export const TeamModel = new Team().getModelForClass(Team);

import { prop, Typegoose, ModelType, InstanceType } from 'typegoose';
import * as mongoose from 'mongoose';
import { User } from './User';

export class Team extends Typegoose {
  @prop({ unique: true })
  name?: string;

  @prop()
  administrator?: User;

  @prop()
  members?: User[];
}

export const UserModel = new Team().getModelForClass(Team);

import { prop, Typegoose, ModelType, InstanceType } from 'typegoose';
import * as mongoose from 'mongoose';
import { User } from './User';
import { Team } from './Team';

export class Message extends Typegoose {
  @prop({ unique: true })
  body?: string;

  @prop()
  sender?: User;

  @prop()
  team?: Team;
}

export const UserModel = new Message().getModelForClass(Message);

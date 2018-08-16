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

export const MessageModel = new Message().getModelForClass(Message);

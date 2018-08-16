import { prop, Typegoose, ModelType, InstanceType } from 'typegoose';
import * as mongoose from 'mongoose';

export class User extends Typegoose {
  @prop({ unique: true })
  name?: string;

  @prop()
  password?: string;
}

export const UserModel = new User().getModelForClass(User);

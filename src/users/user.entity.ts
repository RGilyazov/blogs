import { CreationOptional, DataTypes, Optional } from 'sequelize';
import { Column, Model, Table, Unique } from 'sequelize-typescript';
import {
  USER_EMAIL_LENGTH,
  USER_FULLNAME_LENGTH,
  USER_USERNAME_LENGTH,
} from './constants';

export type UserAttributes = {
  id: number;
  fullName: string;
  userName: string;
  password: string;
  email: string;
  createdAt: CreationOptional<Date>;
  updatedAt: CreationOptional<Date>;
};

export type UserCreationAttributes = Optional<
  UserAttributes,
  'id' | 'createdAt' | 'updatedAt'
>;
@Table
export class User extends Model<UserAttributes, UserCreationAttributes> {
  @Column({ type: DataTypes.STRING(USER_FULLNAME_LENGTH) })
  declare fullName: string;

  @Unique
  @Column({ type: DataTypes.STRING(USER_USERNAME_LENGTH) })
  declare userName: string;

  @Column
  declare password: string;

  @Unique
  @Column({ type: DataTypes.STRING(USER_EMAIL_LENGTH) })
  declare email: string;
}

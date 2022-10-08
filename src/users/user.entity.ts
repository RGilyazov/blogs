import { CreationOptional, Optional } from 'sequelize';
import { Column, Model, Table, Unique } from 'sequelize-typescript';

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
  @Column
  declare fullName: string;

  @Unique
  @Column
  declare userName: string;

  @Column
  declare password: string;

  @Unique
  @Column
  declare email: string;
}

import { CreationOptional, DataTypes, Optional } from 'sequelize';
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
  @Column({ type: DataTypes.STRING(100) })
  declare fullName: string;

  @Unique
  @Column({ type: DataTypes.STRING(50) })
  declare userName: string;

  @Column
  declare password: string;

  @Unique
  @Column({ type: DataTypes.STRING(100) })
  declare email: string;
}

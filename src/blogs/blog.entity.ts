import { CreationOptional, DataTypes, Optional, ENUM } from 'sequelize';
import {
  Column,
  Model,
  Table,
  NotEmpty,
  ForeignKey,
} from 'sequelize-typescript';
import { User } from 'src/users/user.entity';

export enum BlogStatusType {
  Published = 'PB',
  Drafted = 'DR',
  WaitingForReview = 'WR',
}

export type BlogAttributes = {
  id: number;
  title: string;
  content: string;
  status: BlogStatusType;
  userId: number;
  createdAt: CreationOptional<Date>;
  updatedAt: CreationOptional<Date>;
};

export type BlogCreationAttributes = Optional<
  BlogAttributes,
  'id' | 'createdAt' | 'updatedAt'
>;
@Table
export class Blog extends Model<BlogAttributes, BlogCreationAttributes> {
  @ForeignKey(() => User)
  @Column
  declare userId: number;

  @NotEmpty
  @Column({ type: DataTypes.STRING(50) })
  declare title: string;

  @NotEmpty
  @Column({ type: DataTypes.TEXT })
  declare content: string;

  @NotEmpty
  @Column({
    type: ENUM(...Object.values(BlogStatusType)),
    defaultValue: BlogStatusType.Drafted,
  })
  declare status: BlogStatusType;
}

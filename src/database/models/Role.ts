import {
  BaseEntity,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { User } from "./User";

@Entity("roles")
export class Role extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ name: "role_name" })
  roleName!: string;

  @OneToMany(() => User, (user) => user.roleId)
  users!: User[];
}

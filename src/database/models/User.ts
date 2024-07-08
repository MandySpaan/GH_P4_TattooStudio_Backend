import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Role } from "./Role";
import { Appointment } from "./Appointment";

@Entity("users")
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ name: "first_name" })
  firstName!: string;

  @Column({ name: "last_name" })
  lastName!: string;

  @Column({ name: "email" })
  email!: string;

  @Column({ name: "password" })
  password!: string;

  @ManyToOne(() => Role, (role) => role.users)
  @JoinColumn({ name: "role_id" })
  role!: Role;

  @Column({ name: "created_at" })
  created_at!: Date;

  @Column({ name: "updated_at" })
  updated_at!: Date;

  @Column({ name: "is_active" })
  is_active!: boolean;

  @OneToMany(() => Appointment, appointment => appointment.user)
  appointments!: Appointment[];
}

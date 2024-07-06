import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

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

  @Column({ name: "role_id" })
  roleId!: string;

  @Column({ name: "created_at" })
  created_at!: Date;

  @Column({ name: "updated_at" })
  updated_at!: Date;

  @Column({ name: "is_active" })
  is_active!: boolean;
}

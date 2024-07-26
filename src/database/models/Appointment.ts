import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { User } from "./User";
import { Service } from "./Service";

@Entity("appointments")
export class Appointment extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ name: "appointment_date" })
  appointmentDate!: Date;

  @Column({ name: "user_id" })
  userId!: number;

  @Column({ name: "service_id" })
  serviceId!: number;

  @ManyToOne(() => User, (user) => user.appointments, { onDelete: "CASCADE" })
  @JoinColumn({ name: "user_id" })
  user!: User;

  @ManyToOne(() => Service, (service) => service.appointments)
  @JoinColumn({ name: "service_id" })
  service!: Service;
}

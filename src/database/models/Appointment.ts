import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("appointments")
export class Appointment extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: string;

  @Column({ name: "appointment_date" })
  appointmentDate!: Date;

  @Column({ name: "user_id" })
  userId!: number;

  @Column({ name: "service_id" })
  serviceId!: number;
}

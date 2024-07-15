import { AppDataSource } from "../db";
import { Appointment } from "../models/Appointment";
import { User } from "../models/User";
import { Service } from "../models/Service";

export const appointmentsSeeder = async () => {
  try {
    await AppDataSource.initialize();

    const users = await User.find();
    const services = await Service.find();

    if (users.length === 0 || services.length === 0) {
      console.error("Users or services data is missing");
      return;
    }

    const filteredUsers = users.filter((user) => user.id > 5);

    const generateRandomDate = (start: Date, end: Date) => {
      return new Date(
        start.getTime() + Math.random() * (end.getTime() - start.getTime())
      );
    };

    const startDate = new Date(2024, 7, 1);
    const endDate = new Date(2025, 2, 20);

    for (let i = 0; i < 80; i++) {
      const appointment = new Appointment();
      appointment.appointmentDate = generateRandomDate(startDate, endDate);
      appointment.userId =
        filteredUsers[Math.floor(Math.random() * filteredUsers.length)].id;
      appointment.serviceId =
        services[Math.floor(Math.random() * services.length)].id;

      await appointment.save();
    }

    console.log("Appointments have been created");
  } catch (error: any) {
    console.log("Error appointmentsSeeder:", error.message);
  } finally {
    await AppDataSource.destroy();
  }
};

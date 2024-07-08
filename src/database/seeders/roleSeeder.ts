import { AppDataSource } from "../db";
import { Role } from "../models/Role";

export const roleSeeder = async () => {
  try {
    await AppDataSource.initialize();

    const superAdmin = new Role();
    superAdmin.id = 1;
    superAdmin.roleName = "super_admin";
    await superAdmin.save();

    const admin = new Role();
    admin.id = 2;
    admin.roleName = "admin";
    await admin.save();

    const user = new Role();
    user.id = 3;
    user.roleName = "user";
    await user.save();
    console.log("Roles have been created");
  } catch (error: any) {
    console.log("Error roleSeeder:", error.message);
  } finally {
    await AppDataSource.destroy();
  }
};

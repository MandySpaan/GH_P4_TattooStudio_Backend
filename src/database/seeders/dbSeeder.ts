import { appointmentsSeeder } from "./apptsSeeder";
import { roleSeeder } from "./roleSeeder";
import { serviceSeeder } from "./serviceSeeder";
import { userSeeder } from "./userSeeder";

(async () => {
  console.log("Starting seeders...");
  await roleSeeder();
  await userSeeder();
  await serviceSeeder();
  await appointmentsSeeder();
})();

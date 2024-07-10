import { AppDataSource } from "../db";
import { Service } from "../models/Service";

export const serviceSeeder = async () => {
  try {
    await AppDataSource.initialize();

    const tattooPersonalized = new Service();
    tattooPersonalized.id = 1;
    tattooPersonalized.serviceName = "Personalized Tattoo";
    tattooPersonalized.description =
      "The freedom to ask for unique tattoo designs and completely customize your tattoo according to your preference and taste.";
    await tattooPersonalized.save();

    const tattooFromCatalogue = new Service();
    tattooFromCatalogue.id = 2;
    tattooFromCatalogue.serviceName = "Catalogue Tattoo";
    tattooFromCatalogue.description =
      "We offer tattoos based on predefined designs in our catalog. You can choose from a variety of popular options.";
    await tattooFromCatalogue.save();

    const tattooRestoration = new Service();
    tattooRestoration.id = 3;
    tattooRestoration.serviceName = "Restoration and Rejuvenation of Tattoo";
    tattooRestoration.description =
      "We specialize in the restoration and rejuvenation of existing tattoos. Our experts work to improve and renew old tattoos, restoring their vitality.";
    await tattooRestoration.save();

    const piercingPlacement = new Service();
    piercingPlacement.id = 4;
    piercingPlacement.serviceName = "Placement of piercings";
    piercingPlacement.description =
      "We offer professional services for the placement of piercings. Our team ensures safe procedures and varied styles to meet individual preferences.";
    await piercingPlacement.save();

    const piercingSales = new Service();
    piercingSales.id = 5;
    piercingSales.serviceName = "Sales of piercings and other products";
    piercingSales.description =
      "In addition to our application services, we offer a selection of piercings and other body art related items. Customers can purchase quality products to complement their unique style.";
    await piercingSales.save();

    console.log("Services have been created");
  } catch (error: any) {
    console.log("Error serviceSeeder:", error.message);
  } finally {
    await AppDataSource.destroy();
  }
};

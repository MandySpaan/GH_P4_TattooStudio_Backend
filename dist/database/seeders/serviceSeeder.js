"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.serviceSeeder = void 0;
const db_1 = require("../db");
const Service_1 = require("../models/Service");
const serviceSeeder = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield db_1.AppDataSource.initialize();
        const tattooPersonalized = new Service_1.Service();
        tattooPersonalized.id = 1;
        tattooPersonalized.serviceName = "Personalized Tattoo";
        tattooPersonalized.description =
            "The freedom to ask for unique tattoo designs and completely customize your tattoo according to your preference and taste.";
        yield tattooPersonalized.save();
        const tattooFromCatalogue = new Service_1.Service();
        tattooFromCatalogue.id = 2;
        tattooFromCatalogue.serviceName = "Catalogue Tattoo";
        tattooFromCatalogue.description =
            "We offer tattoos based on predefined designs in our catalog. You can choose from a variety of popular options.";
        yield tattooFromCatalogue.save();
        const tattooRestoration = new Service_1.Service();
        tattooRestoration.id = 3;
        tattooRestoration.serviceName = "Restoration and Rejuvenation of Tattoo";
        tattooRestoration.description =
            "We specialize in the restoration and rejuvenation of existing tattoos. Our experts work to improve and renew old tattoos, restoring their vitality.";
        yield tattooRestoration.save();
        const piercingPlacement = new Service_1.Service();
        piercingPlacement.id = 4;
        piercingPlacement.serviceName = "Placement of piercings";
        piercingPlacement.description =
            "We offer professional services for the placement of piercings. Our team ensures safe procedures and varied styles to meet individual preferences.";
        yield piercingPlacement.save();
        const piercingSales = new Service_1.Service();
        piercingSales.id = 5;
        piercingSales.serviceName = "Sales of piercings and other products";
        piercingSales.description =
            "In addition to our application services, we offer a selection of piercings and other body art related items. Customers can purchase quality products to complement their unique style.";
        yield piercingSales.save();
        console.log("Services have been created");
    }
    catch (error) {
        console.log("Error serviceSeeder:", error.message);
    }
    finally {
        yield db_1.AppDataSource.destroy();
    }
});
exports.serviceSeeder = serviceSeeder;

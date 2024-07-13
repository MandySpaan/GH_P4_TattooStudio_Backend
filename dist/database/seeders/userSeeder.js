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
exports.userSeeder = void 0;
const bcrypt = require("bcrypt");
const db_1 = require("../db");
const User_1 = require("../models/User");
const userSeeder = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield db_1.AppDataSource.initialize();
        const usersData = [
            {
                firstName: "Tim",
                lastName: "Spaan",
                email: "user1@example.com",
                password: "password1",
                roleId: 1,
            },
            {
                firstName: "John",
                lastName: "Doe",
                email: "user2@example.com",
                password: "password2",
                roleId: 1,
            },
            {
                firstName: "Jane",
                lastName: "Smith",
                email: "user3@example.com",
                password: "password3",
                roleId: 2,
            },
            {
                firstName: "Alice",
                lastName: "Johnson",
                email: "user4@example.com",
                password: "password4",
                roleId: 2,
            },
            {
                firstName: "Bob",
                lastName: "Brown",
                email: "user5@example.com",
                password: "password5",
                roleId: 2,
            },
            {
                firstName: "Charlie",
                lastName: "Davis",
                email: "user6@example.com",
                password: "password6",
            },
            {
                firstName: "Diana",
                lastName: "Miller",
                email: "user7@example.com",
                password: "password7",
            },
            {
                firstName: "Edward",
                lastName: "Wilson",
                email: "user8@example.com",
                password: "password8",
            },
            {
                firstName: "Fiona",
                lastName: "Moore",
                email: "user9@example.com",
                password: "password9",
            },
            {
                firstName: "George",
                lastName: "Taylor",
                email: "user10@example.com",
                password: "password10",
            },
            {
                firstName: "Hannah",
                lastName: "Anderson",
                email: "user11@example.com",
                password: "password11",
            },
            {
                firstName: "Ivan",
                lastName: "Thomas",
                email: "user12@example.com",
                password: "password12",
            },
            {
                firstName: "Julia",
                lastName: "Jackson",
                email: "user13@example.com",
                password: "password13",
            },
            {
                firstName: "Kevin",
                lastName: "White",
                email: "user14@example.com",
                password: "password14",
            },
            {
                firstName: "Laura",
                lastName: "Harris",
                email: "user15@example.com",
                password: "password15",
            },
            {
                firstName: "Michael",
                lastName: "Martin",
                email: "user16@example.com",
                password: "password16",
            },
            {
                firstName: "Nina",
                lastName: "Thompson",
                email: "user17@example.com",
                password: "password17",
            },
            {
                firstName: "Oliver",
                lastName: "Garcia",
                email: "user18@example.com",
                password: "password18",
            },
            {
                firstName: "Paula",
                lastName: "Martinez",
                email: "user19@example.com",
                password: "password19",
            },
            {
                firstName: "Quentin",
                lastName: "Robinson",
                email: "user20@example.com",
                password: "password20",
            },
            {
                firstName: "Rachel",
                lastName: "Clark",
                email: "user21@example.com",
                password: "password21",
            },
            {
                firstName: "Steve",
                lastName: "Rodriguez",
                email: "user22@example.com",
                password: "password22",
            },
            {
                firstName: "Tina",
                lastName: "Lewis",
                email: "user23@example.com",
                password: "password23",
            },
            {
                firstName: "Ursula",
                lastName: "Walker",
                email: "user24@example.com",
                password: "password24",
            },
            {
                firstName: "Victor",
                lastName: "Hall",
                email: "user25@example.com",
                password: "password25",
            },
            {
                firstName: "Wendy",
                lastName: "Allen",
                email: "user26@example.com",
                password: "password26",
            },
            {
                firstName: "Xander",
                lastName: "Young",
                email: "user27@example.com",
                password: "password27",
            },
            {
                firstName: "Yvonne",
                lastName: "Hernandez",
                email: "user28@example.com",
                password: "password28",
            },
            {
                firstName: "Zack",
                lastName: "King",
                email: "user29@example.com",
                password: "password29",
            },
            {
                firstName: "Amy",
                lastName: "Scott",
                email: "user30@example.com",
                password: "password30",
            },
            {
                firstName: "Brian",
                lastName: "Green",
                email: "user31@example.com",
                password: "password31",
            },
            {
                firstName: "Chloe",
                lastName: "Adams",
                email: "user32@example.com",
                password: "password32",
            },
            {
                firstName: "David",
                lastName: "Baker",
                email: "user33@example.com",
                password: "password33",
            },
            {
                firstName: "Eve",
                lastName: "Gonzalez",
                email: "user34@example.com",
                password: "password34",
            },
            {
                firstName: "Frank",
                lastName: "Nelson",
                email: "user35@example.com",
                password: "password35",
            },
            {
                firstName: "Grace",
                lastName: "Carter",
                email: "user36@example.com",
                password: "password36",
            },
            {
                firstName: "Henry",
                lastName: "Mitchell",
                email: "user37@example.com",
                password: "password37",
            },
            {
                firstName: "Ivy",
                lastName: "Perez",
                email: "user38@example.com",
                password: "password38",
            },
            {
                firstName: "Jack",
                lastName: "Roberts",
                email: "user39@example.com",
                password: "password39",
            },
            {
                firstName: "Karen",
                lastName: "Turner",
                email: "user40@example.com",
                password: "password40",
            },
            {
                firstName: "Leo",
                lastName: "Phillips",
                email: "user41@example.com",
                password: "password41",
            },
            {
                firstName: "Mona",
                lastName: "Campbell",
                email: "user42@example.com",
                password: "password42",
            },
            {
                firstName: "Nathan",
                lastName: "Parker",
                email: "user43@example.com",
                password: "password43",
            },
            {
                firstName: "Olivia",
                lastName: "Evans",
                email: "user44@example.com",
                password: "password44",
            },
            {
                firstName: "Peter",
                lastName: "Edwards",
                email: "user45@example.com",
                password: "password45",
            },
            {
                firstName: "Quincy",
                lastName: "Collins",
                email: "user46@example.com",
                password: "password46",
            },
            {
                firstName: "Rebecca",
                lastName: "Stewart",
                email: "user47@example.com",
                password: "password47",
            },
            {
                firstName: "Samuel",
                lastName: "Sanchez",
                email: "user48@example.com",
                password: "password48",
            },
            {
                firstName: "Teresa",
                lastName: "Morris",
                email: "user49@example.com",
                password: "password49",
            },
            {
                firstName: "Victor",
                lastName: "Hall",
                email: "user50@example.com",
                password: "password50",
            },
        ];
        for (let i = 0; i < usersData.length; i++) {
            const userData = usersData[i];
            const user = new User_1.User();
            user.firstName = userData.firstName;
            user.lastName = userData.lastName;
            user.email = userData.email;
            user.password = bcrypt.hashSync(userData.password, 10);
            user.roleId = userData.roleId || 3;
            yield user.save();
        }
        console.log("Users have been created");
    }
    catch (error) {
        console.log("Error userSeeder:", error.message);
    }
    finally {
        yield db_1.AppDataSource.destroy();
    }
});
exports.userSeeder = userSeeder;

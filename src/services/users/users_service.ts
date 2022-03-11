import { Request } from "express";
import { userValidator } from "../../validation/validate_users";
import Knex from 'knex';
import dotenv from "dotenv";
dotenv.config();

const config = require("../../../knexfile.js");
const environment = process.env.NODE_ENV!;
const database = Knex(config[environment]);

export class UsersService {
    public static validateRegistration(req: Request) {
        const validation = userValidator.validate(req.body);
        const { value, error } = validation;
        let failedValidation;
        error ? (failedValidation = error.message) : (failedValidation = null);
        return failedValidation;
    }

    public static async createUserRecord(req: Request) {
        let { 
            first_name,
            surname,
            password,
            email,
            address,
            phone_number,
            date_of_birth,
            secret_question,
            secret_answer

        } = req.body;
        phone_number = phone_number.toString();

        const user = {
            first_name,
            surname,
            password,
            email,
            address,
            phone_number,
            date_of_birth,
            secret_question,
            secret_answer
        }

        const savedUser = database.insert(user).into('users');
        return savedUser;

    }


}

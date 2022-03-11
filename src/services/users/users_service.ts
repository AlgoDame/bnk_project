import { Request } from "express";
import { userValidator } from "../../validation/validate_users";
import Knex from 'knex';
import dotenv from "dotenv";
import bcrypt from "bcrypt";

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
        const password_hash = await this.hashPassword(password);

        const user = {
            first_name,
            surname,
            password,
            password_hash,
            email,
            address,
            phone_number,
            date_of_birth,
            secret_question,
            secret_answer
        }

        const savedUser = await database.insert(user).into('users');
        const accountNumber = await this.fetchAccountNumber(req.body.email);
        return accountNumber;

    }

    private static async hashPassword(password: string) {
        const hashed = await bcrypt.hash(password, 10);
        return hashed;
    }

    public static async checkUserExistence(req: Request) {
        let email = req.body.email;
        let exists = await database('users').where('email', email);
        return exists;
    }

    private static async fetchAccountNumber(email: string) {
        let user = await database('users').where('email', email);
        let accountNumber = user[0].user_id;
        return { accountNumber };

    }


}

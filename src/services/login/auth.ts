import { Request, Response } from "express";
import { loginValidator } from "../../validation/validate_login";
import Knex from 'knex';
import dotenv from "dotenv";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { BaseService } from "../baseService";

dotenv.config();

const config = require("../../../knexfile.js");
const environment = process.env.NODE_ENV!;
const database = Knex(config[environment]);

export class LoginService extends BaseService {
    private req: Request;
    private res: Response;
    private EMAIL_NOT_FOUND_MSG: string = "Email not found. Please register";
    private INVALID_CREDS_MSG: string = "Invalid email or password";

    constructor(req: Request, res: Response) {
        super();
        this.req = req;
        this.res = res;
    }

    private validateLogin() {
        const validation = loginValidator.validate(this.req.body);
        const { value, error } = validation;
        let failedValidation;
        error ? (failedValidation = error.message) : (failedValidation = null);
        return failedValidation;
    }

    public async authenticate() {
        let failedValidation = this.validateLogin();
        if (failedValidation) return this.sendError(this.req, this.res, 400, failedValidation);

        const { email, password } = this.req.body;
        const user = await database('users').where('email', email);

        if (!user.length) return this.sendError(this.req, this.res, 404, this.EMAIL_NOT_FOUND_MSG);

        const passwordHash = user[0].password_hash;
        const match = await bcrypt.compare(password, passwordHash);

        if (!match) return this.sendError(this.req, this.res, 401, this.INVALID_CREDS_MSG);

        const secret = process.env.ACCESS_TOKEN_SECRET;
        const token = jwt.sign({ email, password }, secret, {
            expiresIn: 86400 // expires in 24 hours
        });

        const loginResponse = {
            email,
            token
        }

        return this.sendResponse(this.req, this.res, 200, loginResponse);


    }

}

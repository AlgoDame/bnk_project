import { Request, Response } from "express";
import { BaseService } from "../baseService";
import { UsersService } from "./users_service";

export class UserHandler extends BaseService {
    public async create(req: Request, res: Response) {
        try {
            let failedValidation = UsersService.validateRegistration(req);
            if (failedValidation) return this.sendError(req, res, 400, failedValidation);

            let savedUser = await UsersService.createUserRecord(req);
            return this.sendResponse(req, res, 201, savedUser);

        } catch (error) {
            console.error(`Error occurred in userHandler::: ${error}`);
            return this.sendError(req, res, 500, error);
        }
    }

    
}

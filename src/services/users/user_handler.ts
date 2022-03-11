import { Request, Response } from "express";
import { BaseService } from "../baseService";
import { UsersService } from "./users_service";

export class UserHandler extends BaseService {
    private USER_EXIST_MSG: string = "User already exists";

    public async create(req: Request, res: Response) {
        try {
            let failedValidation = UsersService.validateRegistration(req);

            if (failedValidation) return this.sendError(req, res, 400, failedValidation);

            let userExists = await UsersService.checkUserExistence(req);

            console.log("user::: ", userExists)

            if (userExists.length) return this.sendError(req, res, 412, this.USER_EXIST_MSG)

            let savedUser = await UsersService.createUserRecord(req);
            return this.sendResponse(req, res, 201, savedUser);

        } catch (error) {
            console.error(`Error occurred in userHandler::: ${error}`);
            return this.sendError(req, res, 500, error);
        }
    }


}

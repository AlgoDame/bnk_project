import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();


export class AuthController {
    protected authorized(req: Request, res: Response, next: NextFunction): boolean {
        let token:string | null = null;
        const secret = process.env.ACCESS_TOKEN_SECRET;

        if(req.headers && req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer'){
            token = req.headers.authorization.split(' ')[1];
        }

        if (token === null) {
            console.log('cant find header');
            return false;
        }

        try {
            const user = verify(token, secret);
            return true;

        } catch (error:any) {
            console.error(`Authorization error: ${error.message}`);
            return false;
        }

    }


}


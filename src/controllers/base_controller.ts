import { Request, Response, NextFunction, Router } from "express";
import { UserHandler } from "../services/users/user_handler";
import { LoginService } from "../services/login/auth";
import { AuthController } from "./auth_controller";
export class BaseController extends AuthController {
    /**
     * Create the routes.
     *
     * @method loadRoutes
     */
    public loadRoutes(prefix: string, router: Router) {
        this.registerUser(prefix, router);
        this.initLoginUser(prefix, router);

    }

    protected authorize(req: Request, res: Response, next: NextFunction) {
        if (!this.authorized(req, res, next)) {
            return res.status(401).json({ message: "You are not authorized to access this resource" })
        } else {
            next();
        }

    }

    private registerUser(prefix: string, router: Router): any {
        router.post(prefix + "/register", async (req: Request, res: Response) => {
            new UserHandler().create(req, res);
        });
    }

    private initLoginUser(prefix: string, router: Router): any {
        router.post(prefix + "/login", async (req: Request, res: Response) => {
            new LoginService(req, res).authenticate();
        });
    }

}

// import { Request, Response } from "express";
// import { BaseService } from "../baseService";
// import { CharacterService } from "./character_service";

// export class CharacterHandler extends BaseService {
//     public async fetch(req: Request, res: Response) {
//         try {
//             let failedValidation = CharacterService.validateQuery(req);
//             if (failedValidation)
//                 return this.sendError(req, res, 400, failedValidation);

//             let characterData = CharacterService.fetchCharacterData(req, res);
//             return this.sendResponse(req, res, 200, characterData);
//         } catch (error) {
//             console.error(`Error occurred in characterHandler::: ${error}`);
//             return this.sendError(req, res, 500, error);
//         }
//     }
// }

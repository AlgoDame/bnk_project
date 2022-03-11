// import { Request, Response } from "express";
// import { BaseService } from "../baseService";
// import { CommentService } from "./comment_service";

// export class CommentHandler extends BaseService {
//     public async create(req: Request, res: Response) {
//         try {
//             let failedValidation = CommentService.validateComment(req);
//             if (failedValidation)
//                 return this.sendError(req, res, 400, failedValidation);

//             let inEpisodeId = CommentService.validateEpisodeId(req);
//             if (inEpisodeId) return this.sendError(req, res, 400, inEpisodeId);

//             let comments = await CommentService.processComments(req);
//             return this.sendResponse(req, res, 201, comments);
//         } catch (error) {
//             console.error(`Error occurred in commentHandler::: ${error}`);
//             return this.sendError(req, res, 500, error);
//         }
//     }

//     public async listComments(req: Request, res: Response) {
//         try {
//             const commentList = await CommentService.fetchComments();
//             return this.sendResponse(req, res, 200, commentList);
//         } catch (error) {
//             console.error(`Error occurred in commentHandler::: ${error}`);
//             return this.sendError(req, res, 500, error);
//         }
//     }
// }

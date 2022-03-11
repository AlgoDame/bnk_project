// import { Request } from "express";
// import { commentValidator } from "../../validation/validate_comment";
// import { PrismaClient } from "@prisma/client";
// const prisma = new PrismaClient();

// export class CommentService {
//     public static validateComment(req: Request) {
//         const validation = commentValidator.validate(req.body);
//         const { value, error } = validation;
//         let failedValidation;
//         error ? (failedValidation = error.message) : (failedValidation = null);
//         return failedValidation;
//     }

//     public static validateEpisodeId(req: Request) {
//         let validEpisodeIdList = [1, 2, 3, 4, 5, 6];
//         let episodeId = +req.params.episode_id;

//         let isValid = validEpisodeIdList.includes(episodeId);

//         if (isValid) {
//             return null;
//         } else {
//             return {
//                 message: `Invalid episode id. See list for valid episode ids: ${validEpisodeIdList}`
//             };
//         }
//     }

//     public static async processComments(req: Request) {
//         let { comment } = req.body;
//         let episodeId = +req.params.episode_id;
//         let requester = req.ip;

//         let createdComment = await this.addCommentToDB(
//             comment,
//             episodeId,
//             requester
//         );
//         console.log("created comment::: ", createdComment);
//         return createdComment;
//     }

//     private static async addCommentToDB(
//         comment: string,
//         episodeId: number,
//         ipAddress: string
//     ) {
//         const createdComment = await prisma.commentModel.create({
//             data: {
//                 comment: comment,
//                 episode_id: episodeId,
//                 author: ipAddress
//             }
//         });

//         return createdComment;
//     }

//     public static async fetchComments() {
//         const commentList = await prisma.commentModel.findMany();

//         let reverseOrderedCommentList = commentList.sort((a, b) => {
//             let dateA: any = new Date(a.createdAt);
//             let dateB: any = new Date(b.createdAt);

//             return dateB - dateA;
//         });

//         return reverseOrderedCommentList;
//     }
// }

// import { Request, Response, Router } from "express";
// import { CommentHandler } from "../services/comments/comment_handler";
// import { MovieHandler } from "../services/movies/movies_handler";
// import { CharacterHandler } from "../services/characters/character_handler";
// export class BaseController {
//     /**
//      * Create the routes.
//      *
//      * @method loadRoutes
//      */
//     public loadRoutes(prefix: string, router: Router) {
//         this.addComments(prefix, router);
//         this.listComments(prefix, router);
//         this.fetchMovies(prefix, router);
//         this.fetchCharacters(prefix, router);
//     }

//     private addComments(prefix: string, router: Router): any {
//         router.post(
//             prefix + "/:episode_id/comment",
//             async (req: Request, res: Response) => {
//                 new CommentHandler().create(req, res);
//             }
//         );
//     }

//     private listComments(prefix: string, router: Router) {
//         router.get(
//             prefix + "/comments",
//             async (req: Request, res: Response) => {
//                 new CommentHandler().listComments(req, res);
//             }
//         );
//     }

//     private fetchMovies(prefix: string, router: Router) {
//         router.get(prefix + "/list", async (req: Request, res: Response) => {
//             await new MovieHandler().fetchMovies(req, res);
//         });
//     }

//     private fetchCharacters(prefix: string, router: Router) {
//         router.get(
//             prefix + "/characters",
//             async (req: Request, res: Response) => {
//                 await new CharacterHandler().fetch(req, res);
//             }
//         );
//     }
// }

// import { Request, Response } from "express";
// import { BaseService } from "../baseService";
// import { MoviesService } from "./movies_service";

// export class MovieHandler extends BaseService {
//     public async fetchMovies(req: Request, res: Response) {
//         try {
//             let moviesList = await new MoviesService().sendMovieList();
//             return this.sendResponse(req, res, 200, moviesList);
//         } catch (error) {
//             console.error(`Error occurred in MovieHandler::: ${error}`);
//             return this.sendError(req, res, 500, error);
//         }
//     }
// }

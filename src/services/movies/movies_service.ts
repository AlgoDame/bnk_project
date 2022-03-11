// import { Request } from "express";
// import { PrismaClient } from "@prisma/client";
// import axios from "axios";
// const prisma = new PrismaClient();

// export class MoviesService {
//     private async fetchSwapiMovies() {
//         let serverResponse = await axios({
//             method: "GET",
//             url: "https://swapi.dev/api/films"
//         });

//         let results: Record<string, any>[] = serverResponse.data.results;

//         let movies = results.map((item) => {
//             let obj = {
//                 title: item.title,
//                 release_date: item.release_date,
//                 episode_id: item.episode_id,
//                 opening_crawl: item.opening_crawl
//             };
//             return obj;
//         });

//         return movies;
//     }

//     private async fetchCommentCount() {
//         let movies = await this.fetchSwapiMovies();

//         let moviesWithCount: any[] = [];

//         for (const movie of movies) {
//             let count = await prisma.commentModel.count({
//                 where: {
//                     episode_id: movie.episode_id
//                 }
//             });

//             let object = {
//                 title: movie.title,
//                 release_date: movie.release_date,
//                 episode_id: movie.episode_id,
//                 opening_crawl: movie.opening_crawl,
//                 comment_count: count
//             };

//             moviesWithCount.push(object);
//         }

//         return moviesWithCount;
//     }

//     public async sendMovieList() {
//         let movieList = await this.fetchCommentCount();

//         let orderedList = movieList.sort((a, b) => {
//             let dateA: any = new Date(a.release_date);
//             let dateB: any = new Date(b.release_date);

//             return dateA - dateB;
//         });

//         return orderedList;
//     }
// }

// import { Request, Response } from "express";
// import axios from "axios";
// import { characterValidator } from "../../validation/validate_character_query";
// import { characters } from "../../swapi_data/characters";

// //name, gender or height

// export class CharacterService {
//     public static fetchCharacterData(req: Request, res: Response) {
//         console.log("req params:: ", req.query);

//         let { gender, order, sort } = this.extractQueryParams(req);
//         let characterList = characters.results;
//         let genderList = this.filterByGender(characterList, gender);

//         if (genderList.length) {
//             let sortedList = this.sortCharacters(genderList, sort, order)!;
//             let responsePayload = this.prepareMetaData(sortedList);
//             return responsePayload;
//         }

//         let responsePayload = this.prepareMetaData(genderList);
//         return responsePayload;
//     }

//     public static validateQuery(req: Request) {
//         const validation = characterValidator.validate(req.query);
//         const { value, error } = validation;
//         let failedValidation;
//         error ? (failedValidation = error.message) : (failedValidation = null);
//         return failedValidation;
//     }

//     public static extractQueryParams(req: Request) {
//         let { sort, order, gender } = req.query;

//         return {
//             order,
//             gender,
//             sort
//         };
//     }

//     private static sortCharacters(
//         characterList: Record<string, any>[],
//         sortParam: any,
//         order: any
//     ) {
//         if (order == "asc") {
//             let ascOrderedList = characterList.sort((a, b) => {
//                 return a[sortParam].localeCompare(b[sortParam]);
//             });
//             return ascOrderedList;
//         }

//         if (order == "desc") {
//             let descOrderedList = characterList.sort((a, b) => {
//                 return b[sortParam].localeCompare(b[sortParam]);
//             });
//             return descOrderedList;
//         }
//     }

//     private static filterByGender(
//         characterList: Record<string, any>[],
//         gender: any
//     ) {
//         let genderList: Record<string, any>[] = [];

//         characterList.forEach((character) => {
//             if (character.gender == gender.toLowerCase()) {
//                 genderList.push(character);
//             }
//         });

//         return genderList;
//     }

//     private static prepareMetaData(characterList: any[]) {
//         if (!characterList.length) {
//             let resposnePayload = {
//                 metadata: {
//                     count: 0,
//                     totalHeight: {
//                         centimeters: 0,
//                         inches: 0,
//                         feet: 0
//                     }
//                 },
//                 characters: []
//             };
//             return resposnePayload;
//         }

//         let totalHeight = this.sumHeight(characterList);

//         let resposnePayload = {
//             metadata: {
//                 count: characterList.length,
//                 totalHeight,
//                 characters: characterList
//             }
//         };

//         return resposnePayload;
//     }

//     private static sumHeight(characterList: Record<string, any>[]) {
//         let sum = 0;
//         characterList.forEach((item) => {
//             let height = +item.height;
//             sum += height;
//         });

//         let heightInFeet = (sum / 30.48).toFixed(2);
//         let heighInInches = (sum / 2.54).toFixed(2);

//         let totalHeight = {
//             cm: sum,
//             feet: heightInFeet,
//             inches: heighInInches
//         };

//         return totalHeight;
//     }
// }

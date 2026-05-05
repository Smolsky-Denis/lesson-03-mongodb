import {ObjectId} from "mongodb";

export type BlogViewModel = {
    "id": string,
    "name": string,
    "description": string,
    "websiteUrl": string,
    "createdAt": Date,
    "isMembership": boolean
}

export type BlogCreateUpdateDTO = Pick<
    BlogViewModel, 'name' | 'description' | 'websiteUrl'
>

export type BlogDBModel = {
    "name": string,
    "description": string,
    "websiteUrl": string,
    "createdAt": Date,
    "isMembership": boolean
}
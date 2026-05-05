import {BlogCreateUpdateDTO, BlogDBModel, BlogViewModel} from "../types/blogs-types";
import {blogsCollection} from "../../db/mongo.db";
import {ObjectId, WithId} from "mongodb";

export const blogRepository = {
    async findAll(): Promise<WithId<BlogDBModel>[]> {
        return blogsCollection.find().toArray()
    },

    async createBlog(newBlog: BlogDBModel): Promise<WithId<BlogDBModel>> {
        const insertResult = await blogsCollection.insertOne(newBlog);
        return {... newBlog, _id: insertResult.insertedId}
    },

    async findById(id: string): Promise<WithId<BlogDBModel> | null> {
        return await blogsCollection.findOne({_id: new ObjectId(id)})
    },

    async updateBlog() {}
}
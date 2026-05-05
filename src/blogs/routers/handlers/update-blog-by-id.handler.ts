import {Request, Response} from 'express';
import {BlogCreateUpdateDTO} from "../../types/blogs-types";
import {blogRepository} from "../../repositories/blogs.repository";
import {HttpStatus} from "../../../core/types/http-statuses";

export const updateBlogById = async (req: Request<{id: string}, {}, BlogCreateUpdateDTO>, res: Response) => {
    const id: string = req.params.id

    const blogById = await blogRepository.findById(id)

    if (!blogById) {
        res.status(HttpStatus.NotFound).send("No blog with this id");
        return
    }


}
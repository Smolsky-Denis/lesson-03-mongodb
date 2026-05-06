import {Request, Response} from 'express';
import {blogRepository} from "../../repositories/blogs.repository";
import {HttpStatus} from "../../../core/types/http-statuses";
import {mapToBlogViewModel} from "../mapers/map-to-blog-view-mode.util";

export const getBlogById = async (req: Request<{id: string}>, res: Response) => {
    // try {
        const id: string = req.params.id;
        const blogById = await blogRepository.findById(id)

    if (!blogById) {
        throw new Error('Blog not found');
    }
        res.status(HttpStatus.Ok).send(mapToBlogViewModel(blogById))

    // }  catch (e) {
    //     res.sendStatus(HttpStatus.InternalServerError);
    // }

}
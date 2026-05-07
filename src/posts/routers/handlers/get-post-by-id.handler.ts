import {Request, Response} from 'express';
import {HttpStatus} from "../../../core/types/http-statuses";
import {mapToPostViewModel} from "../mapers/map-to-post-view-mode.util";
import {postRepository} from "../../repositories/posts.repository";

export const getPostById = async (req: Request<{id: string}>, res: Response) => {
    // try {
        const id: string = req.params.id;
        const blogById = await postRepository.findById(id)
        debugger
    if (!blogById) {
        throw new Error('Blog not found');
    }
        res.status(HttpStatus.Ok).send(mapToPostViewModel(blogById))

    // }  catch (e) {
    //     res.sendStatus(HttpStatus.InternalServerError);
    // }

}
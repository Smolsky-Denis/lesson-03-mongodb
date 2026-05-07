import {Request, Response} from 'express';
import {PostCreateUpdateDTO} from "../../types/posts-types";
import {postRepository} from "../../repositories/posts.repository";
import {HttpStatus} from "../../../core/types/http-statuses";
import {createErrorMessages} from "../../../core/middlewares/validation/input-validation-result.middleware";

export const updatePostById = async (req: Request<{id: string}, {}, PostCreateUpdateDTO>, res: Response) => {
    try {
        const id: string = req.params.id
        const postById = await postRepository.findById(id)

        if (!postById) {
            res.status(HttpStatus.NotFound).send(createErrorMessages(
                [
                    {
                        field: id, message: `No post with id ${id} found.`
                    }
                ]
            )
        );
            return;
        }

        await postRepository.updatePost(id, req.body)
        res.sendStatus(HttpStatus.NoContent);

    } catch (e: unknown){
        res.sendStatus(HttpStatus.InternalServerError);
    }
}
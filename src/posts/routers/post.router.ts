import {Router} from "express";
import {getPostList} from "./handlers/get-post-list.handler";
import {createNewPost} from "./handlers/create-new-post.handler";
import {updatePostById} from "./handlers/update-post-by-id.handler";
import {getPostById} from "./handlers/get-post-by-id.handler";
import {deletePostById} from "./handlers/delete-post-by-id.handler";


export const postsRouter = Router();

postsRouter
    .get('', getPostList)
    .post('', createNewPost)
    .put("/:id", updatePostById)
    .get('/:id', getPostById)
    .delete('/:id', deletePostById)
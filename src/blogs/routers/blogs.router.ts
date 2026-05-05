import {Router} from "express";
import {getBlogList} from "./handlers/get-blog-list.handler";
import {createNewBlog} from "./handlers/create-new-blog.handler";
import {updateBlogById} from "./handlers/update-blog-by-id.handler";


export const blogsRouter = Router();

blogsRouter
    .get('', getBlogList)
    .post('', createNewBlog)
    .put("/:id", updateBlogById)
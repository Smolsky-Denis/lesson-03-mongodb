import express, { Express } from 'express';
import {PATHS} from "./core/paths/paths";
import {blogsRouter} from "./blogs/routers/blogs.router";

export const setupApp = (app: Express) => {
    app.use(express.json());

    app.use(PATHS.BLOGS_PATH, blogsRouter);
    return app;
}
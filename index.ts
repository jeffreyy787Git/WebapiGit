import Koa from "koa";
import Router, {RouterContext} from "koa-router";
import logger from "koa-logger";
import json from "koa-json";
import {router as articles} from "./routes/articles";
import {router as special} from "./routes/special";

const app: Koa = new Koa();
const router: Router = new Router();
const welcomeAPI = async (ctx: RouterContext, next: any) => {
 ctx.body = {
 message: "Welcome to the blog API!"
 };
 await next();
}
router.get('/api/v1', welcomeAPI);
app.use(logger());
app.use(json());
app.use(router.routes());
app.use(articles.routes());
app.use(special.routes());
console.log("Kao started");
app.listen(10888);
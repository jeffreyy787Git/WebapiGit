import Koa from "koa";
import Router, {RouterContext} from "koa-router";
import logger from "koa-logger";
import json from "koa-json";
<<<<<<< HEAD
import serve from 'koa-static';
import cors from '@koa/cors';
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
app.use(serve('./docs'));
app.use(router.routes());
app.use(articles.routes());
app.use(special.routes());
app.use(cors());
console.log("Kao started");
app.listen(10888);
=======
import bodyParser from "koa-bodyparser";
import { CustomErrorMessageFunction, query, body, validationResults } from "koa-req-validation";

const app: Koa = new Koa();
const router: Router = new Router();
const films = [
    {title: "sample", description: "sample discription"}
];
const customErrorMessage: CustomErrorMessageFunction = (
    _ctx: RouterContext,
    value: string
   ) => {
    return (
    `The name must be between 3 and 20 ` +
    `characters long but received length ${value.length}`
    );
   };
const validatorName = [
    body("title").isLength({ min: 3}).withMessage(customErrorMessage).build(),
    body("description").isLength({ min: 3}).build()
]
router.get('/', async (ctx:RouterContext, next: any) => {
    ctx.body = { msg: "abc"};
    await next();
})

router.post('/', ...validatorName, async (ctx: RouterContext, next: any) => {

})

router.get('/films', async (ctx: RouterContext, next: any) => {
 ctx.body = films;
 await next();
})

router.post('/films', async (ctx: RouterContext, next: any) => {
    let data: any = ctx.request.body;
    let title = data.title;
    let description = data.description;
    let film = {title: title, description: description};
    films.push(film);
    ctx.status = 201;
    ctx.body = film;
    await next();
   })

app.use(json());
app.use(logger());
app.use(bodyParser());
app.use(router.routes()).use(router.allowedMethods());
app.use(async (ctx: RouterContext, next: any) => {
    try{
        await next;
        if (ctx.status === 404){
            ctx.status = 404;
            ctx.body = {err : "Endpoint not found"};
        }
    } catch (err: any) {
        ctx.body = {err:err};
    }
})
app.listen(10888, () => {
 console.log("Koa Started");
})
>>>>>>> 03095d00d17800a0005301e4557c9759f96262e0

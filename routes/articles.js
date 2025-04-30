"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
var koa_router_1 = require("koa-router");
var koa_bodyparser_1 = require("koa-bodyparser");
var model = require("../models/articles");
var validation_1 = require("../controllers/validation");
var auth_1 = require("../controllers/auth");
// Since we are handling articles use a URI that begins with an appropriate path
var router = new koa_router_1.default({ prefix: '/api/v1/articles' });
exports.router = router;
// Temporarily define some random articles in an array.
// Later this will come from the DB.
var articles = [
    { title: 'hello article', fullText: 'some text here to fill the body' },
    { title: 'another article', fullText: 'again here is some text here to fill' },
    { title: 'coventry university ', fullText: 'some news about coventry university' },
    { title: 'smart campus', fullText: 'smart campus is coming to IVE' }
];
// Now we define the handler functions
var getAll = function (ctx, next) { return __awaiter(void 0, void 0, void 0, function () {
    var articles;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, model.getAll()];
            case 1:
                articles = _a.sent();
                if (articles.length) {
                    ctx.body = articles;
                }
                else {
                    ctx.body = {};
                }
                return [4 /*yield*/, next()];
            case 2:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); };
var getById = function (ctx, next) { return __awaiter(void 0, void 0, void 0, function () {
    var id, article;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                id = +ctx.params.id;
                return [4 /*yield*/, model.getById(id)];
            case 1:
                article = _a.sent();
                if (article.length) {
                    ctx.body = article;
                }
                else {
                    ctx.body = {};
                }
                return [4 /*yield*/, next()];
            case 2:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); };
var createArticle = function (ctx, next) { return __awaiter(void 0, void 0, void 0, function () {
    var updateArticle, article;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                updateArticle = ctx.request.body;
                return [4 /*yield*/, model.add(updateArticle)];
            case 1:
                article = _a.sent();
                // Finally send back appropriate JSON and status code.
                // Once we move to a DB store, the newArticle sent back will now have its ID.
                ctx.status = 201;
                ctx.body = article;
                return [4 /*yield*/, next()];
            case 2:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); };
var updateArticle = function (ctx, next) { return __awaiter(void 0, void 0, void 0, function () {
    var id, updateArticle, article, err_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                id = +ctx.params.id;
                updateArticle = ctx.request.body;
                console.log("updateArticle : ", updateArticle);
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, model.update(updateArticle, id)];
            case 2:
                article = _a.sent();
                ctx.status = 200;
                ctx.body = article;
                return [3 /*break*/, 4];
            case 3:
                err_1 = _a.sent();
                ctx.status = 404;
                return [3 /*break*/, 4];
            case 4: return [4 /*yield*/, next()];
            case 5:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); };
var deleteArticle = function (ctx, next) { return __awaiter(void 0, void 0, void 0, function () {
    var id, article, err_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                id = +ctx.params.id;
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, model.del(id)];
            case 2:
                article = _a.sent();
                ctx.body = article;
                return [3 /*break*/, 4];
            case 3:
                err_2 = _a.sent();
                ctx.status = 404;
                return [3 /*break*/, 4];
            case 4: return [4 /*yield*/, next()];
            case 5:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); };
/* Routes are needed to connect path endpoints to handler functions.
When an Article id needs to be matched we use a pattern to match
a named route parameter. Here the name of the parameter will be 'id'
and we will define the pattern to match at least 1 numeral. */
router.get('/', getAll);
router.post('/', auth_1.basicAuth, (0, koa_bodyparser_1.default)(), validation_1.validateArticle, createArticle);
router.get('/:id([0-9]{1,})', getById);
router.put('/:id([0-9]{1,})', auth_1.basicAuth, (0, koa_bodyparser_1.default)(), validation_1.validateArticle, updateArticle);
router.del('/:id([0-9]{1,})', deleteArticle);

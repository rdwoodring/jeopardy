"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const body_parser_1 = __importDefault(require("body-parser"));
const morgan_1 = __importDefault(require("morgan"));
const index_1 = __importDefault(require("./routes/index"));
const rounds_1 = __importDefault(require("./routes/api/v1/rounds"));
const categories_1 = __importDefault(require("./routes/api/v1/categories"));
const questions_1 = __importDefault(require("./routes/api/v1/questions"));
// var indexRouter = require('./routes/index');
const app = express_1.default();
app.use(morgan_1.default('dev'));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
app.use(cookie_parser_1.default());
app.use(body_parser_1.default.json());
app.use(express_1.default.static(path_1.default.join(__dirname, '../public')));
app.use('/', index_1.default);
app.use(rounds_1.default);
app.use(categories_1.default);
app.use(questions_1.default);
exports.default = app;
//# sourceMappingURL=app.js.map
import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import logger from 'morgan'

import router from './routes/index';
import roundsRouter from './routes/api/v1/rounds';
import categoriesRouter from './routes/api/v1/categories';
import questionsRouter from './routes/api/v1/questions';

// var indexRouter = require('./routes/index');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../public')));

app.use('/', router);
app.use(roundsRouter);
app.use(categoriesRouter);
app.use(questionsRouter);

export default app;

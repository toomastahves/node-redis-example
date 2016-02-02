import express from 'express';
import favicon from 'serve-favicon';
import { applyMiddleware } from './applyMiddleware';
import routes from '../routes/main';

const app = express();

applyMiddleware(app);

routes(app);

app.use(express.static('public'));
app.use(favicon('public/favicon.ico'));

export default app;

import express from 'express';
import { applyMiddleware } from './applyMiddleware';
import routes from '../routes/hobbies';

const app = express();

applyMiddleware(app);

routes(app);

export default app;

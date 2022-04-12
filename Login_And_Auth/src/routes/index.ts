import { Router } from 'express';
import auth from './auth';
import user from './user';
import hopper from "./hopper";
import proceso from "./process";

const routes = Router();

routes.use('/auth', auth);
routes.use('/process', proceso)
routes.use('/users', user);
routes.use('/hopper', hopper)

export default routes;

import { Router } from 'express';
import auth from './auth';
import user from './user';
import hopper from "./hopper";
import proceso from "./process";
import product from "./product";
import production from "./production";

const routes = Router();

routes.use('/auth', auth);
routes.use('/process', proceso)
routes.use('/product', product)
routes.use('/production', production)
routes.use('/users', user);
routes.use('/hopper', hopper)

export default routes;

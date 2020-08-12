import { Router } from 'express';

import UserController from '../controllers/UserController';
import SessionController from '../controllers/SessionController';

const routes = Router();

const userController = new UserController();
const sessionController = new SessionController();

routes.post('/users', userController.store);
routes.post('/sessions', sessionController.store);

export default routes;
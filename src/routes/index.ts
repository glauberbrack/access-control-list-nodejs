import { Router } from 'express';

import UserController from '../controllers/UserController';
import SessionController from '../controllers/SessionController';
import PermissionController from '../controllers/PermissionController';

const routes = Router();

const userController = new UserController();
const sessionController = new SessionController();
const permissionController = new PermissionController();

// USERS
routes.post('/users', userController.store);

// AUTHENTICATION
routes.post('/sessions', sessionController.store);

// PERMISSIONS
routes.post('/permissions', permissionController.store);

export default routes;
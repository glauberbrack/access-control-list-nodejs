import { Router } from 'express';

import UserController from '../controllers/UserController';
import SessionController from '../controllers/SessionController';
import PermissionController from '../controllers/PermissionController';
import RoleController from '../controllers/RoleController';

const routes = Router();

const userController = new UserController();
const sessionController = new SessionController();
const permissionController = new PermissionController();
const roleController = new RoleController();

// USERS
routes.post('/users', userController.store);

// AUTHENTICATION
routes.post('/sessions', sessionController.store);

// PERMISSIONS
routes.post('/permissions', permissionController.store);

// ROLES
routes.post('/roles', roleController.store);

export default routes;
import { Router } from 'express';

import { is } from '../middlewares/permission';

import UserController from '../controllers/UserController';
import SessionController from '../controllers/SessionController';
import PermissionController from '../controllers/PermissionController';
import RoleController from '../controllers/RoleController';
import ProductController from '../controllers/ProductController';

const routes = Router();

const userController = new UserController();
const sessionController = new SessionController();
const productController = new ProductController();
const permissionController = new PermissionController();
const roleController = new RoleController();

// USERS
routes.post('/users', userController.store);

// AUTHENTICATION
routes.post('/sessions', sessionController.store);

// PRODUCTS
routes.get('/products', productController.index);
routes.post('/products', is(['admin']), productController.store);
routes.get('/products/:id', is(['admin']), productController.show);

// PERMISSIONS
routes.post('/permissions', permissionController.store);

// ROLES
routes.post('/roles', roleController.store);

export default routes;
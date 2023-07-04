import express from 'express';
import {ProtectedRoutesNotfound, AboutView, AdminView, BlogView, HomeView, LoginView, LoginHandler, NotFound, LogoutHandler, getPostingan, addPostingan, contentView } from '../controllers/index.js';
import { middlewareAdmin, middlewareUpload } from '../middleware/index.js';

const router = express.Router();

router.get('/',HomeView);
router.get('/about',AboutView);
router.get('/blog',BlogView);
router.get('/blog/:slug',contentView);

// admin

router.get('/login',LoginView);
router.post('/login',LoginHandler);
router.get('/admin',middlewareAdmin,AdminView);
router.post('/admin',middlewareAdmin,middlewareUpload.single('image'),addPostingan);
router.get('/postingan',getPostingan);
router.get('/logout',LogoutHandler);

// error page 

router.all('/notfound',NotFound);
router.all('*',ProtectedRoutesNotfound);

export default router;
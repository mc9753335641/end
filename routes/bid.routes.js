import express from 'express';
import * as controller from '../controller/bid.controller.js';
const router = express.Router();
router.post("/save",controller.save)
router.post("/login",controller.login)
router.delete("/delete",controller.deleteUser)
router. get("/fetch",controller.fetch)
router. patch("/update",controller.updateUser)
export default router;
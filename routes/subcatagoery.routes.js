 import express from 'express';
 import * as controller from '../controller/subcatageroy.controller.js';
 const router = express.Router();
 router.post("/save",controller.save)
 router.post("/login",controller.login)
 router.delete("/delete",controller.userdelete)
 router. get("/fetch",controller.fetch)
 router. patch("/update",controller.userupdate)
export default router;
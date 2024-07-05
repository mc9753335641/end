import express from 'express';
const router = express.Router();

//to link controller
 import * as shipmentController from '../controller/shipmentcontroller.js'

router.post("/save",shipmentController.save);

router.get("/fetch",shipmentController.fetch);

router.delete("/delete",shipmentController.userdelete);

router.patch("/update",shipmentController.userupdate);

export default router;
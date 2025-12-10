import express from "express";
import { getPaymentAccount } from "../controller/payment.controller.js";

import { isLoggedIn } from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/getPaymentDeatils", isLoggedIn, getPaymentAccount);


export default router;

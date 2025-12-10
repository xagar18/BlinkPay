import express from "express";
import {
  getOtherUserPaymentAccount,
  getPaymentAccount,
  moneyHandler,
} from "../controller/payment.controller.js";

import { isLoggedIn } from "../middleware/auth.middleware.js";

const router = express.Router();

router.get("/getPaymentDeatils/:email", isLoggedIn, getPaymentAccount);
router.post("/moneyHandler/:senderEmail", isLoggedIn, moneyHandler);
router.get(
  "/getOtherUser/:email",
  isLoggedIn,
  getOtherUserPaymentAccount
);

export default router;

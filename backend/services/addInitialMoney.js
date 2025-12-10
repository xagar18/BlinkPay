import { Payment } from '../model/User.model.js';

const addInitialMoney = async (email, amount) => {
  try {
    const newPaymentAccount = Payment.create({
      email,
      balance: amount,
    })
    if(!newPaymentAccount){
      console.log("Payment account not created");
      return;
    }
    console.log("Initial money added successfully");

  } catch (error) {
    console.log("Error adding initial money:", error);
  }

};
export default addInitialMoney;

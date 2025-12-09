import { Payment } from '../model/User.model';

const addInitialMoney = async (email, amount) => {
  try {
    const paymentAccount = await Payment.findOne({ email });
    if (paymentAccount) {
      paymentAccount.balance = (
        parseFloat(paymentAccount.balance) + parseFloat(amount)
      ).toString();
      await paymentAccount.save();
    } else {
      const newPaymentAccount = new Payment({
        email,
        balance: amount.toString(),
      });
      await newPaymentAccount.save();
    }
    console.log(`Initial money of ${amount} added to ${email}`);
    
  } catch (error) {
    console.log("Error adding initial money:", error);
  }

};
export default addInitialMoney;

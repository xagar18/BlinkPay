import User, { Payment } from "../model/User.model.js";

const getPaymentAccount = async (req, res) => {
  try {
    const { email } = req.params;

    const payData = await Payment.findOne({ email });

    if (!payData) {
      return res.status(404).json({
        message: "Payment account not found",
      });
    }

    res.status(200).json({
      message: "Payment account fetched successfully",
      payData,
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
    });
  }
};

const moneyHandler = async (req, res) => {
  try {
    const { senderEmail } = req.params;
    const { toEmail, amount } = req.body;

    const receiverAccount = await Payment.findOne({ email: toEmail });
    const senderAccount = await Payment.findOne({ email: senderEmail });

    if (!receiverAccount || !senderAccount) {
      return res.status(404).json({
        message: "Sender or receiver account not found",
      });
    }

    if (parseFloat(senderAccount.balance) < parseFloat(amount)) {
      return res.status(400).json({
        message: "Insufficient balance",
      });
    }

    // Deduct amount from sender
    senderAccount.balance = (
      parseFloat(senderAccount.balance) - parseFloat(amount)
    ).toString();
    await senderAccount.save();

    // Add amount to receiver
    receiverAccount.balance = (
      parseFloat(receiverAccount.balance) + parseFloat(amount)
    ).toString();
    await receiverAccount.save();

    res.status(200).json({
      message: "Money sent successfully",
      senderAccount,
      receiverAccount,
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
    });
  }
};

const getOtherUserPaymentAccount = async (req, res) => {
  console.log("entered get other users");

  try {
    const { email } = req.params;

     const users = await User.find({
       email: { $ne: email },
     }).select("name email");

     if (!users || users.length === 0) {
       // Fixed variable name
       return res.status(404).json({
         message: "No other users found",
       });
     }

    res.status(200).json({
      message: "Payment account fetched successfully",
      users,
    });
  } catch (error) {
    console.log("get other user error");

    res.status(500).json({
      message: "Internal server error",
    });
  }
};

export { getOtherUserPaymentAccount, getPaymentAccount, moneyHandler };

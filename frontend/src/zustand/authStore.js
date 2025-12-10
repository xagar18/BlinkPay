import axios from "axios";
import { create } from "zustand";

const useAuthStore = create((set) => ({
  isAuthenticated: false,
  userData: null,
  loading: false,
  getOtherUsers: null,
  balance: null,
  auth: (user) => set({ isAuthenticated: true, userData: user }),
  signOut: () => set({ isAuthenticated: false, userData: null }),
  getProfile: async () => {
    set({ loading: true });
    try {
      const response = await axios.get(
        "http://localhost:3000/api/v1/user/profile",
        { withCredentials: true }
      );
      set({
        isAuthenticated: true,
        userData: response.data.user,
        loading: false,
      });
      return response.data.user;
    } catch (error) {
      console.error("Error fetching profile:", error);
      set({ isAuthenticated: false, userData: null, loading: false });
      return null;
    }
  },
  getOtherUsers: async (email) => {
    try {
      const response = await axios.get(
        `http://localhost:3000/api/v1/payment/getOtherUser/${email}`,
        {
          withCredentials: true,
        }
      );
      set({ getOtherUsers: response.data.paymentAccount });
      return response.data.users;
    } catch (error) {
      console.error("Error fetching other user payment account:", error);
      set({ getOtherUsers: null });
      return null;
    }
  },
  myPayDetails: async (email) => {
    try {
      const response = await axios.get(
        `http://localhost:3000/api/v1/payment/getPaymentDeatils/${email}`,
        { withCredentials: true }
      );
      set({ balance: response.data.payData.balance });
      return response.data.payData.balance;
    } catch (error) {
      console.error("Error fetching balance:", error);
      return null;
    }
  },
  sendMoney: async (senderEmail, toEmail, amount) => {
    try {
      const response = await axios.post(
        `http://localhost:3000/api/v1/payment/moneyHandler/${senderEmail}`,
        { toEmail, amount },
        { withCredentials: true }
      );
      return response.data;
    } catch (error) {
      console.error("Error sending money:", error);
      return null;
    }
  },
}));

export default useAuthStore;

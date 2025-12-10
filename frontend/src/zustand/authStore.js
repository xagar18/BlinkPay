import axios from "axios";
import { create } from "zustand";

const useAuthStore = create((set) => ({
  isAuthenticated: false,
  userData: null,
  loading: false,
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
}));

export default useAuthStore;

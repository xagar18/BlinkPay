import { useEffect } from "react";
import { Navigate, Route, Routes } from "react-router";
import "./App.css";
import SignIn from "./components/auth/signIn";
import SignUp from "./components/auth/signUp";
import Home from "./pages/Home";
import useAuthStore from "./zustand/authStore";

function App() {
  const { isAuthenticated, getProfile } = useAuthStore();

  useEffect(() => {
    (async () => {
      await getProfile();
    })();
  }, []);

  return (
    <>
      <Routes>
        <Route
          path="/signin"
          element={!isAuthenticated ? <SignIn /> : <Navigate to="/" />}
        />
        <Route
          path="/signup"
          element={!isAuthenticated ? <SignUp /> : <Navigate to="/" />}
        />
        <Route
          path="/"
          element={isAuthenticated ? <Home /> : <Navigate to="/signin" />}
        />
      </Routes>
    </>
  );
}

export default App;

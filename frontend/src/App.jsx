import "./App.css";
import SignIn from './components/auth/signIn';
import SignUp from './components/auth/signUp';
import {Route, Routes} from "react-router"

function App() {

  return (
    <>
    <Routes>
      <Route path='/signin' element={<SignIn/>}  />
      <Route path='/signup' element={<SignUp/>}  />
    </Routes>


    </>
  );
}

export default App;

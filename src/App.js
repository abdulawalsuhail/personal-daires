import './App.css';
import SignUp from './Pages/LoginPage/SignUp';
import Navigation from './Pages/Navigationbar/Navigation';
import { Routes, Route } from "react-router-dom";
import SIgnOut from './Pages/LoginPage/SIgnOut';
import Home from './Pages/Home/Home';
import RequireAuth from './Pages/LoginPage/RequireAuth';
import Dashboard from './Pages/Home/Dashboard';

function App() {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path='/home' element={<RequireAuth><Home /></RequireAuth>} />
        <Route path='/dashboard' element={<RequireAuth><Dashboard /></RequireAuth>} />
        <Route path='/signUp' element={<SignUp />} />
        <Route path='/login' element={<SIgnOut />} />
      </Routes>
    </div>
  );
}

export default App;

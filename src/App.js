import { Routes, Route } from 'react-router-dom';
import Welcome from "./pages/welcome/Welcome";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";

function App() {
  return (
    <Routes>
      <Route path='/' element={<Welcome />} />
      <Route path='/login' element={<Login />} />
      <Route path='/home' element={<Home />} />
    </Routes>
  );
}

export default App;
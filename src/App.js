import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Welcome from "./pages/welcome/Welcome";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Welcome />} />
        <Route path='/login' element={<Login />}/>
        <Route path='/home' element={<Home />}/>
      </Routes>
    </Router>
  );
}



export default App;

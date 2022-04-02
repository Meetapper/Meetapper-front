import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from './pages/LoginPage';
import Register from './pages/Register';
import Logout from './pages/Logout'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />}/>
        <Route path="/register" element={<Register />}/>
        <Route path="/logout" element={<Logout />}/>
      </Routes>
    </Router>
  );
}

export default App;

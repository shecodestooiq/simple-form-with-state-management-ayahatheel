import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { UserProvider } from './UserContext';
import Login from './Pages/Login';
import LoginInfo from './Pages/LoginInfo';


function App() {
  return (
    <>
    <UserProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/user-details" element={<LoginInfo/>} />
        </Routes>
      </Router>
    </UserProvider>
    </>
  );
}

export default App;

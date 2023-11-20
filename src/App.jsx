import { Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './pages/Dashboard';
import LandingPage from './pages/LandingPage';
import LoginForm from './components/LoginForm';
import RegistrationForm from './components/RegistrationForm';
import EmailVerification from './components/EmailVerification';
import NotFound from './components/NotFound';

function App() {
  return (
    <Routes className="App">
      <Route path='/' element={<LandingPage />} />
      <Route path='/register' element={<RegistrationForm />} />
      <Route path='/emailVerification' element={<EmailVerification />} />
      <Route path='/logIn' element={<LoginForm />} />
      <Route path='/dashboard' element={<Dashboard />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  );
}

export default App;

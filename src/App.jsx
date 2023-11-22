import { Route, Routes } from 'react-router-dom';
import './App.css';
import LandingPage from './pages/LandingPage';
import LoginForm from './pages/Authenication/LoginForm';
import RegistrationForm from './pages/Authenication/RegistrationForm';
import EmailVerification from './pages/Authenication/EmailVerification';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Routes className="App">
      <Route path='/' element={<LandingPage />} />
      <Route path='/register' element={<RegistrationForm />} />
      <Route path='/emailVerification' element={<EmailVerification />} />
      <Route path='/logIn' element={<LoginForm />} />
      {/* <Route path='/dashboard' element={<Dashboard />} >
        <Route path='/dashboard/' element={<Dashboard />} />
        <Route path='/dashboard/' element={<Dashboard />} />
        <Route path='/dashboard/' element={<Dashboard />} />
        <Route path='/dashboard/' element={<Dashboard />} />
      </Route> */}
      <Route path='*' element={<NotFound />} />
    </Routes>
  );
}

export default App;

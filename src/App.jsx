import { Route, Routes } from "react-router-dom";
import "./App.css";
import LandingPage from "./pages/LandingPage/LandingPage";
import LoginForm from "./pages/Authenication/LoginForm/LoginForm";
import RegistrationForm from "./pages/Authenication/RegistrationForm/RegistrationForm";
import EmailVerification from "./pages/Authenication/EmailVerification/EmailVerification";
import Dashboard from "./pages/Dashboard/Dashboard";
import NotFound from "./pages/NotFound/NotFound";
import Admin from "./pages/Dashboard/Admin/Admin";
import Customer from "./pages/Dashboard/Customer/Customer";
import Transaction from "./pages/Dashboard/Transaction/Transaction";
import Invoice from "./pages/Dashboard/Invioce/Invioce";
import Settings from "./pages/Dashboard/Settings/Settings";
import LogOUt from "./pages/Authenication/logOUt/logOUt";

function App() {
  return (
    <Routes className="App">
      <Route path="/" element={<LandingPage />} />
      <Route path="/register" element={<RegistrationForm />} />
      <Route path="/logIn" element={<LoginForm />} />
      <Route path="/emailVerification" element={<EmailVerification />} />
      <Route path="/dashboard" element={<Dashboard />}>
        <Route path="/dashboard/admin" element={<Admin />} />
        <Route path="/dashboard/customerProfile" element={<Customer />} />
        <Route path="/dashboard/transaction" element={<Transaction />} />
        <Route path="/dashboard/invoice" element={<Invoice />} />
        <Route path="/dashboard/settings" element={<Settings />} />
        <Route path="/dashboard/logOUt" element={<LogOUt />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
export default App;

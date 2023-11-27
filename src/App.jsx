import { Route, Routes } from "react-router-dom";
import "./App.css";
import LandingPage from "./pages/LandingPage/LandingPage";
import SignIn from "./pages/Authenication/signIn/SignIn";
import CreateAccount from "./pages/Authenication/createAccount/CreateAccount";
import Dashboard from "./pages/Dashboard/Dashboard";
import NotFound from "./pages/NotFound/NotFound";
import Admin from "./pages/Dashboard/Admin/Admin";
import Customer from "./pages/Dashboard/Customer/Customer";
import Transaction from "./pages/Dashboard/Transaction/Transaction";
import Invoice from "./pages/Dashboard/Invioce/Invioce";
import Settings from "./pages/Dashboard/Settings/Settings";
import SignOut from "./pages/Authenication/signOut/SignOut";
import { ForgetPassWord } from "./pages/Authenication/PasswordForm/PasswordForm";
import { ResetPassword } from "./pages/Authenication/PasswordForm/PasswordForm";
import AccountActivated from "./pages/Authenication/AccountActivated/AccountActivated";

function App() {
  return (
    <Routes className="App">
      <Route path="/" element={<LandingPage />} />
      <Route path="/createAccount" element={<CreateAccount />} />
      <Route path="/signIn" element={<SignIn />} />
      <Route path="/forgetPassWord" element={<ForgetPassWord />} />
      <Route path="/resetPassword/" element={<ResetPassword />} />
      <Route path="/accountActivated" element={<AccountActivated />} />
      <Route path="/dashboard" element={<Dashboard />}>
        <Route path="/dashboard/admin" element={<Admin />} />
        <Route path="/dashboard/customerProfile" element={<Customer />} />
        <Route path="/dashboard/transaction" element={<Transaction />} />
        <Route path="/dashboard/invoice" element={<Invoice />} />
        <Route path="/dashboard/settings" element={<Settings />} />
        <Route path="/dashboard/signOut" element={<SignOut />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
export default App;

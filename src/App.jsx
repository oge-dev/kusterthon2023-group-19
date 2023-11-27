import { Route, Routes } from "react-router-dom";
import "./App.css";
import LandingPage from "./pages/LandingPage/LandingPage";
import SignIn from "./pages/Authenication/signIn/SignIn";
import CreateAccount from "./pages/Authenication/createAccount/CreateAccount";
import AccountActivated from "./pages/Authenication/AccountActivated/AccountActivated";
import { ForgetPassWord, ResetPassword } from "./pages/Authenication/PasswordForm/PasswordForm";
import Dashboard from "./pages/Dashboard/Dashboard";
import Admin from "./pages/Dashboard/Admin/Admin";
import ClientProfile from "./pages/Dashboard/ClientProfile/ClientProfile";
import Invoice from "./pages/Dashboard/Invioce/Invioce";
import PaymentTransaction from "./pages/Dashboard/PaymentTransaction/PaymentTransaction";
import PaymentReceived from "./pages/Dashboard/PaymentReceived/PaymentReceived";
import Settings from "./pages/Dashboard/Settings/Settings";
import SignOut from "./pages/Authenication/signOut/SignOut";
import {ftData, stepsData, aboutData} from "./utils/ftData.js"
import NotFound from "./pages/NotFound/NotFound";
function App() {
  return (
    <Routes className="App">
      <Route path="/" element={<LandingPage ftData={ftData} stepsData={stepsData} aboutData={aboutData}/>} />
      <Route path="/signIn" element={<SignIn />} />
      <Route path="/createAccount" element={<CreateAccount />} />
      <Route path="/accountActivated" element={<AccountActivated />} />
      <Route path="/forgetPassWord" element={<ForgetPassWord />} />
      <Route path="/resetPassword" element={<ResetPassword />} />
      <Route path="/dashboard" element={<Dashboard />}>
        <Route path="/dashboard/admin" element={<Admin />} />
        <Route path="/dashboard/clientProfile" element={<ClientProfile />} />
        <Route path="/dashboard/invoice" element={<Invoice />} />
        <Route path="/dashboard/paymentTransaction" element={<PaymentTransaction />} />
        <Route path="/dashboard/paymentReceived" element={<PaymentReceived />} />
        <Route path="/dashboard/settings" element={<Settings />} />
        <Route path="/dashboard/signOut" element={<SignOut />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
export default App;
import { Route, Routes } from "react-router-dom";
import { Dashboard, LandingPage } from "./pages";
import {
  EmailVerification,
  LoginForm,
  NotFound,
  RegistrationForm,
} from "./components";

function NavigationRoute() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/register" element={<RegistrationForm />} />
      <Route path="/emailVerification" element={<EmailVerification />} />
      <Route path="/logIn" element={<LoginForm />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default NavigationRoute;

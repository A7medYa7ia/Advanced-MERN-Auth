import { Route, Routes } from "react-router-dom";
import FloatingShape from "./components/FloatingShape";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import EmailVerificationPage from "./pages/EmailVerification";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br  from-blue-900 via-blue-800 to-blue-700 flex items-center justify-center relative overflow-hidden">
      <FloatingShape
        color="bg-blue-300"
        size="w-64 h-64"
        top="-5%"
        left="10%"
        delay={2}
      />
      <FloatingShape
        color="bg-blue-300"
        size="w-48 h-48"
        top="70%"
        left="80%"
        delay={5}
      />
      <FloatingShape
        color="bg-blue-100"
        size="w-32 h-32"
        top="40%"
        left="-10%"
        delay={2}
      />
      <Routes>
        <Route path="/" element={"Home"} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/log-in" element={<Login />} />
        <Route path="/verify-email" element={<EmailVerificationPage />} />
      </Routes>
    </div>
  );
}

export default App;

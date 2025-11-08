import Signup from "./pages/signup";
import Signin from "./pages/signin";
import OtpVerify from "./pages/otpverify";
import Home from "./pages/Home";
import SearchPage from "./pages/HallSearch";
import HallDetail from "./pages/HallDetail";
import ForgotPassword from "./pages/forgotpassword";
import ServiceProvider from "./pages/ServiceProvider";
import { Routes, Route } from "react-router-dom";
import BookingDetails from "./pages/BookingDetails"
const App = () => {

  return (

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/search" element={<SearchPage />} />
      <Route path="/halldetail" element={<HallDetail />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/otpverify" element={<OtpVerify />} />
      <Route path="/forgotpassword" element={<ForgotPassword />} />
      <Route path="/serviceprovider" element={<ServiceProvider />} />
      <Route path="/bookingdetails" element={<BookingDetails />} />
    </Routes>

  )
}

export default App

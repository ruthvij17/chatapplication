import "./App.css";
import { Routes, Route } from "react-router-dom";
import axios from "axios";

// Pages
import LoginPage from "./Pages/LoginPage";
import SigninPage from "./Pages/SigninPage";
import HomePage from "./Pages/HomePage";
import SharePage from "./Pages/SharePage";
import SuccessPage from "./Pages/SuccessPage";

axios.defaults.baseURL = "http://localhost:5000";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />}></Route>
      <Route path="/home/:id" element={<HomePage />}></Route>
      <Route path="/signin" element={<SigninPage />}></Route>
      <Route path="/success" element={<SuccessPage />}></Route>
      <Route path="/share/:id" element={<SharePage />}></Route>
    </Routes>
  );
}

export default App;

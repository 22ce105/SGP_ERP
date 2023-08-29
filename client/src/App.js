import "./App.css";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import SignUpPage from "./pages/SignUpPage";
import LogIn from "./pages/LogIn";
import About from "./pages/About";
import Check from "./pages/Check";

function App() {
  return (
    <BrowserRouter>
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/about" element={<About />} />
        <Route path="/check" element={<Check />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

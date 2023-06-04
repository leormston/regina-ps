import logo from './logo.svg';
import './App.css';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Articles from './pages/Articles';
import Article from './pages/Article';
import Navbar from "./components/navbar";
import Credits from './pages/Credits';
import styles from "./input.css"
import Gallery from "./pages/Gallery";
import Events from "./pages/Events";
import Footer from "./components/Footer";
import Contact from "./pages/Contact";
import Login  from "./pages/Login"
import Admin from "./pages/Admin"
import React, {useState, useEffect} from "react";


if (sessionStorage.getItem("auth") == null) {
  sessionStorage.setItem("auth", false)
};
function App() {
  const [auth, setAuth] = useState(sessionStorage.getItem("auth"));
  

  return (
    <div className="flex flex-col bg-neutral p-0 min-h-screen">
      <BrowserRouter>
      <Navbar auth={auth}/>
      <div className="m-10 flex-grow">
        <Routes>
            <Route index element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Articles" element={<Articles />} />
            <Route path="/Articles/:articleId" element={<Article />} />
            <Route path="/Gallery" element={<Gallery />} />
            <Route path="/Events" element={<Events />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/Credits" element={<Credits />} />
            <Route path="/Login" element={<Login auth={auth} setAuth={setAuth} />} />
            <Route path="/Admin" element={<Admin auth={auth}/>} />
        </Routes>
      </div>
      <Footer auth={auth} setAuth={setAuth}/>

      </BrowserRouter>
    </div>

  );
}

export default App;

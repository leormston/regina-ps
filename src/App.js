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


function App() {
  
  return (
    <div className="flex flex-col bg-neutral p-0 min-h-screen">



      <BrowserRouter>
      
      <Navbar/>
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

        </Routes>
      </div>

      </BrowserRouter>
      <Footer/>
    </div>

  );
}

export default App;

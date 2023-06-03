import styles from "../input.css"
import { useNavigate } from "react-router-dom";

const Navbar = (props) => {

    const navigate = useNavigate();

    return (
        <div className="bg-neutral p-5" >
        <div className="navbar bg-base-100 rounded-full bg-primary">
        <div className="navbar-start">
            <div className="dropdown ">
            <label tabIndex={0} className="btn  btn-primary rounded-full  lg:hidden accent-pink-500">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                <li><a>About Me</a></li>
                <li><a>Blog</a></li>
                <li><a>Gallery</a></li>
            </ul>
            </div>
            <a className="btn btn-ghost text-gray-100 normal-case text-xl btn btn-primary rounded-full text-center text-gray-100" onClick={() => navigate("/")}>Regina A.B</a>
        </div>
        <div className="navbar-center hidden lg:flex">
            <a className="btn btn-primary rounded-full" onClick={() => navigate("/")}>Home</a>
            <a className="btn btn-primary rounded-full" onClick={() => navigate("/about")}>About Me</a>
            <a className="btn btn-primary rounded-full" onClick={() => navigate("/articles")} >Blog</a>
            <a className="btn btn-primary rounded-full" onClick={() => navigate("/gallery")}>Gallery</a>
            <a className="btn btn-primary rounded-full" onClick={() => navigate("/events")} >Upcoming Events</a>
        </div>
        <div className="navbar-end">
            <a className="btn btn-primary rounded-full" onClick={() => navigate("/contact")}>Contact</a>
        </div>
        </div>
        </div>
    )
  };
  
  export default Navbar;
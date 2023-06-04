import styles from "../input.css"
import Carousel from "../components/Carousel";

import Blogcard from "../components/Blogcard"
import {Row, Col, Container} from "react-bootstrap"
import Gallery from "../components/Gallery";
import { useNavigate } from "react-router-dom";
import Blogs from "../Sections/Blogs";

const Home = (props) => {
    const navigate = useNavigate();
    return (
        <div >
            <div className="grid lg:grid-cols-4 gap-4 md:grid-cols-2">
                <div className="col-span-2 bg-fuchsia-50 rounded-3xl p-10 md:h-96 sm:h-auto xs:h-auto">
                    <p className="text-2xl">A Short Introduction</p>
                    <br/>
                    <p>Hi, my name is Regina but I also go as Gigi. I am a young black artist working in Theatre and Arts in London, currently studying my MA in Theatre and Performance at Queen Mary University Of London. 
                    </p>
                    <p>I am passionate about the arts and the power it has to drive change in society.</p>
                    <br/>
                   <a onClick={() => navigate("/about")} className="btn btn-primary rounded-full">Find Out More</a>
                </div>
                <div className="col-span-2 ">
                    <Carousel/>
                </div>
            </div>
            <br/><br/>

            <div className="text-center">
            <a className="btn btn-primary  focus:outline-none rounded-full text-center text-gray-100" onClick={()=> navigate("/articles")}>Articles Authored By Me</a>
            <a className="btn btn-primary focus:outline-none rounded-full text-center text-gray-100 ml-5" onClick={()=> navigate("/articles")}>View All Articles</a>

            </div>

            <br/>
            <br/>

            <Blogs location={"articles/"} />
            <br/>
            <br/>
            <div className="text-center">
            <a className="btn btn-primary focus:outline-none rounded-full text-center text-gray-100" onClick={() => navigate("/gallery")}>Gallery</a>
            <a className="btn btn-primary focus:outline-none rounded-full text-center text-gray-100 ml-5" onClick={() => navigate("/gallery")}>View Entire Gallery</a>
            </div>

            <br/>
            <br/>

            <Gallery/>

     </div>)
  };
  
  export default Home;
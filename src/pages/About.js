import { useNavigate } from "react-router-dom";
import Carousel from "../components/Carousel";
import { SocialIcon } from 'react-social-icons';


const About = (props) => {
  const navigate = useNavigate();


    return (
      <div>
        <p className="btn btn-primary rounded-full text-center text-gray-100">All About Me</p>
        <br/>
        <br/>

        <div className="grid lg:grid-cols-4 gap-4 md:grid-cols-2">
                <div className="col-span-2 bg-fuchsia-50 rounded-3xl p-10 md:h-96 sm:h-auto xs:h-auto">
                    <p className="text-2xl">Who am I?</p>
                    <br/>
                    <p>Hello there, my name is Regina but people also call me Gigi. I am a Young Black performance artist based in Reading and London.  I am finishing my MA in Theatre and Performance at Queen Mary University Of London. My work is interested in the interesection between race and gender and hopes to trouble the white heteropatriarchal gaze. I am also passionate about using arts practitices to build and engage commmunities. This document will be a document of my journey as an artist, any feedback or suggestions are welcome!</p>

                </div>
                <div className="col-span-2 ">
                    <Carousel/>
                </div>
            </div>
            <br/><br/><br/>
            <div className="grid lg:grid-cols-4 gap-4 md:grid-cols-2">
                
                <div className="col-span-2 ">
                    <Carousel/>
                </div>
                <div className="col-span-2 bg-fuchsia-50 rounded-3xl p-10 md:h-96 sm:h-auto xs:h-auto">
                    <p className="text-2xl">My Education</p>
                    <br/>
                    <p>Hi, my name is Regina but I also go as Gigi. I am a young black artist working in Theatre and Arts in London, currently studying my MA in Theatre and Performance at Queen Mary University Of London. 
                    </p>
                    <p>I am passionate about the arts and the power it has to drive change in society.</p>
                    <br/>

                </div>
            </div>
            <div className="grid lg:grid-cols-2 gap-4 md:grid-cols-2 pt-20">
                <div className="col-span-1 text-center h-auto">
                    
                    <div className="bg-fuchsia-50 rounded-3xl p-10 sm:h-auto h-auto grid grid-cols-6 ">
                      <p className="btn btn-primary rounded-full text-center text-gray-100 m-auto col-span-6">Socials</p>

                      <div className="xl:col-span-2 lg:col-span-3 col-span-6 grid grid-cols-4 flex pt-10">
                      <SocialIcon className="col-span-4 m-auto"  url="https://www.instagram.com/gigi_brathwaite_/" />
                      <p className="col-span-4 text-xl m-auto"> Instagram</p>
                      </div>
                      
                      <div className="xl:col-span-2 lg:col-span-3 col-span-6 grid grid-cols-4 flex pt-10">
                      <SocialIcon className="col-span-4 m-auto"  url="https://www.linkedin.com/in/regina-agard-brathwaite-07143b219/?originalSubdomain=uk" />
                      <p className="col-span-4 text-xl m-auto"> LinkedIn</p>
                      </div>

                      <div className="xl:col-span-2 lg:col-span-3 col-span-6 grid grid-cols-4 flex pt-10">
                      <SocialIcon className="col-span-4 m-auto"  url="https://www.imdb.com/name/nm13966451/" />
                      <p className="col-span-4 text-xl m-auto"> IMDB</p>
                      </div>
                      

                      <div className="xl:col-span-2 lg:col-span-3 col-span-6 grid grid-cols-4 flex pt-10">
                      <SocialIcon className="col-span-4 m-auto"  url="https://twitter.com/agardreggie" />
                      <p className="col-span-4 text-xl m-auto"> Twitter</p>
                      </div>

                      <div className="xl:col-span-2 lg:col-span-3 col-span-6 grid grid-cols-4 flex pt-10">
                      <SocialIcon className="col-span-4 m-auto"  url="mailto:reggieb@me.com" />
                      <p className="col-span-4 text-xl m-auto"> Email</p>
                      </div>

                    </div>
                </div>
        

                <div className="col-span-1  bg-fuchsia-50 rounded-3xl p-10 md:h-96 sm:h-auto xs:h-auto">
                    <p className="btn btn-primary rounded-full text-center text-gray-100">Interesting Links</p>
                    <br/>
                    <br/>
                    <a className="btn btn-primary rounded-full text-left text-gray-100" onClick={() => navigate("/credits")}>Credits</a>
                    <br/>
                    <br/>
                    <a className="btn btn-primary rounded-full text-left text-gray-100" target="_blank" href="https://www.eventbrite.co.uk/e/after-hours-performance-club-tickets-627091787417?aff=odcleoeventsincollection">Upcoming Performance</a>

                </div>

            </div>
      </div>
      
    
    )
    ;
  };
  
  export default About;
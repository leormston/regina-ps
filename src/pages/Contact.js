import styles from "../input.css"
import { SocialIcon } from "react-social-icons";
const Contact = () => {
    return (
        <div className="grid md:grid-cols-2 gap-4">

            <div className="bg-fuchsia-50 rounded-3xl p-10 sm:h-auto h-auto grid grid-cols-6 col-span-1">
                      <p className="btn btn-primary rounded-full text-center text-gray-100 m-auto col-span-6 ">Socials</p>

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

                      

                    </div>

                <div className="bg-fuchsia-50 rounded-3xl p-10 sm:h-auto h-auto grid grid-cols-6 col-span-1">
                    <div className="col-span-6 text-center">
                        <p className="btn btn-primary rounded-full text-center text-gray-100 m-auto col-span-6">Or just send an email</p>
                        <br /><br />
                        <SocialIcon className="col-span-4 m-auto"  url="mailto:reggieb@me.com" />
                        <br /><br />

                        <p className="text-size-2xl ">Reggieb@me.com</p>
                       
                    </div>
                </div>
            </div>


    )
  };
  
  export default Contact;
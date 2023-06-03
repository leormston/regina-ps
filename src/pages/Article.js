import styles from "../input.css"
import Blogcard from "../components/Blogcard";
import React, {useState, useEffect} from "react";
import DynamicCarousel from "../components/DynamicCarousel";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const headers = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Credentials': true,
    'method': 'GET',
    'mode': 'cors'
}



const Article = (props) => {

    const [article, setArticle] = useState();
    const [loading, setLoading] = useState(true);
    let { articleId } = useParams();
    async function fetchArticles() {
        const response = await fetch('https://21xhi0w0i1.execute-api.eu-west-1.amazonaws.com/prod/blogs/' + articleId, headers);
        const article = await response.json();
        console.log(article[0]);
        setArticle(article[0]);
    }

    async function fetchAll() {
        await Promise.all([
            fetchArticles()
        ]).then(() => {
            setLoading(false);
        });
        
    }

    useEffect(() => {
        fetchAll();
    }, []);
    if (loading)
    {
        return (
            <div className="h-100 text-center">
                <div role="status">
                    <svg aria-hidden="true" className="inline w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-purple-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                    </svg>
                    <span class="sr-only">Loading...</span>
                </div>
            </div>

        )
    }
    else if (article.images) 
    {
        return (
            <div className="md:ml-48 md:mr-48">
                <div className="grid md:grid-cols-2 gap-4">
                    <div className="col-span-1">
                        <DynamicCarousel images={article.images}/> 
                    </div>
                    <div className="col-span-1 h-auto mt-auto m-auto">
                        <p className="text-7xl text-gray-100">{article.blogTitle}</p> 
                        <br/>

                        <p className="text-xl text-gray-100">Date Published: {article.dateCreated}</p>
                        <p className="text-xl text-gray-100">By Regina Agard Brathwaite</p>
                        <br/>
                        {article.tags.map((tag) => (
                            <span className="inline-block btn-primary rounded-full px-3 py-1 text-sm font-semibold text-gray-100 mr-2 mb-2">{tag}</span>
                        ))}
                    </div>
                </div>
                <br/>
                {/* <p className="text-2xl text-gray-100" dangerouslySetInnerHTML={__html= {article.introduction}}/> */}
                <div className="text-2xl text-gray-100" dangerouslySetInnerHTML={{__html: article.introduction}} />
                <br/>
                <div className="text-2xl text-gray-100" dangerouslySetInnerHTML={{__html: article.paragraphOne}} />
                
                <br/>
                {/* <p className="text-2xl text-gray-100">{article.paragraphOne}</p><br/> */}
                <div style={{padding: "60% 0 0 0", position:"relative"}}><iframe src="https://player.vimeo.com/video/832056350?h=46053f2e2a&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen style={{position: "absolute", top:0,left:0,width:"100%",height:"100%"}} title="Experiment 1 [Grillz] - SD 480p"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>
                {/* <p className="text-2xl text-gray-100">{article.paragraphTwo}</p><br/> */}
                <br/>
                <div className="text-2xl text-gray-100" dangerouslySetInnerHTML={{__html: article.paragraphTwo}} />

                <br/>
                <p className="text-2xl text-gray-100">{article.paragraphThree}</p><br/>
                <p className="text-2xl text-gray-100">{article.conclusion}</p><br/>
                <br/><br/>
                <hr/>
                <p className="text-3xl text-gray-100">Interesting Links</p>
                <br/>
                {article.relevantLinks.map((link) => (
                    <div>
                        <a className="text-2xl text-blue-800" href={link}>{link}</a>
                        <br/>
                        <br/>

                    </div>
                ))}
                
            </div>
        )
    }

  };

    export default Article;
import styles from "../input.css"
import Blogcard from "../components/Blogcard";
import React, {useState, useEffect} from "react";
import Blogs from "../Sections/Blogs";
const headers = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Credentials': true,
    'method': 'GET',
    'mode': 'cors'
}

const Credits = () => {
    const [credits, setCredits] = useState()
    const [loading, setLoading] = useState(true)
    async function fetchCredits() {
        const response = await fetch('https://21xhi0w0i1.execute-api.eu-west-1.amazonaws.com/prod/credits', headers);
        const credits = await response.json();
        console.log(credits);
        setCredits(credits);
    }

    async function fetchAll() {
        await Promise.all([
            fetchCredits()
        ]).then(() => {
            setLoading(false);
        });
    }
    useEffect(() => {
        fetchAll();
    }, []);

    return (
    
        <div>

            <p className="btn btn-primary rounded-full text-center text-gray-100">Credits</p>
            <br/>
            <br/>
            {loading == true ? <p>Loading...</p> : 
            <table className="table-auto m-auto">
                <thead className="text-gray-100">
                    <tr>
                    <th>Title</th>
                    <th>Role</th>
                    <th className="xs:hidden min-[200px]:hidden  md:table-cell">Location</th>
                    <th className="xs:hidden min-[200px]:hidden  md:table-cell">Year</th>
                    </tr>
                </thead>
                <tbody className='text-gray-100 '>
                    {credits.map((credit) => (
                            <tr >
                            <td className="p-5 border-solid border border-gray-100 mt-auto mb-auto">{credit.title}</td>
                            <td className="p-5 border-solid border border-gray-100 mt-auto mb-auto">{credit.role}</td>
                            <td className="p-5 border-solid border border-gray-100 mt-auto mb-auto xs:hidden min-[200px]:hidden  md:table-cell">{credit.location}</td>
                            <td className="p-5 border-solid border border-gray-100 mt-auto mb-auto xs:hidden min-[200px]:hidden  md:table-cell">{credit.year}</td>
                            </tr>
                            
                    ))}
                </tbody>
            </table>
            }
            
        </div>
        
    )

  };
  
  export default Credits;
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

const Admin = (props) => {

    if (props.auth != true) {window.location.replace("/Login")}
    else
    {
    return (
        <div>
            <p className="btn btn-primary rounded-full text-center text-gray-100">Admin Dashboard</p>
            
        </div>
    )
    }
  };
  
  export default Admin;
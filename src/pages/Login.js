import React, {useState, useEffect} from "react";

const headers = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
    'Access-Control-Allow-Headers': '*',
    'Access-Control-Allow-Credentials': true,
    'method': 'POST',
    // 'mode': 'cors',
    'Accept': 'application/json, text/plain, */*'
}



const Login = (props) => {
    const[error, setError] = useState(false);
    const hashCode = s =>
    s.split('').reduce((a, b) => {
      a = (a << 5) - a + b.charCodeAt(0);
      return a & a;
    }, 0);


    async function authenticateUser()
    {
        let username = document.getElementById("username").value;
        let password = document.getElementById("password").value;
        let hash_p = hashCode(password).toString();
        let body = {
            a: username,b: hash_p
        }
        let auth;
        fetch('https://21xhi0w0i1.execute-api.eu-west-1.amazonaws.com/prod/auth', 
        {
            method: "POST", 
            headers, 
            body: JSON.stringify(body)
        }).then(response => response.json()).then(data => auth = data).then(() => 
        {
            if (auth == true)
            {
                setError(false)
                sessionStorage.setItem("username", username);
                sessionStorage.setItem("password", hash_p);
                sessionStorage.setItem("auth", true);
                props.setAuth(true);
            }
            else
            {
                setError(auth)
            }
        });
        
    }
    return (
        <div className="flex items-center justify-center">
            <p className="">Sign In</p>
            <div class="w-full max-w-xs">
            <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                    Username
                </label>
                <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username"/>
                </div>
                <div class="mb-6">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
                    Password
                </label>
                <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************"/>
                {error &&<p className="text-red-700">{error}</p>}
                
                </div>
                <div class="flex text-center items-center justify-center">
                <p class="btn btn-primary rounded-full text-center text-gray-100" onClick={() => authenticateUser()}>
                    Sign In 
                </p> 
                </div>
            </form>
            </div>
        </div>
    )
  };
  
  export default Login;
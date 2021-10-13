import React from 'react';


function Login() {

    return (
            <div className={"bg-gray-100 h-screen m-auto flex items-center justify-center"}>
                <section className={"w-80 p-3 rounded shadow-md text-center"}>
                    <h1 className={"pt-3 text-xl capitalize text-green-700"}>FriendBook</h1>
                    <h1 className={"text-gray-500 mb-3"}>Login or Create and Account</h1>
                    <a className={"text-white w-full bg-green-700 py-2 px-3 rounded m-1 hover:bg-green-600 hover:text-white inline-block"} href="/api/auth/login">Login</a>
                    <a className={"text-white w-full bg-green-700 py-2 px-3 rounded m-1 hover:bg-green-600 hover:text-white inline-block"} href="https://dev-xopeuohm.eu.auth0.com/u/signup?state=hKFo2SBoUHliVTVEVWhtZXNRRGJrc3pxUmpFWkgtOTgwY0xhc6Fur3VuaXZlcnNhbC1sb2dpbqN0aWTZIFVUT1VJcnNJMDA0d2o5M3BHUVF6NFV2aG9DeVdOM1Fno2NpZNkgR1liZ3lFTWd5eFpPUWtLSWNVUlptQ2puVVBYek03Uk4">Create Account</a>
                </section>

            </div>
    );
}

export default Login;




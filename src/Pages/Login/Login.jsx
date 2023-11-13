import React, { useContext, useState } from "react";
import './Login.css'
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";

function Login () {
    const [credentials, setCredentials] = useState({
        username : undefined,
        password : undefined
    })
    
    const handleChange = (e) =>{
        setCredentials(pre=> ({...pre , [e.target.id]:e.target.value}))
        
    }
    const { user , loading , error , dispatch } = useContext(AuthContext)
    const loginHandle = async (e) =>{
        e.preventDefault();
        dispatch({ type : "LOGIN_START" });
        try {
            const res  = await axios.post('http://localhost:8000/api/auth/login' , credentials)
            console.log(res?.data);
            dispatch({ type : 'LOGIN_SUCCESS' , payload : res.data})
        } catch (error) {
            dispatch({type : 'LOGIN_FAILURE' , payload : error.message.data})
        }
    }
    console.log(user);
    
    return(
        <>
            <div className="login">
                <div className="loginContainer">
                    <h1>Login</h1>
                    
                    <input 
                        type="text" 
                        id="username" 
                        placeholder="Enter Username..." 
                        className="loginInput"
                        onChange={handleChange}
                    />

                    <input 
                        type="password" 
                        id="password" 
                        placeholder="Enter Password..." 
                        className="loginInput"
                        onChange={handleChange} 
                    />

                    <button onClick={loginHandle}>Login</button>
                    {error && <span>{error.message}</span>}
                </div>
            </div>
        </>
    )
}


export default Login
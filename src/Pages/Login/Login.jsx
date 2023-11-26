import React, { useContext, useState } from "react";
import './Login.css'
import  {AuthContext}  from "../../context/AuthContext.js";
import axios from "axios";
import {ToastContainer , toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import {useNavigate} from 'react-router-dom'


function Login () {
    const [credentials, setCredentials] = useState({
        username : undefined,
        password : undefined
    })
    const navigate = useNavigate()
    
    const handleChange = (e) =>{
        setCredentials(pre=> ({...pre , [e.target.id]:e.target.value}))
    }
    const {  loading , error , dispatch } = useContext(AuthContext)


    const loginHandle = async (e) =>{
        e.preventDefault();
        dispatch({ type : "LOGIN_START" });
        try {
            const res  = await axios.post('http://localhost:8000/api/auth/login' , credentials)
            // console.log(res?.data);
            dispatch({ type : 'LOGIN_SUCCESS' , payload : res.data},toast('you are login' , {
                position : 'top-center',
                autoClose : 2000,
                theme  : 'dark'
            }),
            setTimeout(() => navigate('/'), 2000),
            )
        } catch (error) {
            dispatch({type : 'LOGIN_FAILURE' , payload : toast.error('User Not found')})
        }

    }
    
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

                    <button disabled={loading} onClick={loginHandle}>Login</button>
                    <ToastContainer/>
                    {error && <span>{error.message}</span>}
                </div>
            </div>
        </>
    )
}


export default Login
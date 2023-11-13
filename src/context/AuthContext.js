import {createContext, useEffect, useReducer} from 'react'

const Initial_State = {
    user : JSON.parse(localStorage.getItem('user')) || null,
    loading : false,
    error : null
}

export const AuthContext = createContext(Initial_State)

const AuthReducer = (state , action) =>{
    switch (action.type) {
        case "LOGIN_START":
            return {
                user : null,
                loading : false,
                error : null
            }
        case "LOGIN_SUCCESS":
            return {
                user : action.payload,
                loading : true,
                error : null
            };
        case "LOGIN_FAILURE":
            return {
                user : null,
                loading : false,
                error : action.payload
            };
        case "LOGOUT":
            return {
                user : null,
                loading : false,
                error : null
            };
            default :
            return state;
    }
}

export const AuthContextProvider = ({children}) =>{
    const [state , disptach] = useReducer(AuthReducer , Initial_State)
    
    useEffect(()=>{
        localStorage.setItem('user', JSON.stringify(state.user))
    },[state.user])
    
    return(
        <AuthContext.Provider 
        value={{
            user : state.user,
            loading  : state.loading,
            error : state.error,
            disptach
        }}>
            {children}
        </AuthContext.Provider>
    )
}
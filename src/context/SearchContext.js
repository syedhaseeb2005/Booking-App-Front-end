import {createContext, useReducer} from 'react'

const Initial_State = {
    city : undefined,
    dates : [],
    option :{
        adult : undefined,
        children : undefined,
        room : undefined,
    }
}

export const SearchContext = createContext(Initial_State)

const SearchReducer = (state , action) =>{
    switch (action.type) {
        case "NEW_SEARCH":
            return action.payload;
        case "RESET_SEARCH":
            return Initial_State;
            default :
            return state;
    }
}

export const SearchContextProvider = ({children}) =>{
    const [state , disptach] = useReducer(SearchReducer , Initial_State)
    return(
        <SearchContext.Provider 
        value={{
            city: state.city, 
            dates : state.dates, 
            option:state.option, 
            disptach
        }}>
            {children}
        </SearchContext.Provider>
    )
}
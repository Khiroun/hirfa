import { User } from 'firebase'
import React, { createContext, useReducer } from 'react'
type State = {
    user: User | null,
    loading: boolean,
    error?: string 
}

type Action =
 | { type: 'login', payload: {email: string, password: string} }
 | { type: 'login-success', payload: User }
 | { type: 'failure', payload: string }
 | { type: 'loading' }

 const initialState: State = {loading: false, user: null}

export const AppContext = createContext(initialState)


const reducer = (state: State, action: Action): State => {
    switch(action.type){
        case "loading":
            return {...state, loading: true, error: undefined}
        case 'login':
            
            return state
        case 'login-success':
            return {...state, loading: false, user: action.payload, error: undefined}
        case 'failure':
            return {...state, loading: false, error:  action.payload}
    }

}

export const AppProvider: React.FC = ({children})=>{
    const [state, dispatch] = useReducer(reducer, initialState)
    return <AppContext.Provider value={[state, dispatch]}>
        {children}
    </AppContext.Provider>

}


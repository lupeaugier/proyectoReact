import React, {createContext, useReducer} from 'react';
import { removeFromStorage, addInStorage } from "../util/helperAuthContext"

export const AuthContext = createContext({});

const handleDispatch = (state, { type, payload }) => {
    switch (type) {
        case "LOGIN":
            sessionStorage.setItem("token", JSON.stringify("TOKENEXAMPLE"));
            return {
                ...state,
                isLogged: true,
                //user: payload
            }
        case "LOGOUT":
            localStorage.clear();
            sessionStorage.clear();
            return {
                ...state,
                isLogged: false,
                //user: null
            }
        case "FAVS":
            const doesExist = state.data.some(person => person.id === payload.id);
            doesExist ? removeFromStorage(state, payload) : addInStorage(state, payload);
            return doesExist ? {
                ...state,
                data: removeFromStorage(state, payload)
            } : {
                ...state,
                data: addInStorage(state, payload)
            }
        case "DARK":
            localStorage.setItem("theme", JSON.stringify("dark"))
            return {
                ...state,
                theme: "dark"
            }
        case "LIGHT":
            localStorage.removeItem("theme")
            return {
                ...state,
                theme: null
            }
            default:
            return state;
    }
};

const AuthContextProvider = ({children}) => {
    const initialState = {
        isLogged: !!sessionStorage.getItem("token"),
        theme: localStorage.getItem("theme"),
        data: JSON.parse(localStorage.getItem("favoritos")) ?? []
    };
    const [state, dispatch] = useReducer(handleDispatch, initialState);

    const propiedades = { state, dispatch }
    return (
        <AuthContext.Provider value = {propiedades}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider
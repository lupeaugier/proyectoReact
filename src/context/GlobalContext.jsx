import React, {createContext, useReducer} from 'react';
import { removeFromStorage, addInStorage } from "../util/helperGlobalContext"

export const GlobalContext = createContext({});

const handleDispatch = (state, { type, payload }) => {
    switch (type) {
        case "LOGIN":
            sessionStorage.setItem("token", JSON.stringify("TOKENEXAMPLE"));
            return {
                ...state,
                isLogged: true,
            }
        case "LOGOUT":
            localStorage.clear();
            sessionStorage.clear();
            return {
                ...state,
                isLogged: false,
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

const GlobalContextProvider = ({children}) => {
    const initialState = {
        isLogged: !!sessionStorage.getItem("token"),
        theme: localStorage.getItem("theme"),
        data: JSON.parse(localStorage.getItem("favoritos")) ?? []
    };
    const [state, dispatch] = useReducer(handleDispatch, initialState);

    const propiedades = { state, dispatch }
    return (
        <GlobalContext.Provider value = {propiedades}>
            {children}
        </GlobalContext.Provider>
    )
}

export default GlobalContextProvider
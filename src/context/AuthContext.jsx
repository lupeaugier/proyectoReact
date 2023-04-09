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
                user: payload
            }
        case "LOGOUT":
            localStorage.clear();
            sessionStorage.clear();
            return {
                ...state,
                isLogged: false,
                user: null
            }
        case "FAVS":
            //AQUÍ VA LA LÓGICA PARA VERIFICAR SI EL ELEMENTO YA SE ENCUENTRA
            const doesExist = state.data.some(person => person.id === payload.id);
            doesExist ? removeFromStorage(state, payload) : addInStorage(state, payload);
            return doesExist ? {
                ...state,
                data: removeFromStorage(state, payload)
            } : {
                ...state,
                data: addInStorage(state, payload)
            }
        default:
            return state;
    }
};

const AuthContextProvider = ({children}) => {
    const initialState = {
        isLogged: !!sessionStorage.getItem("token"),
        //user: null,
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
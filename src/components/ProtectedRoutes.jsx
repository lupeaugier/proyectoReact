import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { GlobalContext } from "../context/GlobalContext";

export const ProtectedRoutes = () => {
    const { state } = useContext(GlobalContext);
    return state?.isLogged ? <Outlet /> : <Navigate to="/login" />;
};
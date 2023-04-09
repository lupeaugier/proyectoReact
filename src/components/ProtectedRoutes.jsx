import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export const ProtectedRoutes = () => {
    const { state } = useContext(AuthContext);
    return state?.isLogged ? <Outlet /> : <Navigate to="/login" />;
};
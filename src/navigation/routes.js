import { lazy } from "react";
import Login from "../pages/Login"
import Layout from "../components/layout/Layout"

const dynamicImport = (param) => {
    return lazy(() =>
        import(`../pages/${param}.jsx`)
        );
}

export const routes = [
    {
        id: 1,
        path: '/',
        Element: dynamicImport("Home"),
    },
    {
        id: 2,
        path: '/dentist/:id',
        Element: dynamicImport("Detail"),
    },
    {
        id: 3,
        path: '/favs',
        Element: dynamicImport("Favs"),
    },
    {
        id: 4,
        path: '/contactForm',
        Element: dynamicImport("ContactForm"),
    }

];

export {Login, Layout};


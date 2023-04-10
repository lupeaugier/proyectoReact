import React, { useContext } from 'react'
import { Outlet } from 'react-router-dom'
import { GlobalContext } from '../../context/GlobalContext';
import Navbar from '../Navbar';
import Footer from '../Footer';
import { Box } from '@mui/material';

const Layout = () => {

    const { state } = useContext(GlobalContext);

return (

        <Box className={state.theme} style={{width: "100vw", minHeight: "100vh"}} >
            <Navbar/>
            <Outlet />
            <Footer />
        </Box>   
    )
};

export default Layout;
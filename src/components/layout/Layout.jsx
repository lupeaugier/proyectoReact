import React, { useContext } from 'react'
import { Outlet } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext';
import Navbar from '../Navbar';
import Footer from '../Footer';
import { Box } from '@mui/material';

const Layout = () => {
    
    const { state } = useContext(AuthContext);

return (

        <Box className={state.theme} style={{width: "100vw", minHeight: "100vh"}} >
            <Navbar/>
            <Outlet />
            <Footer />
        </Box>   
    )
};

export default Layout;
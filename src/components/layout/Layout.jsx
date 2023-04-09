import React, { Fragment, useContext } from 'react'
import { AuthContext } from '../../context/AuthContext';
import Footer from '../Footer';
import { Outlet, useNavigate } from 'react-router-dom'
import { Box, IconButton, Tooltip } from '@mui/material';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import LogoutIcon from '@mui/icons-material/Logout';


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#DDDFDF',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const Layout = () => {
    const { state, dispatch } = useContext(AuthContext);
    const navigate = useNavigate();

return (
    <Fragment>
        <Box component="header" style={{ display: "flex", justifyContent: "space-between" }}>
            <Stack direction="row" spacing={2}>
                <Item onClick={() => navigate("/home")} style={{ cursor: "pointer", color: "red" }}>Home</Item>       
                <Item onClick={() => navigate("/favs")} style={{ cursor: "pointer" }}>Favoritos</Item>
                <Item onClick={() => navigate("/contactForm")} style={{ cursor: "pointer" }}>Contact</Item>
            </Stack>
        <Box>
            <Tooltip title="Cerrar sesión">
            <IconButton onClick={() => dispatch({ type: "LOGOUT" })}>
                <LogoutIcon size={30} />
            </IconButton>
            </Tooltip>
        </Box>
        </Box>
        <Outlet />
        <Footer />
    </Fragment>
    )
};

export default Layout;
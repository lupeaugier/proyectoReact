import React, {useContext} from 'react'
import { Box, IconButton, Tooltip } from '@mui/material';
import { useNavigate } from 'react-router-dom'
import { GlobalContext } from '../context/GlobalContext';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import LogoutIcon from '@mui/icons-material/Logout';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#DDDFDF',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const Navbar = () => {
    const { state, dispatch } = useContext(GlobalContext);
    const navigate = useNavigate();

    const handleTheme = () => {
		if (state.theme === "dark") {
			dispatch({ type: "LIGHT" })
		}
		else{
			dispatch({ type: "DARK" })
		}
	}

    const handleLogOut = () => {
		dispatch({ type: "LOGOUT" })
	}
    return (
        <Box component="header" style={{ display: "flex", justifyContent: "space-between", padding: "30px", marginBottom: "30px"}}>
            <Stack direction="row" spacing={2}>
                <Item onClick={() => navigate("/")} style={{ cursor: "pointer"}}>Home</Item>       
                <Item onClick={() => navigate("/favs")} style={{ cursor: "pointer" }}>Favoritos</Item>
                <Item onClick={() => navigate("/contactForm")} style={{ cursor: "pointer" }}>Contact</Item>
            </Stack>
            <Box>
                {
                state.theme === "dark" ? (
                    <Tooltip title="Modo Claro">
                        <IconButton  onClick={handleTheme}>
                            <LightModeIcon  sx={{color:"#F4F4F4"}} />
                        </IconButton>
                    </Tooltip>  
                ) : (
                    <Tooltip title="Modo Oscuro">
                        <IconButton onClick={handleTheme}>
                            <DarkModeIcon />
                        </IconButton>
                    </Tooltip>
                )
                }
                <Tooltip title="Cerrar sesión">
                <IconButton onClick={handleLogOut}>
                    <LogoutIcon sx={{color:"#DA6A4E"}} />
                </IconButton>
                </Tooltip>
            </Box>
        </Box>    
    )
}

export default Navbar
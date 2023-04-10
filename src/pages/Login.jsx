import React, { useState, useContext } from 'react'
import { useNavigate } from "react-router-dom";
import { GlobalContext } from '../context/GlobalContext';
import { Box, Button, Container, TextField, Typography } from '@mui/material';

const Login = () => {
    const [values, setValues] = useState({ email: "", password: "" });
    const { dispatch } = useContext(GlobalContext);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (values.email) {
            dispatch({ type: "LOGIN", payload: values.email });
            navigate("/");
        }
    }

    return (
        <Container  sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)"}}
        > 
            <Typography align="center" color= "#DA6A4E" variant="h5" mb="40px">Iniciar Sesión</Typography>
            <Box
                component="form"
                sx={{ display: "flex", flexDirection: "column", gap: "20px", width: "30vw", margin: "0 auto", mb: 5 }}
                onSubmit={handleSubmit}
            >
                <TextField
                    name='email'
                    size='small'
                    type="text"
                    label="E-mail"
                    placeholder='Ingrese su e-mail'
                    value={values.email}
                    onChange={(e) => setValues({ ...values, email: e.target.value })}
                />
                <TextField
                    name='password'
                    size='small'
                    type="password"
                    label="Contraseña"
                    placeholder='Ingrese su contraseña'
                    value={values.password}
                    onChange={(e) => setValues({ ...values, password: e.target.value })}
                />
                <Button type='submit' size="small" variant="contained">
                    Ingresar
                </Button>
            </Box>
        </Container>
    )
}

export default Login;
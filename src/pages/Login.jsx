import React, { useState, useContext } from 'react'
import { useNavigate } from "react-router-dom";
import { AuthContext } from '../context/AuthContext';
import { Box, Button, TextField } from '@mui/material';
import Footer from '../components/Footer';

const Login = () => {
    const [values, setValues] = useState({ email: "", password: "" });
    const { dispatch } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (values.email) {
            dispatch({ type: "LOGIN", payload: values.email });
            navigate("/");
        }
    }

    return (
        <Box
            component="form"
            sx={{ display: "flex", flexDirection: "column", gap: "20px", width: "40vw", }}
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
                label="password"
                placeholder='Ingrese su contraseña'
                value={values.password}
                onChange={(e) => setValues({ ...values, password: e.target.value })}
            />
            <Button type='submit' size="small" variant="contained">
                Ingresar
            </Button>

            <Footer />

        </Box>
    )
}

export default Login;
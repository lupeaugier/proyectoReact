import React, { useState } from "react";
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { Container, Button, Typography, Input, Box } from '@mui/material/'



const inputs = [
    { id: 1, type: "text", label: "Nombre", placeholder: "Nombre", name: "name" },
    { id: 2, type: "text", label: "Email", placeholder: "Email", name: "email" }
]


const Form = () => {
    const getInitialValues = () => ({
        name: "",
        email: ""
    })

const [ view, setView ] = useState("form")


const getValidationSchema = () => (
    Yup.lazy(() =>
    Yup.object().shape({
        name: Yup.string()
        .min(5, 'Tu nombre tiene que tener 5 caracteres como minimo.')
        .required("Campo Obligatorio"),
        email: Yup.string()
        .email("Debes ingresar un email valido.")
        .required('Campo Obligatorio')
    })))


const onSubmit = (values) => {
    setView("message");

}

        const { values, setFieldValue, errors, handleSubmit } = useFormik({
        initialValues: getInitialValues(),
        validationSchema: getValidationSchema(),
        validateOnChange: false,
        validateOnBlur: false,
        onSubmit
    })

    return (
        <Container>
        { 
            view === "form" ? (

                <div>
                <Typography align="center" variant="h4">Formulario de contacto</Typography>
                <Box
                        component="form"
                        sx={{ display: "flex", flexDirection: "column", gap: "20px", width: "40vw", }}
                        onSubmit={handleSubmit}
                    >
                    
                    {/* <Container from="contact">
    
                    <form id="form" onSubmit={handleSubmit}> */}
                    {/* <div style={{ width: "100%", textAlign: "center" }}> */}
                {/* </div> */}
                        
                    {
                        inputs.map(input => (
                            <Container key={input.id}>
                                <label style= {{ padding: "15px", width: "400px", textAlign: "center", fontFamily: "Arial", fontSize: "18px"}}>{input.label}</label>
                                <Input 
                                    name = {input.name}
                                    placeholder = {input.placeholder}
                                    type = {input.type}
                                    value = {values[input.name]}
                                    onChange = {(e) => setFieldValue(input.name, e.target.value)}
                            />
    
                            { 
                                errors[input.name] && (
                                        <p style={{color: "red", fontSize: "12px", padding: 0, margin: 0}}>
                                            {errors[input.name]}
                                        </p> 
                                )
                            }
                            </Container>
    
    
            )
        )}
    
            {/* </form> */}
    
            <Container content="row">
              {/* <Button btn="cancel">Cancel</Button> */}
                <Button type='submit' size="small" variant="contained">Enviar</Button>
              {/* <Button form="form" btn="submit">Submit</Button> */}
            </Container>
            </Box>
            {/* </Container> */}
            </div>    


            ) : (
                <Typography> 
                    Gracias {values.name}, te contactaremos cuando antes vía mail
                </Typography>


            )}
        </Container>


            )};
            

export default Form

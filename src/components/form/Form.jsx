import React from "react";
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { Container, Button, Typography, Input } from '@mui/material/'



const inputs = [
    { id: 1, label: "Nombre", placeholder: "Nombre", name: "name" },
    { id: 2, label: "Email", placeholder: "Email", name: "email" }
]


const Form = ({ handleFetchValues }) => {
    const getInitialValues = () => ({
        name: "",
        email: ""
    })




const getValidationSchema = () => (
  Yup.lazy(() =>
  Yup.object().shape({
      name: Yup.string()
      .min(3, 'Tu nombre tiene que tener 3 caracteres como minimo porque la vida es asi.')
      .required("Campo Obligatorio")
      .trim("No debe tener espacios en blanco.").strict(),
      email: Yup.string.email()
      .max(100, 'Debe ingresar tu correo electronico')
      .required('Campo Obligatorio')
  })))


const onSubmit = (values) => {
  console.log(values);
  handleFetchValues(values);

}

  const { values, setFieldValue, errors, handleSubmit } = useFormik({
      initialValues: getInitialValues(),
      validationSchema: getValidationSchema(),
      validateOnChange: false,
      validateOnBlur: false,
      onSubmit
  })

  return (
    <div>
    <Typography align="center" variant="h4">Formulario de contacto</Typography>
    <Container from="contact">

      <form id="form" onSubmit={handleSubmit}>
      {/* <div style={{ width: "100%", textAlign: "center" }}> */}
      {/* </div> */}
      
      {
          inputs.map(input => (
              <Container key={input.id}>
                  <label style= {{ padding: "15px", width: "400px", textAlign: "center", fontFamily: "Arial", fontSize: "18px"}}>{input.label}</label>
                  <Input 
                      name = {input.name}
                      placeholder = {input.placeholder}
                      value = {values[input.name]}
                      onChange = {(e) => setFieldValue(input.name, e.target.value)}
              />

              { 
                  errors[input.name] && (
                          <p style={{color: "#FF5733", fontSize: "12px", padding: 0, margin: 0}}>
                              {errors[input.name]}
                          </p> 
                  )
              }
              </Container>


      )
)}

      </form>

      <Container content="row">
          {/* <Button btn="cancel">Cancel</Button> */}
          <Button variant="contained">Submit</Button>
          {/* <Button form="form" btn="submit">Submit</Button> */}
      </Container>
      </Container>
      </div>

  )}
          

export default Form

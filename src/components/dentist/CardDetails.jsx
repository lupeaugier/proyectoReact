import React from "react";
import { useGetData } from "../../hooks/UseGetData";
import { Card, CardContent, Typography, CardActions, Button, Avatar } from '@mui/material';
import Doctor from "../../assets/img/doctor.jpeg"
import { useNavigate, useParams } from "react-router-dom";
import { endpoint } from "../../pages/Home";


export const CardDetails= () => {

    const { id } = useParams();
    const { values } = useGetData(`${endpoint}/${id}`)
    const navigate = useNavigate();

    return (
            <Card sx={{ width: "20vw" }}>
                <CardContent 
                    key={values?.id} 
                >
                    <Avatar alt={values?.name} src={Doctor} />
                    <Typography variant="body2">
                        {values?.name}
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        {values?.email}
                    </Typography>
                    <Typography variant="body2">
                        {values?.phone}
                    </Typography>
                    <Typography variant="body2">
                        {values?.website}
                    </Typography>
                </CardContent>
                <CardActions>
                            <Button size="small" onClick={() => navigate(-1)}>Volver</Button>
                </CardActions>
            </Card>
                );        
}
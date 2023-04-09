import React, { useState } from "react";
import { useGetData } from "../../hooks/UseGetData";
import { Card, CardContent, Box, Typography, CardActions, Button, Avatar } from '@mui/material';
import Doctor from "../../assets/img/doctor.jpeg"
import { useNavigate, useParams } from "react-router-dom";
import FavoriteButton from "../favorite-button/FavoriteButton";
import { endpoint } from "../../pages/Home";


export const CardDetails= () => {

    const { id } = useParams();
    const { values } = useGetData(`${endpoint}/${id}`)
    const navigate = useNavigate();

    return (
                    <Card sx={{ minWidth: 275 }}>
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
                            {/* <FavoriteButton values={values} /> */}
                        </CardActions>
                        </Card>
                );        
}
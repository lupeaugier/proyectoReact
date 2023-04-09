import React, { useState } from "react";
import { Link } from "react-router-dom";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export const endpoint = "https://jsonplaceholder.typicode.com/users";

export const CardDentist= () => {

    //falta logica de como traer las cosas
    //Asi hay que traer las cosas?
    const { values } = useGetData(endpoint);

    return (


        <Card sx={{ minWidth: 275 }}>

            {
                values?.map((item) => (
          
                        <CardContent 
                            key={item?.id}
                        >
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                            {item?.id}
                        </Typography>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                            {item?.username}
                        </Typography>
                        <Typography variant="body2">
                            {item?.name}
                        </Typography>
                        <Link to={`/users/${item.id}`}>Ver mas:</Link>

                        </CardContent>
              
                
                ))}

        </Card>
    );        
}
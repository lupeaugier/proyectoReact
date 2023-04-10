import React from "react";
import { Card, CardContent, Box, Typography, CardMedia, CardActions, Button } from '@mui/material';
import Doctor from "../../assets/img/doctor.jpeg"
import { useNavigate } from "react-router-dom";
import FavoriteButton from "../favorite-button/FavoriteButton";


export const CardDentist = ({ values }) => {

    const navigate = useNavigate ();

    return (

        <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "20px", marginBottom: "30px" }}>
            {
                values?.map((item) => (
                    <Card sx={{ minWidth: 275 }} key={item.id}>
                        <CardContent>
                            <CardMedia
                                component="img"
                                height="194"
                                image={Doctor}
                                alt="dentista"
                            />
                            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                {item?.username}
                            </Typography>
                            <Typography variant="body2">
                                {item?.name}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small" onClick={() => navigate(`/dentist/${item?.id}`)}>Ver mas</Button>
                            <FavoriteButton item={item} />
                        </CardActions>
                        </Card>
                ))}
        </Box>
    );        
}
import React  from 'react'
import Lupe from '../assets/img/Lupe.jpeg'
import Flor from '../assets/img/Flor.png'


import { Container, Typography, Paper, Avatar, Stack, Chip }  from '@mui/material';

const Footer = () => {

    return (
        <Paper sx={
            {marginTop: '10px',
            position: 'fixed',
            display: 'flex',
            justifyContent: 'center',
            bottom: 0,
            width: '100%'}} 
            component="footer" >
            <Stack paddingTop= "30px" paddingBottom = "30px" direction="row" spacing={2} >
                <Container>
                <Chip
                    avatar={<Avatar alt="Flor Müller" src={Flor} />}
                    label="Flor Müller"
                    variant="outlined"
                />

                </Container>
                <Container>
                <Chip
                    avatar={<Avatar alt="Lupe Augier" src={Lupe} />}
                    label="Lupe Augier"
                    variant="outlined"
                />
                </Container>
            </Stack>
        </Paper>

    )
}

export default Footer;
import React from 'react'
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Lupe from '../assets/img/Lupe.jpeg'
import Flor from '../assets/img/Flor.png'

import { Container, Typography }  from '@mui/material';


const Footer = () => {

    return (
        <Stack paddingTop= "100px" direction="row" spacing={2}>
            <Container>
            <Avatar alt="Flor Müller" src={Flor} />
            <Typography variant='h6' align='center'>Flor Müller</Typography>

            </Container>
            <Container>

            <Avatar alt="Lupe Augier" src={Lupe} />
            <Typography variant='h6' align='center'>Lupe Augier</Typography>
            </Container>
        </Stack>




    )
}

export default Footer;
import React from 'react'
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { Container, Typography }  from '@mui/material';


const Footer = () => {

    return (
        <Stack paddingTop= "100px" direction="row" spacing={2}>
            <Container>
            <Avatar alt="Flor Muller" src="https://media.licdn.com/dms/image/D4D35AQHj_E2p8mBslg/profile-framedphoto-shrink_800_800/0/1623762382019?e=1681592400&v=beta&t=DAigUK_SyMN7LI5EFr5ijAm7wZ68EA4o75pse-0RvEo" />
            <Typography variant='h6' align='center'>Flor Muller</Typography>

            </Container>
            <Container>

            <Avatar alt="Lupe Augier" src="https://media.licdn.com/dms/image/C4D03AQG1DJqJ0NDa8w/profile-displayphoto-shrink_800_800/0/1599775535399?e=1686182400&v=beta&t=VaJTXHhWg9dsZHYlmD2GsKmJ2PDvD7b8XE9gmTSZ-Nw" />
            <Typography variant='h6' align='center'>Lupe Augier</Typography>
            </Container>
        </Stack>




    )
}

export default Footer;
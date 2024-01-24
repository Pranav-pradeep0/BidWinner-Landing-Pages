import { Box, CardMedia, Typography } from '@mui/material';
import React, { Fragment } from 'react';
import AboutUsBlock from './About Page Components/AboutUsBlock';
import WhoWeAre from './About Page Components/WhoWeAre';
import Mission from './About Page Components/Mission';
import Values from './About Page Components/Values';
import NeedHelp from './About Page Components/NeedHelp';

const AboutPage = () => {
    return (
        <Fragment>
            <Box
                sx={{
                    position: 'relative',
                    width: '100%',
                    height: '481px',
                    '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        background: 'linear-gradient(90deg, rgba(71, 118, 230, 0.6) 0%, rgba(142, 84, 233, 0.6) 100%)',
                        zIndex: 1,
                    },
                }}
            >
                <Box sx={{ position: 'absolute',zIndex:'2', display:'grid',width:'100%',height:'100%' , placeItems:'center' ,textAlign:'center'}}>
                    <Box>
                        <Typography sx={{color:'white', fontSize:{xs:'42px', md:'52px'}, fontWeight:'300'}}>BUILDING THE</Typography>
                        <Typography sx={{color:'white', fontSize:{xs:'52px', md:'72px'}, fontWeight:'600'}}>BEST ESTIMATION SOFTWARE</Typography>
                    </Box> 
                </Box>
                <CardMedia
                    component="img"
                    sx={{ width: '100%', height: '481px' }}
                    image="https://i.postimg.cc/ZRDcxnBz/Rectangle-140.png"
                />
            </Box>
            <AboutUsBlock></AboutUsBlock>
            <WhoWeAre></WhoWeAre>
            <Mission></Mission>
            <Values></Values>
            <NeedHelp></NeedHelp>
        </Fragment>
    );
};

export default AboutPage;

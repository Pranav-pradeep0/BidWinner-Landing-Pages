import { Box, CardMedia, Typography } from '@mui/material'
import React, { Fragment } from 'react'
import Help from './Contact Us Page Components/Help'
import ContactQuote from './Contact Us Page Components/ContactQuote'
import CompanyDetails from './Contact Us Page Components/CompanyDetails'

const ContactUsPage = () => {
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
                <Box sx={{ position: 'absolute', zIndex: '2', display: 'grid', width: '100%', height: '100%', placeItems: 'center', textAlign: 'center' }}>
                    <Box>
                        <Typography sx={{ color: 'white', fontSize: { xs: '42px', md: '52px' }, fontWeight: '300' }}>BUILDING THE</Typography>
                        <Typography sx={{ color: 'white', fontSize: { xs: '52px', md: '72px' }, fontWeight: '600' }}>BEST ESTIMATION SOFTWARE</Typography>
                    </Box>
                </Box>
                <CardMedia
                    component="img"
                    sx={{ width: '100%', height: '481px' }}
                    image="https://i.postimg.cc/ZRDcxnBz/Rectangle-140.png"
                />
            </Box>
            <Help></Help>
            <ContactQuote></ContactQuote>
            <CompanyDetails></CompanyDetails>
        </Fragment>
    )
}

export default ContactUsPage
import { Box, CardMedia, Typography } from '@mui/material'
import React, { Fragment } from 'react'
import Prices from './Pricing Plan Components/Prices'
import SubscriptionFeatures from './Pricing Plan Components/SubscriptionFeatures'
import NeedHelp from './About Page Components/NeedHelp';
import NeedHelpPricing from './Pricing Plan Components/NeedHelpPricing';

const PricingPlans = () => {
    return (
        <Box sx={{backgroundColor:'#F2F6F9',}}>
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
                        <Typography sx={{ color: 'white', fontSize: { xs: '52px', md: '72px' }, fontWeight: '600',textShadow: '0px 2px 4px 0px rgba(0, 0, 0, 0.25)', }}>SUBSCRIPTION PLANS</Typography>
                    </Box>
                </Box>
                <CardMedia
                    component="img"
                    sx={{ width: '100%', height: '481px' }}
                    image="https://i.postimg.cc/ZRDcxnBz/Rectangle-140.png"
                />
            </Box>
            <Box sx={{paddingBlock:'60px'}}>
                <Prices></Prices>
                <SubscriptionFeatures></SubscriptionFeatures>
            </Box>
            <NeedHelpPricing></NeedHelpPricing>
        </Box>
    )
}

export default PricingPlans
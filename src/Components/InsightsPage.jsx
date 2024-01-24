import { Box, CardMedia, Typography } from '@mui/material'
import React from 'react'
import InsightTabs from './Insight Page Components/InsightTabs'

const InsightsPage = () => {
    return (
        <Box>
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
                        <Typography sx={{ color: 'white', fontSize: { xs: '52px', md: '72px' }, fontWeight: '600' }}>INSIGHTS</Typography>
                    </Box>
                </Box>
                <CardMedia
                    component="img"
                    sx={{ width: '100%', height: '481px' }}
                    image="https://i.postimg.cc/ZRDcxnBz/Rectangle-140.png"
                />
            </Box>
            <Box sx={{width:'75%', marginInline:'auto', paddingBlock:'60px'}}>
                <InsightTabs></InsightTabs>
            </Box>
        </Box>
    )
}

export default InsightsPage
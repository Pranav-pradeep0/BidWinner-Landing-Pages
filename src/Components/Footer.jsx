import { Box, CardMedia, Typography } from '@mui/material'
import React from 'react'

const Footer = () => {
    return (
        <Box sx={{ backgroundColor: '#1A1A1A', height: '113px', width: '100%', display:'flex',  }}>
            <Box sx={{display:'flex' , alignItems:'center', marginInline:'auto', flexWrap:'wrap', justifyContent:'center'}}>
                <Box sx={{display:'flex',alignItems:'center'}}>
                    <CardMedia
                        component="img"
                        sx={{ width: '33px', height: '33px', }}
                        image="https://i.postimg.cc/66FYvZTx/Mask-group.png"
                        alt="Paella dish"
                    />
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="#app-bar-with-responsive-menu"
                        sx={{
                            m: 2,
                            fontFamily: 'Khand, sans-serif',
                            fontWeight: 700,
                            color: 'white',
                            fontSize: '18px',
                            textDecoration: 'none',
                        }}
                    >
                        REAL COST ESTIMATING INC
                    </Typography>
                </Box>
                <Box>
                    <Typography color='white' sx={{textAlign:'center'}}>Copyright © 2010-2023 Real Cost Estimating Company. All rights reserved.</Typography>
                </Box>
            </Box>
        </Box>
    )
}

export default Footer
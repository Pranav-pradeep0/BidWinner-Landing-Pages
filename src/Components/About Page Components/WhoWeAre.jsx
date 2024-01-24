import { Box, CardMedia, Typography } from '@mui/material'
import React from 'react'

const WhoWeAre = () => {
    return (
        <Box sx={{ backgroundColor: 'white', paddingBlock:{xs:'50px'} }}>
            <Box sx={{ display: 'flex', minHeight: '660px', width: { xs: '100%', md: 'max-content' }, flexDirection: { xs: 'column', md: 'row', }, justifyContent: 'space-around', alignItems: 'center', marginInline: 'auto', gap: '60px' }}>

                <Box sx={{ maxWidth: '570px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    <Typography sx={{ fontWeight: '300', fontSize: '30px' }}>Who We Are</Typography>
                    <Typography sx={{ fontWeight: '600', fontSize: '38px' }}>Lorem ipsum dolor sit amet consectetur</Typography>
                    <Typography sx={{ textWrap: 'wrap', fontSize: '18px', fontWeight: '300' }}>Lorem ipsum dolor sit amet consectetur. Condimentum tincidunt blandit et leo leo pellentesque sit. Eleifend at arcu amet senectus id. Adipiscing nulla leo mauris sit augue justo tempus. Mauris diam aliquam eget fermentum habitasse cras non non in.</Typography>
                </Box>

                <Box sx={{}}>
                <CardMedia
                    component="img"
                    image="https://i.postimg.cc/FsS1243b/Mac-Book-Pro-17.png"
                />
                </Box>
            </Box>
        </Box>
    )
}

export default WhoWeAre
import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const NeedHelpPricing = () => {
    return (
        <Box sx={{ backgroundColor: 'white', paddingBlock: { xs: '50px' } }}>
            <Box sx={{ display: 'flex', minHeight: '300px', width: { xs: '100%', md: 'max-content' }, flexDirection: 'column', justifyContent: 'space-around', alignItems: 'center', marginInline: 'auto', gap: '60px' }}>
                <Box sx={{ display: 'grid', gap: '10px', textAlign: 'center' }}>
                    <Typography sx={{ fontWeight: '600', fontSize: '42px' }}>Need Help</Typography>
                    <Typography>Always feel free to contact our team</Typography>
                    <Link style={{ textDecoration: 'none', color: 'inherit' }} to={'/contactus'}>
                        <Button sx={{ width: 'max-content', marginInline: 'auto', paddingInline: '20px', paddingBlock: '12px', borderRadius: '12px', marginTop: '15px', background: 'linear-gradient(90deg, #4776E6 0%, #7B54E9 100%);' }} variant='contained'>
                            Contact Us
                        </Button>
                    </Link>
                </Box>
            </Box>
        </Box>
    )
}

export default NeedHelpPricing
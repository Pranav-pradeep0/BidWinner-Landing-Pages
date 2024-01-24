import { Box, Button, TextField, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const ContactQuote = () => {
    return (
        <Box sx={{ backgroundColor: '#F2F6F9', paddingBlock: { xs: '50px' } }}>
            <Box sx={{ maxWidth: '660px', marginInline: 'auto' }}>
                <Box sx={{ display: 'grid', gap: '10px' }}>
                    <Typography sx={{ fontWeight: '700', fontSize: '36px', textAlign: 'center' }}>Contact Us</Typography>
                    <Typography sx={{ fontWeight: '300', fontSize: '22px', textAlign: 'center' }}>Submit your questions, Feedback and Suggestions</Typography>
                </Box>

                <Box sx={{ marginTop: '60px', paddingInline: { xs: '20px', md: '0' }, display: 'grid', gap: '25px' }}>

                    <Box sx={{ display: 'flex', flexWrap: { xs: 'wrap', md: 'nowrap', gap: '20px' }, justifyContent: 'space-evenly', width: '100%', }}>
                        <Box sx={{ flexGrow: '1', display: 'grid', gap: '10px' }}>
                            <Typography>First Name <span style={{ color: 'red' }}>*</span></Typography>
                            <TextField fullWidth id="outlined-basic" label="First name" variant="outlined"  sx={{backgroundColor:'white',}}/>
                        </Box>

                        <Box sx={{ flexGrow: '1', display: 'grid', gap: '10px' }}>
                            <Typography>Second Name <span style={{ color: 'red' }}>*</span></Typography>
                            <TextField fullWidth id="outlined-basic" label="Second name" variant="outlined" sx={{backgroundColor:'white',}} />
                        </Box>
                    </Box>

                    <Box sx={{ display: 'grid', gap: '10px' }}>
                        <Typography>Email <span style={{ color: 'red' }}>*</span></Typography>
                        <TextField fullWidth id="outlined-basic" label="Enter your email" variant="outlined" sx={{backgroundColor:'white',}}/>
                    </Box>

                    <Box sx={{ display: 'grid', gap: '10px' }}>
                        <Typography>Phone <span style={{ color: 'red' }}>*</span></Typography>
                        <TextField fullWidth id="outlined-basic" label="Your phone number" variant="outlined" sx={{backgroundColor:'white',}}/>
                    </Box>

                    <Box sx={{ display: 'grid', gap: '10px' }}>
                        <Typography>Company <span style={{ color: 'red' }}>*</span> </Typography>
                        <TextField fullWidth id="outlined-basic" label="Your company name" variant="outlined" sx={{backgroundColor:'white',}}/>
                    </Box>

                    <Box sx={{ display: 'grid', gap: '10px' }}>
                        <Typography>Message <span style={{ color: 'red' }}>*</span></Typography>
                        <TextField
                            fullWidth
                            id="outlined-multiline-static"
                            label="MultilineEnter your message, questions, suggestions or feedback"
                            multiline
                            rows={4}
                            sx={{backgroundColor:'white',}}
                        />
                    </Box>

                    <Typography sx={{ fontWeight: '300', fontSize: '11px', width: '90%', marginInline: 'auto' }}>We will handle your personal data as described in our
                        <Link style={{paddingInline:'5px', textDecoration:'none', fontWeight:'600',color:'#3153CD'}}>Privacy Policy</Link>
                        to answer your question and provide information about our products and services.
                    </Typography>

                    <Button variant='contained' sx={{borderRadius:'10px', width:'max-content', marginLeft:'auto', paddingInline:'50px', paddingBlock:'10px'}}>Send</Button>
                    
                </Box>
            </Box>
        </Box>
    )
}

export default ContactQuote
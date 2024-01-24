import { Box, Button, Typography } from '@mui/material'
import React from 'react'

const Prices = () => {
    return (
        <Box sx={{ maxWidth: 'max-content', marginInline: 'auto', display: 'flex', justifyContent: 'space-evenly', padding: '30px', gap: '30px', flexWrap: { xs: 'wrap', md: 'nowrap' } }}>

            <Box sx={{
                backgroundColor: 'white', alignItems: 'center', display: 'flex', flexDirection: 'column', gap: '10px', paddingBlock: '30px', textAlign: 'center', borderRadius: '12px',
                boxShadow: '3px 3px 8px 0px rgba(0, 0, 0, 0.06)', width: '280px', height: '200px', justifyContent: 'space-evenly'
            }}>
                <Typography sx={{ fontWeight: '600', fontSize: '20px', color: '#038A00' }}>FREE TRIAL</Typography>
                <Typography sx={{ fontWeight: '700', fontSize: '42px' }}>0$</Typography>
                <Typography sx={{ opacity: '50%' }}>Try Bidwinner free for 7 days</Typography>
                <Button variant='contained' sx={{ textTransform: 'none', fontSize: '16px' }}>Start Free Trial</Button>
            </Box>
            <Box sx={{position:'relative',display:'flex' ,justifyContent:'center'}}>
                <Box sx={{
                    backgroundColor: 'white', alignItems: 'center', display: 'flex', flexDirection: 'column', gap: '10px', paddingBlock: '30px', textAlign: 'center', borderRadius: '12px',
                    boxShadow: '3px 3px 8px 0px rgba(0, 0, 0, 0.06)', width: '280px', height: '200px', justifyContent: 'space-evenly', 
                }}>
                    <Typography sx={{ fontWeight: '600', fontSize: '20px', color: '#038A00' }}>YEARLY</Typography>
                    <Typography sx={{ fontWeight: '700', fontSize: '42px' }}>80$<small style={{ fontWeight: '300', fontSize: '20px' }}>/ Year</small></Typography>
                    <Typography sx={{ opacity: '50%' }}>Costs you only 10$ per month</Typography>
                    <Button variant='contained' sx={{ textTransform: 'none', fontSize: '16px' }}>Subscribe Now</Button>
                </Box>

                <Box sx={{position:'absolute', top:'-15px', marginInline:'auto'}}>
                    <svg width="153" height="26" viewBox="0 0 153 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="153" height="26" rx="4" fill="#F09819" />
                        <g filter="url(#filter0_d_2249_1822)">
                            <path d="M16.104 18L13.864 14.108H12.646V18H11.05V8.27H14.41C15.1567 8.27 15.7867 8.40067 16.3 8.662C16.8227 8.92333 17.21 9.27333 17.462 9.712C17.7233 10.1507 17.854 10.6407 17.854 11.182C17.854 11.8167 17.6673 12.3953 17.294 12.918C16.93 13.4313 16.3653 13.7813 15.6 13.968L18.008 18H16.104ZM12.646 12.834H14.41C15.0073 12.834 15.4553 12.6847 15.754 12.386C16.062 12.0873 16.216 11.686 16.216 11.182C16.216 10.678 16.0667 10.286 15.768 10.006C15.4693 9.71667 15.0167 9.572 14.41 9.572H12.646V12.834ZM21.4917 9.558V12.414H24.8517V13.716H21.4917V16.698H25.2717V18H19.8957V8.256H25.2717V9.558H21.4917ZM26.7055 13.114C26.7055 12.162 26.9248 11.308 27.3635 10.552C27.8115 9.796 28.4135 9.208 29.1695 8.788C29.9348 8.35867 30.7702 8.144 31.6755 8.144C32.7115 8.144 33.6308 8.40067 34.4335 8.914C35.2455 9.418 35.8335 10.1367 36.1975 11.07H34.2795C34.0275 10.5567 33.6775 10.174 33.2295 9.922C32.7815 9.67 32.2635 9.544 31.6755 9.544C31.0315 9.544 30.4575 9.68867 29.9535 9.978C29.4495 10.2673 29.0528 10.6827 28.7635 11.224C28.4835 11.7653 28.3435 12.3953 28.3435 13.114C28.3435 13.8327 28.4835 14.4627 28.7635 15.004C29.0528 15.5453 29.4495 15.9653 29.9535 16.264C30.4575 16.5533 31.0315 16.698 31.6755 16.698C32.2635 16.698 32.7815 16.572 33.2295 16.32C33.6775 16.068 34.0275 15.6853 34.2795 15.172H36.1975C35.8335 16.1053 35.2455 16.824 34.4335 17.328C33.6308 17.832 32.7115 18.084 31.6755 18.084C30.7608 18.084 29.9255 17.874 29.1695 17.454C28.4135 17.0247 27.8115 16.432 27.3635 15.676C26.9248 14.92 26.7055 14.066 26.7055 13.114ZM42.5036 18.098C41.5983 18.098 40.763 17.888 39.9976 17.468C39.2416 17.0387 38.6396 16.446 38.1916 15.69C37.753 14.9247 37.5336 14.066 37.5336 13.114C37.5336 12.162 37.753 11.308 38.1916 10.552C38.6396 9.796 39.2416 9.208 39.9976 8.788C40.763 8.35867 41.5983 8.144 42.5036 8.144C43.4183 8.144 44.2536 8.35867 45.0096 8.788C45.775 9.208 46.377 9.796 46.8156 10.552C47.2543 11.308 47.4736 12.162 47.4736 13.114C47.4736 14.066 47.2543 14.9247 46.8156 15.69C46.377 16.446 45.775 17.0387 45.0096 17.468C44.2536 17.888 43.4183 18.098 42.5036 18.098ZM42.5036 16.712C43.1476 16.712 43.7216 16.5673 44.2256 16.278C44.7296 15.9793 45.1216 15.5593 45.4016 15.018C45.691 14.4673 45.8356 13.8327 45.8356 13.114C45.8356 12.3953 45.691 11.7653 45.4016 11.224C45.1216 10.6827 44.7296 10.2673 44.2256 9.978C43.7216 9.68867 43.1476 9.544 42.5036 9.544C41.8596 9.544 41.2856 9.68867 40.7816 9.978C40.2776 10.2673 39.881 10.6827 39.5916 11.224C39.3116 11.7653 39.1716 12.3953 39.1716 13.114C39.1716 13.8327 39.3116 14.4673 39.5916 15.018C39.881 15.5593 40.2776 15.9793 40.7816 16.278C41.2856 16.5673 41.8596 16.712 42.5036 16.712ZM59.2921 8.27V18H57.6961V11.336L54.7281 18H53.6221L50.6401 11.336V18H49.0441V8.27H50.7661L54.1821 15.9L57.5841 8.27H59.2921ZM62.9858 9.558V12.414H66.3458V13.716H62.9858V16.698H66.7658V18H61.3898V8.256H66.7658V9.558H62.9858ZM76.7256 18H75.1296L70.3276 10.734V18H68.7316V8.256H70.3276L75.1296 15.508V8.256H76.7256V18ZM81.9995 8.27C83.0355 8.27 83.9408 8.47067 84.7155 8.872C85.4995 9.264 86.1015 9.83333 86.5215 10.58C86.9508 11.3173 87.1655 12.1807 87.1655 13.17C87.1655 14.1593 86.9508 15.018 86.5215 15.746C86.1015 16.474 85.4995 17.034 84.7155 17.426C83.9408 17.8087 83.0355 18 81.9995 18H78.8215V8.27H81.9995ZM81.9995 16.698C83.1382 16.698 84.0108 16.39 84.6175 15.774C85.2242 15.158 85.5275 14.29 85.5275 13.17C85.5275 12.0407 85.2242 11.1587 84.6175 10.524C84.0108 9.88933 83.1382 9.572 81.9995 9.572H80.4175V16.698H81.9995ZM90.3433 9.558V12.414H93.7033V13.716H90.3433V16.698H94.1233V18H88.7473V8.256H94.1233V9.558H90.3433ZM99.2671 8.27C100.303 8.27 101.208 8.47067 101.983 8.872C102.767 9.264 103.369 9.83333 103.789 10.58C104.218 11.3173 104.433 12.1807 104.433 13.17C104.433 14.1593 104.218 15.018 103.789 15.746C103.369 16.474 102.767 17.034 101.983 17.426C101.208 17.8087 100.303 18 99.2671 18H96.0891V8.27H99.2671ZM99.2671 16.698C100.406 16.698 101.278 16.39 101.885 15.774C102.492 15.158 102.795 14.29 102.795 13.17C102.795 12.0407 102.492 11.1587 101.885 10.524C101.278 9.88933 100.406 9.572 99.2671 9.572H97.6851V16.698H99.2671ZM116.456 11.168C116.456 11.6627 116.339 12.1293 116.106 12.568C115.872 13.0067 115.499 13.366 114.986 13.646C114.472 13.9167 113.814 14.052 113.012 14.052H111.248V18H109.652V8.27H113.012C113.758 8.27 114.388 8.40067 114.902 8.662C115.424 8.914 115.812 9.25933 116.064 9.698C116.325 10.1367 116.456 10.6267 116.456 11.168ZM113.012 12.75C113.618 12.75 114.071 12.6147 114.37 12.344C114.668 12.064 114.818 11.672 114.818 11.168C114.818 10.104 114.216 9.572 113.012 9.572H111.248V12.75H113.012ZM119.574 16.712H122.864V18H117.978V8.27H119.574V16.712ZM130.064 16.012H125.99L125.29 18H123.624L127.11 8.256H128.958L132.444 18H130.764L130.064 16.012ZM129.616 14.71L128.034 10.188L126.438 14.71H129.616ZM141.954 18H140.358L135.556 10.734V18H133.96V8.256H135.556L140.358 15.508V8.256H141.954V18Z" fill="white" />
                        </g>
                        <defs>
                            <filter id="filter0_d_2249_1822" x="10.0498" y="8.14404" width="132.904" height="11.9541" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                <feOffset dy="1" />
                                <feGaussianBlur stdDeviation="0.5" />
                                <feComposite in2="hardAlpha" operator="out" />
                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2249_1822" />
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2249_1822" result="shape" />
                            </filter>
                        </defs>
                    </svg>
                </Box>
            </Box>
            <Box sx={{
                backgroundColor: 'white', alignItems: 'center', display: 'flex', flexDirection: 'column', gap: '10px', paddingBlock: '30px', textAlign: 'center', borderRadius: '12px',
                boxShadow: '3px 3px 8px 0px rgba(0, 0, 0, 0.06)', width: '280px', height: '200px', justifyContent: 'space-evenly'
            }}>
                <Typography sx={{ fontWeight: '600', fontSize: '20px', color: '#038A00' }}>MONTHLY</Typography>
                <Typography sx={{ fontWeight: '700', fontSize: '42px' }}>12$<small style={{ fontWeight: '300', fontSize: '20px' }}>/ month</small></Typography>
                <Typography sx={{ opacity: '50%' }}>per every month</Typography>
                <Button variant='contained' sx={{ textTransform: 'none', fontSize: '16px' }}>Subscribe Now</Button>
            </Box>

        </Box>

    )
}

export default Prices
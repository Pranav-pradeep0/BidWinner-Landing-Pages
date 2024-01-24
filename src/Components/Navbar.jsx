import { AppBar, Box, Button, CardMedia, Container, IconButton, Menu, MenuItem, Toolbar, Typography } from '@mui/material';
import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import { Link, useLocation } from 'react-router-dom';

const pages = [
    { label: 'About BidWinner', path: '/' },
    { label: 'Contact Us', path: '/contactus' },
    { label: 'Pricing Plans', path: '/pricing' },
    { label: 'Insights', path: '/insights' },
];

const Navbar = () => {

    const location = useLocation();
    const currentPath = location.pathname;

    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <AppBar position="static" sx={{ backgroundColor: 'white', color: 'black' }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <CardMedia
                        component="img"
                        sx={{ width: '33px', height: '33px', display: { xs: 'none', md: 'flex' } }}
                        image="https://i.postimg.cc/YSYzYmvL/LOGO2-2.png"
                        alt="Paella dish"
                    />
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            m: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'Khand, sans-serif',
                            fontWeight: 700,
                            color: 'inherit',
                            fontSize: '18px',
                            textDecoration: 'none',
                        }}
                    >
                        REAL COST ESTIMATING INC
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {pages.map((page) => (
                                <MenuItem key={page.label} onClick={handleCloseNavMenu}>
                                    <Typography textAlign="center">{page.label}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    <CardMedia
                        component="img"
                        sx={{ width: '33px', height: '33px', display: { xs: 'flex', md: 'none' }, mr: 1 }}
                        image="https://i.postimg.cc/YSYzYmvL/LOGO2-2.png"
                        alt="Paella dish"
                    />
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href="#app-bar-with-responsive-menu"
                        sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            fontFamily: 'Khand, sans-serif',
                            fontWeight: 700,
                            color: 'inherit',
                            fontSize: '18px',
                            textDecoration: 'none',
                            textWrap: 'wrap'
                        }}
                    >
                        REAL COST ESTIMATING INC
                    </Typography>
                    <Box sx={{ flexGrow: 1, gap: '20px', display: { xs: 'none', md: 'flex' }, marginLeft: { md: '30px' } }}>
                        {pages.map((page) => (
                            <Link key={page.label} to={page.path} style={{ textDecoration: 'none', color: 'inherit' }}>
                                <div onClick={handleCloseNavMenu}>
                                    <Button
                                        sx={{
                                            my: 2,
                                            display: 'block',
                                            color: 'inherit',
                                            fontWeight: currentPath === page.path ? '700' : 'normal',
                                            textDecoration: currentPath === page.path ? 'underline' : 'none',
                                            fontSize:'16px'
                                        }}
                                    >
                                        {page.label}
                                    </Button>
                                </div>
                            </Link>
                        ))}
                    </Box>

                    <Box sx={{ flexGrow: 0 }}>
                        <Button variant='primary' sx={{background:'linear-gradient(90deg, #4776E6 0%, #7B54E9 100%)', color:'white', marginBlock:'10px'}}>Login To Bidwinner</Button>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default Navbar
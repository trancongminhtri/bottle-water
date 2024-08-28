import React from 'react';
import { useState } from 'react';
import { AppBar, Box, Toolbar, Container} from '@mui/material';
import { ShoppingBag as ShoppingBagIcon, Menu as MenuIcon, ExpandMore as ExpandMoreIcon } from '@mui/icons-material';
import { ButtonUtils } from '../../utils/ButtonUtils';
import logo from '/src/assets/images/logo-small.png';

const pages = ['Trang chủ', 'Sản phẩm', 'Về chúng tôi', 'Chính sách'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];
const phoneNumber = '0937377268';

function NavBar() {
    // app bar
    const { ButtonNavBar, ButtonNumberPhone } = ButtonUtils;
    const [anchorElNav, setAnchorElNav] = useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    //menu


    return (
        <>
            <AppBar position="static" sx={{ background: 'linear-gradient(to right, #342e70 0, #2c64aa 25%, #1f7bb9 100%)' }}>
                <Container maxWidth="lg">
                    <Toolbar disableGutters variant="dense" >
                        <Box sx={{ flexGrow: 1, display: 'flex' }}>
                            <ButtonNavBar
                                onClick={handleCloseNavMenu}
                                disableRipple
                            > Trang chủ </ButtonNavBar>

                            <ButtonNavBar
                                onClick={handleCloseNavMenu}
                                endIcon={<ExpandMoreIcon />}
                                disableRipple
                                sx={{
                                    '&:after': {
                                        content: "''",
                                        position: 'absolute',
                                        top: 'auto',
                                        left: '0',
                                        width: '1px',
                                        height: '15px',
                                        borderLeft: '1px solid rgba(255, 255, 255, .5)',
                                    }
                                }}
                            >  Sản phẩm </ButtonNavBar>


                            <ButtonNavBar
                                onClick={handleCloseNavMenu}
                                endIcon={<ExpandMoreIcon />}
                                disableRipple
                                sx={{
                                    '&:after': {
                                        content: "''",
                                        position: 'absolute',
                                        top: 'auto',
                                        left: '0',
                                        width: '1px',
                                        height: '15px',
                                        borderLeft: '1px solid rgba(255, 255, 255, .5)',
                                    }
                                }}
                            > Về chúng tôi </ButtonNavBar>

                            <ButtonNavBar
                                onClick={handleCloseNavMenu}
                                endIcon={<ExpandMoreIcon sx={{ m: 0 }} />}
                                disableRipple
                                sx={{
                                    '&:after': {
                                        content: "''",
                                        position: 'absolute',
                                        top: 'auto',
                                        left: '0',
                                        width: '1px',
                                        height: '15px',
                                        borderLeft: '1px solid rgba(255, 255, 255, .5)',
                                    }
                                }}
                            > Đổi nước uống gần đây </ButtonNavBar>

                            <ButtonNavBar
                                onClick={handleCloseNavMenu}
                                endIcon={<ExpandMoreIcon />}
                                disableRipple
                                sx={{
                                    '&:after': {
                                        content: "''",
                                        position: 'absolute',
                                        top: 'auto',
                                        left: '0',
                                        width: '1px',
                                        height: '15px',
                                        borderLeft: '1px solid rgba(255, 255, 255, .5)',
                                    }
                                }}
                            > Chính sách </ButtonNavBar>
                        </Box>
                        
                        <Box sx={{ flexGrow: 0 }}>
                            <ButtonNumberPhone disableRipple>HOTLINE: {phoneNumber}</ButtonNumberPhone>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar >

        </>
    );
}
export default NavBar;

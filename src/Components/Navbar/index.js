import { useNavigate , useLocation } from "react-router-dom";
import { useState } from 'react';
import { Container, Box, Typography, Toolbar, Button } from '@mui/material';

import SideMenu from "./SideMenu";
import { styles } from "./styles";
import "./styles.css";

function Navbar() {
    const navigate = useNavigate();
    const location = useLocation();
    const [showMenu, setShowMenu] = useState(false);
    const menuList = [
        { name: "WORK", dir:"/" },
        { name: "ABOUT", dir:"/about" },
        { name: "CONTACT", dir:"/contact" }
    ];

    return (
        <Container maxWidth="x1" sx={styles.navbarContainer}>
            <Toolbar disablegutters='true' sx={styles.navbarToolbar}>
                <Box
                    sx={styles.navbarLogo}
                    className="navbarLogo"
                    onClick={()=>navigate('/')}
                >
                    <Typography
                        sx={styles.navbarLogoText}
                        className="navbarLogoText"
                    >
                        B
                        <br/>
                        H
                    </Typography>
                    <Box
                        component="img"
                        src="/img/logo.png"
                        sx={styles.navbarLogoImg}
                        className="navbarLogoImg"
                    />
                    <Typography
                        sx={styles.navbarLogoText}
                        className="navbarLogoText"
                    >
                        K
                        <br/>
                        J
                    </Typography>
                </Box>
                
                {/* Sidebar Icon Shows */}
                <Button
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="open drawer"
                    onClick={() => setShowMenu(!showMenu)}
                    className="sidebarIconButton"
                >
                    <Box 
                        component="img" 
                        src="/icons/menu.png"
                        sx={styles.sidebarIcon}
                    />
                </Button>

                {/* Sidebar Menu Shows */}
                <SideMenu showMenu={showMenu} setShowMenu={setShowMenu} navigate={navigate} menuList={menuList} />
                
                <Box className="navbarMenu">
                    {menuList.map(({name, dir})=> (
                        <Button
                            key={name}
                            size="large"
                            variant="text"
                            sx={styles.navbarMenuItem}
                            className={dir===location.pathname ? "navbarMenuItemColored" : "navbarMenuItem"}
                            onClick={()=>navigate(dir)}
                        >
                            {name}
                        </Button> 
                    ))}
                </Box>
                

            </Toolbar>
        </Container>
    );
}

export default Navbar;
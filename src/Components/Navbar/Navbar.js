import { useNavigate , Link } from "react-router-dom";
import { useEffect , useState } from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';

import SideMenu from "./SideMenu";
import { styles } from "./styles";
import "./styles.css";

function Navbar() {
    const navigate = useNavigate();
    const [showMenu, setShowMenu] = useState(false);

    useEffect(()=> {
        if(showMenu){
            return console.log("show menu");
        }
        if (!showMenu) console.log("close menu");
    }, [showMenu]);

    return (
        <Container maxWidth="x1" sx={styles.navbarContainer}>
            <Toolbar disablegutters sx={styles.navbarToolbar}>
                <Typography
                    variant="h4"
                    noWrap
                    component="a"
                    href="/"
                    sx={styles.navbarLogo}
                    className="navbarLogo"
                >
                    <span style={styles.navbarLogoLight}>&lt;</span>
                    <span>BK </span>
                    <span style={styles.navbarLogoLight}>/&gt;</span>
                </Typography>
                
                {/* Sidebar Icon Shows */}
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="open drawer"
                    className={`navbarSidebar${showMenu ? 'Expand' : 'Collapse'}`} 
                    onClick={() => setShowMenu(!showMenu)}
                >
                    <MenuIcon/>
                </IconButton>

                {/* Sidebar Menu Shows */}
                <SideMenu showMenu={showMenu} setShowMenu={setShowMenu} />
                
                <Box className="navbarMenu">
                    <Button 
                        size="large"
                        variant="text"
                        sx={styles.navbarMenuItem}
                        className="navbarMenuItem"
                        onClick={() => {navigate("/");}}
                    >
                        WORK
                    </Button>
                    <Button 
                        size="large"
                        variant="text"
                        sx={styles.navbarMenuItem}
                        className="navbarMenuItem"
                        onClick={() => {navigate("/about");}}
                    >
                        ABOUT
                    </Button>
                    <Button 
                        size="large"
                        variant="text"
                        sx={styles.navbarMenuItem}
                        className="navbarMenuItem"
                        onClick={() => {navigate("/contact");}}
                    >
                        CONTACT
                    </Button>
                </Box>
            </Toolbar>
        </Container>
    );
}

export default Navbar;
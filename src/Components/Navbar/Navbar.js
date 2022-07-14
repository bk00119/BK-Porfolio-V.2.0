import { NavLink , useHistory , useParams } from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';

import pageRoutes from "../../Routes/pageRoutes";
import { styles } from "./styles";
import "./styles.css";

function Navbar() {
    return (
        <Container maxWidth="x1">
            <Toolbar disablegutters>
                <Typography
                    variant="h6"
                    noWrap
                    component="a"
                    href="/"
                    sx={styles.navbarLogo}
                >
                    B.Kim
                </Typography>
            </Toolbar>
        </Container>
    );
}

export default Navbar;
import { useLocation  } from "react-router-dom";
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

import { styles } from './styles';
import "./styles.css";

export default function SideMenu({showMenu, setShowMenu, navigate, menuList}) {
    const location = useLocation();
    function changeShowMenu(){
        setShowMenu(!showMenu);
    }

    return (
        <SwipeableDrawer
            anchor='right'
            open={showMenu}
            onClose={()=>changeShowMenu(false)}
            onOpen={()=>changeShowMenu(true)}
        >
            <Box
                sx={{ width: 200 }}
                role="presentation"
                onClick={()=>changeShowMenu(false)}
                onKeyDown={()=>changeShowMenu(true)}
            >
                <List>
                    {menuList.map(({name, dir})=> (
                       <ListItem key={name} alignItems="center" >
                            <ListItemButton
                                onClick={()=>navigate(dir)}
                                className="sideMenuListButton"
                            >
                                {/* <ListItemText primary={name} primaryTypographyProps={styles.sideMenuListItemText} className="sideMenuListItemText" /> */}
                                <ListItemText 
                                    primary={name} 
                                    primaryTypographyProps={styles.sideMenuListItemText} 
                                    // className="sideMenuListItemText" 
                                    className={dir===location.pathname ? "sideMenuListItemTextUnderline" : "sideMenuListItemText"}
                                />
                            </ListItemButton>
                        </ListItem> 
                    ))}
                </List>
            </Box>
        </SwipeableDrawer>
    );
}
import { useLocation  } from "react-router-dom";
import { SwipeableDrawer, Box, List, ListItem, ListItemButton, ListItemText } from '@mui/material';


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
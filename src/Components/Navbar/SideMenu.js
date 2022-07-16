import { useEffect , useState } from 'react';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';



export default function SideMenu({showMenu, setShowMenu}) {
    // const [showMenu, setShowMenu] = useState(showMenu);
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
            <Box>
                alsdjfjf
            </Box>
        </SwipeableDrawer>
    );
}
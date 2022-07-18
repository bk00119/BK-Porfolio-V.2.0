import { blue } from "@mui/material/colors";

export const styles = {
    navbarContainer: {
        mt: 3
    },
    navbarToolbar: {
        justifyContent: 'space-between'
    },
    navbarLogo: {
        display: 'flex',
        alignItems: 'center',
        cursor: 'pointer',
        padding: 1,
        '&:hover': {
            color: 'var(--brown)',
        }
    },
    navbarLogoImg: {
        height: 50,
        width: 50,
        color: 'black'
    },
    navbarLogoText: {
        fontSize: '1.5rem',
        fontFamily: 'monospace',
        fontWeight: 400,
        color: 'inherit',
        textDecoration: 'none',
        lineHeight: '2.5rem'
    },
    navbarLogoLight: {
        color: '#bdbdbd'
    },
    navbarMenuItem: {
        mr: 2,
        fontFamily: 'monospace',
        fontWeight: 700,
        fontSize: 30,
        letterSpacing: '.3rem',
        color: '#bdbdbd',
        textDecoration: 'none'
    },
    sidebarIcon: {
        width: 30,
        height: 30,
    },
    sideMenuListItemText: {
        fontSize: '1.5rem'
    },

};
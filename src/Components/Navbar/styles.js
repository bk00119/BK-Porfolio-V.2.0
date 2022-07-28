import { blue } from "@mui/material/colors";

export const styles = {
    navbarContainer: {
        mt: 3,
        mb: 10
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
        fontFamily: 'inherit',
        fontWeight: 500,
        fontSize: 20,
        color: '#bdbdbd',
        textDecoration: 'none'
    },
    sidebarIcon: {
        width: 30,
        height: 30,
    },
    sideMenuListItemText: {
        fontSize: '1.5rem',
        fontFamily: 'inherit'
    },

};
export const styles = {
    proejctGrid: {
        justifyContent: "space-evenly",
        display: "grid",
    },
    projectBox: {
        display: 'flex',
        flexDirection: 'column'
    },
    projectCard: {
        height: 'inherit',
        borderRadius: 0,
        width: 'inherit',
        marginBottom: '1rem'
    },
    projectCardMotion: {
        width: 'inherit'
    },
    projectImage: {
        height: "inherit",
        objectPosition: "top",
        aspectRatio: '1.5',
        width: 'inherit'
    },
    projectTextBox: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: '100%'
    },
    projectTitle: {
        fontWeight: 600,
        mb: 1,
        fontFamily: 'inherit'
    },
    projectDescription: {
        mb: 1,
        fontFamily: 'inherit'
    },
    projectKeywordBox: {
        mb: 1,
        display: "flex"
    },
    projectLanguage: {
        ml: "1rem"
    },
    projectButtonBox: {
        display: 'flex',
        justifyContent: 'flex-end'
    },
    projectButton: {
        color: 'var(--brown)',
        textTransform: 'initial'
    }
}
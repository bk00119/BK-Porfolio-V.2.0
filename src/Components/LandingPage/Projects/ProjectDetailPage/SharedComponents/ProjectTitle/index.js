import { Container, Typography } from "@mui/material";

import { styles } from "./styles";

export default function ProjectTitle(props){
    return (
        <Container maxWidth="unset" sx={styles.projectPageTitleContainer} className="projectPageTitleContainer">
            <Typography
                    variant="h3"
                    sx={styles.projectPageTitle}
                >
                    { props.title }
                </Typography>
                <Typography
                    variant="h5"
                    sx={styles.projectPageSubtitle}
                >
                    { props.subTitle }
                </Typography>
        </Container>
    );
}
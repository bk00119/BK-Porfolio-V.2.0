import { Container, Box, Typography } from "@mui/material";

import VisibilityMotion from "../ComponentMotion/VisibilityMotion";
import { styles } from "./styles";

export default function ProjectOverview(props){
    return (
        <Container maxWidth="unset">
            <VisibilityMotion component=
                {
                    <Box sx={styles.projectOverviewBox}>
                        <Typography
                            variant="h4"
                            sx={styles.projectOverviewTitle}
                        >
                            Overview
                        </Typography>
                        <Typography
                            variant="h5"
                            sx={styles.projectOverviewInfo}
                        >
                           {props.overview}
                        </Typography>
                    </Box>
                }
            />
        </Container>
    );
}
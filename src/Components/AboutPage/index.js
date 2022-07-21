import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { styles } from "./styles";
import "./styles.css";

export default function AboutPage() {
    return (
        <Container maxWidth="x1" sx={styles.aboutContainer} className="aboutContainer">
            <Container
                sx={styles.aboutImageContainer}
                className="aboutImageContainer"
            >
            <Box
                component="img"
                src="/img/profile.jpg"
                sx={styles.aboutImage}
                className="aboutImage"
            >

            </Box>
            </Container>
            <Container>
                <Typography
                    variant="h2"
                    sx={styles.aboutTitle}
                    className="aboutTitle"
                >
                    Hi, I am Brian.
                </Typography>
            </Container>
        </Container>
    );
}
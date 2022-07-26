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
                />
            </Container>
            <Container
                sx={styles.aboutInfoContainer}
                className="aboutInfoContainer"
            >
                <Typography
                    variant="h2"
                    sx={styles.aboutTitle}
                    className="aboutTitle"
                >
                    Hi, I am Brian.
                </Typography>
                <Typography
                    variant="h6"
                    sx={styles.aboutInfo}
                    className="aboutInfo"
                >
                    I am an international student from Busan, South Korea. 
                    In 2017, I moved to West Nyack, NY and started my journey in the U.S. 
                    I have always enjoyed programming and working on creative projects.
                    Currently, I am pursuing Bachelor's degree in Computer Science at New York University Tandon School of Engineering.
                </Typography>
                <Typography
                    variant="h6"
                    sx={styles.aboutInfo}
                    className="aboutInfo"
                >
                    In my free time, I love cooking for my friends and also for myself.
                    I mostly cook Korean cusine, but I always watch cooking videos on youtube to learn.
                </Typography>
                {/* Experience */}
                {/* Contact: just a button with email */}
            </Container>
        </Container>
    );
}
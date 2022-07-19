import Container from '@mui/material/Container';

import Intro from "./Intro/Intro";
import Projects from "./Projects/Projects";
import { styles } from "./styles";

export default function LandingPage() {
    return (
        <Container maxWidth="x1" sx={styles.introContainer}>
            <Intro />
            <Projects />
        </Container>
    );
}
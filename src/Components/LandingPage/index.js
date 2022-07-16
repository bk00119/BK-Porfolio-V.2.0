import Container from '@mui/material/Container';

import Intro from "./Intro/Intro";
import { styles } from "./styles";

function LandingPage() {
    return (
        <Container maxWidth="x1" sx={styles.introContainer}>
            <Intro />
        </Container>
    );
}

export default LandingPage;
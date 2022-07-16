import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { styles } from "./styles";
import SkillSphere from "./SkillSphere";

function Intro() {
    return (
        <Container maxWidth="x1">
            <Typography
                variant="h2"
                sx={styles.introTitle}
                className="navbarLogo"
            >
                Brian is a full-stack developer
            </Typography>
        </Container>
    );
}
export default Intro;
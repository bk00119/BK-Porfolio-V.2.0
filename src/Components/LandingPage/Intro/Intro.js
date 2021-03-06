import { Container, Typography } from '@mui/material';
import Typewriter from 'typewriter-effect';

import { styles } from "./styles";
import "./styles.css";

export default function Intro() {
    const descriptions = [
        'I build web apps as a Full-Stack Developer.',
        'I major in Computer Science at New York University.',
        'I am a Front-End Developer at AiTudier.'
    ];
    
    return (
        <Container 
            maxWidth="x1" 
            sx={styles.introContainer}
            className="introContainer"
        >
            <Typography
                variant="h4"
                sx={styles.introTitle}
                className="introTitle"
            >
                Hi 🙋‍♂️ my name is
            </Typography>
            <Typography
                variant="h1"
                sx={styles.introTitleName}
                className="introTitleName"
            >
                Brian Kim.
            </Typography>
            <Typography
                variant="h4"
                sx={styles.introTitleDetail}
                className="introTitleDetail"
            > 
                <Typewriter
                    options={{
                        strings: descriptions,
                        autoStart: true,
                        loop: true,
                        delay: 90,
                        deleteSpeed: 30
                    }}
                />
                <span style={styles.introTitleDetailPreset}>I major in Computer Science at New York University..</span>
            </Typography>

        </Container>
    );
}

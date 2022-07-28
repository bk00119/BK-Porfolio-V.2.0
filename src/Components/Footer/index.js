import { Container, Box, Typography, Link } from "@mui/material";

import { styles } from "./styles";
import "./styles.css";

export default function Footer() {
    return (
        <Container sx={styles.footer}>
            <Container sx={styles.footerContainer}>
                <Box>
                    <Typography
                        variant="h7"
                        sx={styles.footerTitle}
                        className="footerTitle"
                    >
                        Brian Kim @ 2022
                    </Typography>
                </Box>
                <Box sx={styles.footerIconsBox}>
                    <Link href="https://www.linkedin.com/in/briankim00119/" target="_blank" >
                        <Box
                            component="img"
                            src="/icons/linkedin.png"
                            alt="LinkedIn Icon"
                            sx={styles.footerIcon}
                            className="footerIcon"
                        />
                    </Link>
                    <Link href="https://github.com/bk00119" target="_blank" >
                        <Box
                            component="img"
                            src="/icons/github.png"
                            alt="GitHub Icon"
                            sx={styles.footerIcon}
                            className="footerIcon"
                        />
                    </Link>
                </Box>
                <Box>
                    <Typography
                        variant="h7"
                        sx={styles.footerEmail}
                        className="footerEmail"
                    >   
                        <Link href="mailto:briankim00119@gmail.com" underline="none" color="inherit">
                            Email
                        </Link>
                    </Typography>
                </Box>
            </Container>
        </Container>
    );
}
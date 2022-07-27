import { Container, Box, Typography, Link } from "@mui/material";

import { styles } from "./styles";

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
                <Box>
                    LinkedIn, GitHub
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
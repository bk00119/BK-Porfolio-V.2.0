import { Container, Box } from "@mui/material";

import VisibilityMotion from "../SharedComponents/ComponentMotion/VisibilityMotion";
import { styles } from "./styles.js";
import "./styles.css";

export default function MobileDemo(){
    return (
        <VisibilityMotion component=
            {
                <Container maxWidth="unset" sx={styles.mobileDemoContainer} className="mobileDemoContainer">
                    <Box sx={styles.mobileDemoBox} className="mobileDemoBox">
                        <Box
                            component="img"
                            src="img/projects/WT_SHSI/iphone8.png"
                            className="mobileDemoFrame"
                        >
                        </Box>
                        <video autoPlay loop muted playsInline>
                            <source src="img/projects/WT_SHSI/mobileDemo2.mp4" type="video/mp4" />
                        </video>
                    </Box>
                </Container>
            }
        />
    );
}
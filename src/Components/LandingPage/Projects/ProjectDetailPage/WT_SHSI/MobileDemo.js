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
                            src={require("./img/iphone8.png")}
                            className="mobileDemoFrame"
                        >
                        </Box>
                        <video autoPlay loop muted playsInline>
                            <source src={require("./img/mobileDemo.mp4")} type="video/mp4" />
                        </video>
                    </Box>
                </Container>
            }
        />
    );
}
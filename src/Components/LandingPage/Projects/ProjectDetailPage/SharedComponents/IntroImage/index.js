import { Container, Box } from "@mui/material";

import VisibilityMotion from "../ComponentMotion/VisibilityMotion";
import { styles } from "./styles";
import "./styles.css";

export default function IntroImage(props){
    return (
        <Container maxWidth="unset">
            <VisibilityMotion component=
                {
                    <Box sx={styles.projectIntroImageBox} className="projectIntroImageBox" >
                        <Box
                            component="img"
                            // src="img/projects/WT_SHSI/laptop.png"
                            src={props.img}
                            alt="Intro Image"
                            sx={styles.projectLaptopImage}
                            className="projectLaptopImage"
                        />
                    </Box>
                } 
            />
        </Container>
    );
}
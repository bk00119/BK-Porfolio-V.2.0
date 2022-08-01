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
                            src={require("../../"+props.img)} //DIR: "../../[Project Name]/img/[file]", require() can't get files from the parent directories when using variable, props.img
                            alt="Intro Image"
                            sx={styles.projectLaptopImage}
                            className="projectLaptopImage"
                        />
                        {console.log(props.img=="../../WT_SHSI/img/laptop.png")}
                    </Box>
                } 
            />
        </Container>
    );
}
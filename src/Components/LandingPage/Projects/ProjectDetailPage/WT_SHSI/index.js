import { Container } from "@mui/material";

import ProjectData from "./project_data.json";
import ProjectTitle from "../SharedComponents/ProjectTitle";
import IntroImage from "../SharedComponents/IntroImage";
import Details from "./Details";
import ProjectOverview from "../SharedComponents/ProjectOverview";
import MobileDemo from "./MobileDemo";
import YoutubePlayer from "./YoutubePlayer";
import { styles } from "./styles";
import "./styles.css";

export default function WT_SHSI() {
    return (
        <Container maxWidth="x1" sx={styles.projectPageContainer}>
            <ProjectTitle title={ProjectData.title} subTitle={ProjectData.subTitle} />
            <IntroImage img={ProjectData.imgSrc.introImg} />
            <Details />
            <ProjectOverview overview={ProjectData.overview} />
            <MobileDemo />
            <YoutubePlayer />
        </Container>
    );
}
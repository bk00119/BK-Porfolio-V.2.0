import { Container, Box } from "@mui/material";
import { motion } from "framer-motion";

import { styles } from "./styles";
import "./styles.css";

export default function YoutubePlayer(){
    return (
        <Container maxWidth="unset">
            <motion.div
                initial={{ opacity : 0 }}
                whileInView={{ opacity: 1}}
                transition={{ delay: 0.5 }}
            >
            <Box sx={styles.youtubePlayerContainer} className="youtubePlayerContainer">
                <iframe
                    width="inherit"
                    src="https://www.youtube.com/embed/mIsHGrhOs1Q"
                    framerborder="0"
                    allow="accelerometer; autoplay; clipboard-write;"
                    allowFullScreen
                    title="WT_SHSI Presentation"
                />
            </Box>
            </motion.div>
        </Container>
    );
};
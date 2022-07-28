import { Container, Box, Typography, List } from "@mui/material";

import YoutubePlayer from "./YoutubePlayer";
import Motion from "./Motion";
import { styles } from "./styles";

export default function WT_SHSI() {
    return (
        <Container maxWidth="x1" sx={styles.projectPageContainer}>
            <Container maxWidth="unset" sx={styles.projectPageTitleContainer} className="projectPageTitleContainer">
                <Typography
                    variant="h3"
                    sx={styles.projectPageTitle}
                >
                    Westtown Study Hall Sign-In Application
                </Typography>
                <Typography
                    variant="h5"
                    sx={styles.projectPageSubtitle}
                >
                    Sign-in for study hall location
                </Typography>
                {/* <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                >
                    <Box sx={styles.projectIntroImageContainer} className="projectIntroImageContainer" >
                        <Box
                            component="img"
                            src="/img/projects_cover/WT_SHSI/laptop.png"
                            alt="SHSI Laptop Image"
                            sx={styles.projectLaptopImage}
                            className="projectLaptopImage"
                        />
                    </Box>
                </motion.div> */}
                <Motion component=
                    {
                        <Box sx={styles.projectIntroImageBox} className="projectIntroImageBox" >
                            <Box
                                component="img"
                                src="/img/projects_cover/WT_SHSI/laptop.png"
                                alt="SHSI Laptop Image"
                                sx={styles.projectLaptopImage}
                                className="projectLaptopImage"
                            />
                        </Box>
                    } 
                />
                <Motion component=
                    {
                        <Box sx={styles.projectDetailBox} className="projectDetailBox" >
                            <Box sx={styles.projectDetailsOne} className="projectDetailsOne" >
                                <Box>
                                    <Typography
                                        variant="h5"
                                        sx={styles.projectDetailTitle}
                                    >
                                        Project Type
                                    </Typography>
                                    <Typography
                                        variant="h6"
                                        sx={styles.projectDetailInfo}
                                    >
                                        High School Computer Science Project
                                    </Typography>
                                </Box>
                                <Box>  
                                    <Typography
                                        variant="h5"
                                        sx={styles.projectDetailTitle}
                                    >
                                        Language
                                    </Typography>
                                    <Typography
                                        variant="h6"
                                        sx={styles.projectDetailInfo}
                                    >
                                        PHP, JavaScript, MySQL
                                    </Typography>
                                </Box>
                                <Box>
                                    <Typography
                                        variant="h5"
                                        sx={styles.projectDetailTitle}
                                    >
                                        Duration
                                    </Typography>
                                    <Typography
                                        variant="h6"
                                        sx={styles.projectDetailInfo}
                                    >
                                        Dec. 2017 - Jun. 2019
                                    </Typography>
                                </Box>
                            </Box>
                            <Box sx={styles.projectDetailsTwo} className="projectDetailsTwo" >
                                <Box>
                                    <Typography
                                            variant="h5"
                                            sx={styles.projectDetailTitle}
                                        >
                                            Role 
                                    </Typography>
                                    <List component="ul" sx={styles.projectDetailRoleList}>
                                        <Typography
                                            component="li"
                                            variant="h6"
                                            sx={styles.projectDetailRoleInfo}
                                        >
                                            Led a team of four student programmers
                                        </Typography>
                                        <Typography
                                            component="li"
                                            variant="h6"
                                            sx={styles.projectDetailRoleInfo}
                                        >
                                            Overall design of the application
                                        </Typography>
                                        <Typography
                                            component="li"
                                            variant="h6"
                                            sx={styles.projectDetailRoleInfo}
                                        >
                                            Conducted multiple rounds of user testing
                                        </Typography>
                                    </List>
                                </Box>
                            </Box>
                        </Box>
                    }
                />
                <Motion component=
                    {
                        <Box sx={styles.projectOverviewBox}>
                            <Typography
                                variant="h4"
                                sx={styles.projectOverviewTitle}
                            >
                                Overview
                            </Typography>
                            <Typography
                                variant="h5"
                                sx={styles.projectOverviewInfo}
                            >
                                Study Hall Sign-in application is for students of Westtown School to sign-in for study hall locations.
                                I initiated the idea and led a team of student programmers at Westtown School to build this application.
                                
                            </Typography>
                        </Box>
                    }
                />
            </Container>
            <YoutubePlayer />
        </Container>
    );
}
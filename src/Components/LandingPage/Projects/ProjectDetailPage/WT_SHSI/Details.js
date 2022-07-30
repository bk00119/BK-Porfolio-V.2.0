import { Container, Box, Typography, List } from "@mui/material";

import VisibilityMotion from "../SharedComponents/ComponentMotion/VisibilityMotion";
import { styles } from "./styles";
import "./styles.css";

export default function Details(){
    return (
        <Container maxWidth="unset">
            <VisibilityMotion component=
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

        </Container>
    );
}
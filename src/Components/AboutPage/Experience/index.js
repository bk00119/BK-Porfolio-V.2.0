import { Container, Typography, Box, Link, Divider } from '@mui/material';

import  ExperienceList  from "./experience_list.json";
import { styles } from "./styles";
import "./styles.css";

export default function Experience() {
    return (
        <Box sx={styles.experienceContainer}>
            <Typography
                variant="h4"
                sx={styles.experienceTitle}
                className="experienceTitle"
            >
                Experience
            </Typography>
            <Box>
                {ExperienceList.map((experience)=> (
                    <Box key={experience.name} sx={styles.experienceBox}>
                        {/* <Typography
                            variant="h5"
                            sx={styles.experienceName}
                        >
                            {experience.name}
                        </Typography> */}
                        <Link href={experience.url}>
                            <Box
                                component="img"
                                src={experience.logo}
                                sx={styles.experienceLogo}
                            >
                            </Box>
                        </Link>
                        <Box sx={styles.experienceDetailBox} className="experienceDetailBox">
                            <Typography
                                variant="h5"
                                sx={styles.experiencePosition}
                                className="experiencePosition"
                            >
                                {experience.position}
                            </Typography>
                            <Typography
                                variant="h7"
                                sx={styles.experienceTerm}
                                className="experienceTerm"
                            >
                                {experience.termStart}-{experience.termEnd}
                            </Typography>
                        </Box>
                        <Divider />
                    </Box>
                ))
                }
            </Box>
        </Box>
    )
}
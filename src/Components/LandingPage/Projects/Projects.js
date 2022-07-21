import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { motion } from 'framer-motion';
import { useNavigate } from "react-router-dom";

import  ProjectList  from "./project_list.json";
import { styles } from "./styles";
import "./styles.css";

export default function Projects() {
    const navigate = useNavigate();

    return (
        <Container
            sx={styles.proejctGrid}
            className="proejctGrid"
        >
            {ProjectList.map((project)=>(
                <Box
                    key={project.name}
                    sx={styles.projectBox}
                    className="projectBox"
                >
                    <motion.div
                        whileHover={{ scale: 0.95 }}
                        style={styles.projectCardMotion}
                    >
                        <Card
                            // variant="outlined"
                            sx={styles.projectCard}
                            className="projectCard"
                            onClick={()=>navigate(project.dir)}
                        >
                            <CardMedia
                                component="img"
                                image={project.image}
                                alt={project.name+' cover image'}
                                sx={styles.projectImage}
                            />
                        </Card>
                    </motion.div>
                    <Typography
                        variant="h5"
                        sx={styles.projectTitle}
                        className="projectTitle"
                    >
                        {project.name}
                    </Typography>
                    <Typography
                        variant="h6"
                        sx={styles.projectDescription}
                        className="projectDescription"
                    >
                        {project.shortDescription}
                    </Typography>
                    <Box
                        sx={styles.projectKeywordBox}
                        className="projectKeywordBox"
                    >
                        <Typography
                            variant="h7"
                            sx={styles.projectPosition}
                            className="projectPosition"
                        >
                            #{project.position}
                        </Typography>
                        <Typography
                            variant="h7"
                            sx={styles.projectLanguage}
                            className="projectLanguage"
                        >
                            #{project.language}
                        </Typography>
                    </Box>
                    <Box
                        sx={styles.projectButtonBox}
                    >
                        <Button
                            size="medium"
                            variant="text"
                            sx={styles.projectButton}
                            className="projectButton"
                            onClick={()=>navigate(project.dir)}
                        >
                            Read More
                        </Button>
                    </Box>
                </Box>
            ))}
        </Container>
    );
}
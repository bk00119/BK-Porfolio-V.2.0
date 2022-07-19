import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Box from '@mui/material/Box';

import  ProjectList  from "./project_list.json";
import { styles } from "./styles";
import "./styles.css";

export default function Projects() {
    return (
        <Container
            // container
            // columns={2}
            // xs={2}
            sx={styles.proejctsGrid}
            className="proejctsGrid"
        >
            {ProjectList.map((project)=>(
                <Box
                    key={project.name}
                    sx={styles.projectsBox}
                    className="projectsBox"
                >
                    <Card
                        variant="outlined"
                        sx={styles.projectsCard}
                    >
                        <CardMedia
                            component="img"
                            image={project.image}
                            alt={project.name+' cover image'}
                            sx={styles.projectsImage}
                        />
                    </Card>
                    <Typography
                        variant="h5"
                        sx={styles.projectsTitle}
                        className="projectsTitle"
                    >
                        {project.name}
                        {/* asdf */}
                    </Typography>
                </Box>
            ))}
        </Container>
    );
}
import { Container, Box, Typography } from '@mui/material';

import Experience from "./Experience";
import FoodArchive from "./FoodArchive";
import InstagramPost from '../InstagramPost';
import { styles } from "./styles";
import "./styles.css";

export default function AboutPage() {
    // GMT-0500
    const hoduAge = new Date(new Date() - new Date("2022-02-07T00:00:00-05:00"));
    const hoduAgeYear = hoduAge.getFullYear() - 1970;
    const hoduAgeString = hoduAgeYear >= 1 ? (hoduAgeYear + (hoduAgeYear > 1 ? " years" : " year")) : (hoduAge.getMonth() + " months");
    const aboutInfo = [
        "I am an international student from Busan, South Korea. In 2017, I moved to West Nyack, NY and started my journey in the U.S. I have always enjoyed programming and working on creative projects. Currently, I am pursuing Bachelor's degree in Computer Science at New York University Tandon School of Engineering.",
        "In my free time, I love cooking for my friends and also for myself. I mostly cook Korean cusine, but I always watch cooking videos on youtube to learn.",
        `Also as you can see from my website logo, I have a cute basenji, Hodu! He is currently ${hoduAgeString} old and loves playing with the other dogs at a dog run. While I sometimes feel lonely living in the U.S. without my family back in Korea, Hodu encourages me a lot like my soulmate.`
    ];

    return (
            <Container maxWidth="x1" >
                <Box sx={styles.aboutIntroContainer} className="aboutIntroContainer">
                    <Container
                        sx={styles.aboutImageContainer}
                        className="aboutImageContainer"
                    >
                        <Box
                            component="img"
                            src={require("./img/profile.jpg")}
                            sx={styles.aboutImage}
                            className="aboutImage"
                        />
                    </Container>
                    <Container
                        sx={styles.aboutInfoContainer}
                        className="aboutInfoContainer"
                    >
                        <Typography
                            variant="h2"
                            sx={styles.aboutTitle}
                            className="aboutTitle"
                        >
                            Hi, I am Brian.
                        </Typography>
                        {aboutInfo.map((info, index) => (
                            <Typography
                                key={index}
                                variant="h6"
                                sx={styles.aboutInfo}
                                className="aboutInfo"
                            >
                                {info}
                            </Typography>
                        ))}
                        <InstagramPost />
                        <Experience />
                    </Container>
                </Box>
                <FoodArchive />
            </Container>
    );
}
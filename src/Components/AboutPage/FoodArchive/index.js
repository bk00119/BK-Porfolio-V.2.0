import { Container, Typography, Box } from "@mui/material";

import { styles } from "./styles";
import "./styles.css";
import food_list from "./food_list.json";

export default function FoodArchive(){
    return(
        <Container sx={styles.foodArchiveContainer}>
            <Typography
                variant="h4"
                sx={styles.foodArchiveTitle}
            >
                Chef. Kim 👨‍🍳
            </Typography>
            <Box sx={styles.foodImageBox}>
                {food_list.map((food)=> (
                    <Box
                        component="img"
                        src={food}
                        sx={styles.foodImage}
                        className="foodImage"
                    />
                ))}
            </Box>
        </Container>
    )
}
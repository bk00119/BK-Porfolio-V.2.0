import { Container, Typography, Box } from "@mui/material";

import { styles } from "./styles";
import food_list from "./food_list.json";

export default function FoodArchive(){
    return(
        <Container sx={styles.foodArchiveContainer}>
            <Typography
                variant="h4"
            >
                Chef. Kim 👨‍🍳
            </Typography>
            <Box>
                {food_list.map((food)=> (
                    <Box
                        component="img"
                        // src={food}
                        src="img/logo.png"
                    />
                ))}
            </Box>
        </Container>
    )
}
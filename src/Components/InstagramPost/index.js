import { InstagramEmbed } from 'react-social-media-embed';
import { Box } from '@mui/material';

import { styles } from "./styles";
import "./styles.css";

export default function InstagramPost() {
    return (
        <Box maxWidth="unset" sx={styles.instagramPostBlock} className="instagramPostBlock" >
            <InstagramEmbed url="https://www.instagram.com/p/Cet_nE9FSzC/" className="instagramPost" />
            <InstagramEmbed url="https://www.instagram.com/reel/CfHi3XIhirD/" className="instagramPost secondPost" />
        </Box>
    );
}
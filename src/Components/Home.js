import { Box } from "@mui/material";
import { Grid } from "@mui/material";
import {Card} from "@mui/material";
import stripes from "./images/stripes.jpg";
import background from "./images/construction-bg.png";


function Home() {
    return (
        <Box 
            sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
            <Grid 
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '100vw', 
                    height: '100vh',
                    backgroundImage: `url(${background})`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    
                }}>
                <Card 
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundImage: `url(${stripes})`,
                        backgroundRepeat: 'repeat',
                        backgroundSize: 'contain',
                        width: '100%',
                        height: '20%',
                        color: "black",
                        fontSize: 'calc(3vw + 1.5vmin)',
                        boxShadow: '0px 5px 20px 5px black',
                        
                    }}>
                    THIS PROJECT IS STILL UNDER DEVELOPMENT
                </Card>
            </Grid>
        </Box>
    )
}

export default Home;
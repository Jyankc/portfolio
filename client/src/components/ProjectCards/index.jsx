// import { Box } from "@mui/material"
import { Typography, Card, CardActions, CardContent, CardMedia, Button } from '@mui/material';


export default function ProjectCards({ title, img, description, deployment, github, technologies }) {

    return (
        <Card sx={{ maxWidth: 700, margin:'3rem', padding:'2rem' , backgroundColor:'primary.dark'}}>
            <CardMedia
                component="img"
                height="400"
                width='700'
                image={img}
                alt="project-screenshot"
            />
            <CardContent>
                <Typography gutterBottom variant="h3" component="div" color='whitesmoke'>
                    {title}
                </Typography>
                <Typography variant="h6"  color='whitesmoke'>
                    {description}
                </Typography>
                <Typography variant="body4"  component='div' color='secondary.light'>
                {technologies}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" sx={{backgroundColor:'secondary.light', color:'primary.dark'}}>Github</Button>
                <Button size="small"  sx={{backgroundColor:'secondary.light', color:'primary.dark'}}>Take me to it!</Button>
            </CardActions>
        </Card>




    )
}







        // <Box>
        // <p>Title: {title}</p>
        // <p>Img :{img}</p>
        // <p>Description: {description}</p>
        // <p>Deployment: {deployment}</p>
        // <p>Github: {github}</p>
        // </Box>
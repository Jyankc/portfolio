import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import ProjectCards from '../ProjectCards';
import projectData from '../../utils/data.js'
console.log('SOY PROJECT', projectData)
export default function ProjectContainer() {


    return (
        <Box sx={{
            display: 'flex',
            flexDirection:'column',
            width: '100%',
            height: '90vh',
            backgroundColor: 'primary.light'
        }}>
            <Typography gutterBottom variant="h2" component="div" color='primary.dark' textAlign='center'>
                
            </Typography>
            <Box sx={{ display:'flex' , justifyContent:'space-evenly'}}>
                {Array.isArray(projectData) && projectData.map((x, i) =>
                    <ProjectCards img={x.img} title={x.title} description={x.description} deployment={x.deployment} github={x.github} technologies={x.technologies} key={i} />
                )}
            </Box>
        </Box>
    )

}
// import { Box} from '@mui/system';
import { Box, AppBar, Toolbar, IconButton, Typography, Grid, Container } from '@mui/material';
import ProjectContainer from './components/ProjectContainer';
import ContactInfo from './components/ContactInfo'
import ComputerIcon from '@mui/icons-material/Computer';
import './App.css';
import Divider from './components/Divider';

function App() {
  return (
    <Box 
    sx={{
      height: '100vh',
      width: '100%'
    }}>
      <Box >
        <AppBar sx={{ height: '3.5rem', backgroundColor: 'primary.dark' }}
          position="static"
        >
          <Toolbar>
            <Grid
              direction='row'
              container spacing={1}>
              <Container>
                <Typography variant='h4'
                  sx={{ margin: '1rem' }}>
                  Juan Yancovich
                </Typography>
              </Container>

              <IconButton
                sx={{ margin: '1rem' }}
                size="large"
                edge="start"
                aria-label="account of current user"
                aria-haspopup="false"
                color="inherit"
              >
                <ComputerIcon />
              </IconButton>
            </Grid>
          </Toolbar>
        </AppBar>
      </Box>
      <Box
        display='flex'
        // direction='column'
        alignItems="center"
        justifyContent='space-around'

        sx={{
          width: '100%',
          height: '40%',
          backgroundColor: 'primary.main'
        }}
      >
        <Box>
          <Typography variant='h3' color='secondary.light'>
            Welcome to my Portfolio   
          </Typography>
        </Box>
        <Box>
          <Typography variant='h6' color='whitesmoke'>
            Im a Full-Stack Web Developer from Argentina ready for new challenges.
          </Typography>
        </Box>



      </Box>
      <Divider />
      <ContactInfo />
      <Divider />
      <ProjectContainer />
    </Box >
  );
}

export default App;

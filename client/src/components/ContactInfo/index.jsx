import { Box, Grid, IconButton, Typography, Container } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ArticleIcon from '@mui/icons-material/Article';
import EmailIcon from '@mui/icons-material/Email';
import s from './index.module.css'
import Email from '@mui/icons-material/Email';
export default function ContactInfo() {


  return (
    <Box
      className={s.container}
      sx={{
        padding: '0.4rem',
        width: '100%',
        height: '13%',
        backgroundColor: 'secondary.main'
      }}>
      <Box
        sx={{
          paddingBottom: '0.5rem',
        }}>
        <Typography variant='h4' textAlign='center'>
          Contact Me ! : )
        </Typography>
      </Box>
      <Box
        display='flex'
        direction="row"
        alignItems="center"
        justifyContent="space-around"
        sx={{ marginBottom: '2rem' }}
      >
        <Box>
          <IconButton
            sx={{ margin: '1rem' }}
            size="large"
            edge="start"
            aria-label="account of current user"
            aria-haspopup="false"
            color="inherit"
          >
            <GitHubIcon />
          </IconButton>
        </Box>
        <Box >
          <IconButton
            sx={{ margin: '1rem' }}
            size="large"
            edge="start"
            aria-label="account of current user"
            aria-haspopup="false"
            color="inherit"
          >
            <LinkedInIcon />
          </IconButton>
        </Box>
        <Box 
        display='flex'
        direction="column"
        sx={{ display: 'flex'}}>
          <Box>
            <Typography>
              Resume
            </Typography>
          </Box>
          <Box>
            <IconButton
              sx={{ margin: '1rem' }}
              size="large"
              edge="start"
              aria-label="account of current user"
              aria-haspopup="false"
              color="inherit"
            >
              <ArticleIcon />
            </IconButton>
          </Box>
        </Box>
        <Box>
          <IconButton
            sx={{ margin: '1rem' }}
            size="large"
            edge="start"
            aria-label="account of current user"
            aria-haspopup="false"
            color="inherit"
          >
            <Email />
          </IconButton>
        </Box>

      </Box>
    </Box>

  )

}
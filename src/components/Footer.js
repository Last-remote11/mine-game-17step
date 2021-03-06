import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import GitHubIcon from './Icons/GitHub-Mark-64px.png'



function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary">
      <Link color="inherit" href="https://github.com/Last-remote11/mine-game-17step">
        <img src={GitHubIcon} alt='github icon' />
      </Link> 
      <br/>
        <h2 className = 'gray'>플레이 해주셔서 감사합니다.</h2> 
      <a className='email-link' href = "mailto:ththth663@gmail.com">
        버그 혹은 개선점은 여기로 => ththth663@gmail.com
      </a>
      
    </Typography>
  );
}


export default function StickyFooter() {
  

  const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexDirection: 'column',
      minHeight: '80vh',
    },
    main: {
      marginTop: theme.spacing(8),
      marginBottom: theme.spacing(2),
    },
    footer: {
      padding: theme.spacing(3, 2),
      marginTop: 'auto',
      backgroundColor:
        theme.palette.type === 'dark' ? theme.palette.grey[200] : theme.palette.grey[800],
    },
  }));

  const classes = useStyles();

  return (
    <div className={classes.root}>

      <footer className={classes.footer}>
        <Container maxWidth="sm">
          <Typography variant="body1"></Typography>
          <Copyright />
        </Container>
      </footer>
    </div>
  );
}
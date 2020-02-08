// Import Dependencies and Libraries
import React from 'react';
import links from './Links.json'
import { Grid, Typography, makeStyles, Link } from '@material-ui/core';

// Import Social Media Icons
import FacebookIcon   from '@material-ui/icons/Facebook';
import InstagramIcon  from '@material-ui/icons/Instagram';
import TwitterIcon    from '@material-ui/icons/Twitter';
import YouTubeIcon    from '@material-ui/icons/YouTube';


// Definition of styles to be used
const useStyles = makeStyles(theme => ({
  text: {
      position: 'relative',
      color: '#ffffff',
      textAlign: 'left',
      fontSize: 18,
  },
  subItem: {
      position: 'relative',
      color: '#ffffff',
      textAlign: 'left',
      verticalAlign: 'top',
      fontSize: 14
  },
  container:{
    padding: 20,
    alignContent: 'center'
  }
}));

export default function BottomLinks() {

  const classes = useStyles();

  // Function to populate the bottom link grids
  const generateLinks = links.BottomLinks.map((item) => {
    return(
        <React.Fragment key={item.id}>
          <Grid item xs={"auto"}>
            <Grid item xs={"auto"}>
              <Typography variant="subtitle1" className={classes.text}>{item.header}</Typography>
            </Grid>
            {item.items.map((subitem) => {
              if(subitem.icon === null) {
                return(
                  <Grid item xs={"auto"} key={subitem.itemId}>
                    <Typography className={classes.subItem}>
                      <Link href={subitem.path} color='inherit' >{subitem.name}</Link>
                    </Typography>
                  </Grid>
                );
              } else {
                let icon;
                if (subitem.icon === "FacebookIcon") {
                  icon = <FacebookIcon fontSize='small' />;
                } else if (subitem.icon === "InstagramIcon") {
                  icon = <InstagramIcon fontSize='small' />;
                } else if (subitem.icon === "TwitterIcon") {
                  icon = <TwitterIcon fontSize='small' />;
                } else if (subitem.icon === "YoutubeIcon") {
                  icon = <YouTubeIcon fontSize='small' />;
                }

                return (
                  <Grid item xs={"auto"} key={subitem.itemId}>
                    <Typography className={classes.subItem}>
                      <Link href={subitem.path} className={classes.subItem}>{icon}  {subitem.name}</Link>
                    </Typography>
                  </Grid>
                );
              }
            })}
          </Grid>
        </React.Fragment>
    );
  })

  return(
    <div className={classes.container}>
      <Grid container spacing={7} direction='row'>
        {generateLinks}
      </Grid>
      <hr color="white" />
      <Typography style={{
        fontSize: 10,
        color: '#ffffff',
        textAlign: 'left'}}>
          Copyright© 1995-2020 atacadogames.com. Todos os Direitos Reservados
        </Typography>
    </div>
  );
}

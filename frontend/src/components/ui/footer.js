import React from "react"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import IconButton from "@material-ui/core/IconButton"
import {makeStyles} from "@material-ui/core/Styles"
import {Link} from "gatsby"

import facebook from '../../images/facebook.svg'
import twitter from '../../images/twitter.svg'
import instagram from '../../images/instagram.svg'

const useStyles = makeStyles(theme => ({
  footer: {
    backgroundColor: theme.palette.primary.main,
    padding: "2rem"
  },
  link: {
    color: '#FFF',
    fontSize: '1.25rem'
  },
  linkColumn: {
    width: "20rem"
  },
  linkContainer: {
    [theme.breakpoints.down("md")]: {
      marginBottom: "3rem",
    }
  },
  icon: {
    "&:hover": {
      backgroundColor: 'transparent'
    }
  },
  "@global": {
    body: {
      marin: 0
    },
    a: {
      textDecoration: "none"
    }
  },
}))

export default function Footer() {
  const classes = useStyles()
  const socialMedia = [
    { icon: facebook, alt: 'facebook', link: 'https://www.facebook.com/'},
    { icon: twitter, alt: 'twitter', link: 'https://www.twitter.com/'},
    { icon: instagram, alt: 'instagram', link: 'https://www.instagram.com/'}
  ]
  const routes = {
    'Contact Us': [
      {label: '(54) 9 99711-4887', href: '(54) 9 99711-4887'},
      {label: 'fink@fink.com', href: 'mailto:fink@fink.com'},
    ],
    'Customer Service': [
      {label: 'Contact Us', link: '/contact'},
      {label: 'My Account', link: '/account'},
    ],
    'Information': [
      {label: 'Privacy Policy', link: '/privacy-policy'},
      {label: 'Terms & Conditions', link: '/terms-conditions'},
    ],
  }
  return (
    <Footer className={classes.footer}>
      <Grid container justify="space-between">
        <Grid item classes={{root: classes.linkContainer}} >
          <Grid container>
            {Object.keys(routes).map(category => (
              <Grid item container direction="column" classes={{root: classes.linkColumn}} 
              key={category}>
                <Grid item>
                  <Typography variant="h5">{category}</Typography>
                </Grid>
                {routes[category].map(route => (
                  <Grid item key={route.label} >
                    <Typography component={route.link ? Link : 'a'}
                     to={route.link ? route.link : undefined} variant="body1"
                     href={route.href ? route.href : undefined} 
                     classes={{body1: classes.link}} >
                      {route.label}
                    </Typography>
                  </Grid>
                ))}
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Grid item >
          <Grid container direction='column' alignItems="center">
            {socialMedia.map(platform => (
              <Grid item key={platform.alt}>
                <IconButton classes={{root: classes.icon}} component="a"
                 href={platform.link} disableRipple >
                  <img src={platform.icon} alt={platform.alt} />
                </IconButton>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Footer>
  )
}
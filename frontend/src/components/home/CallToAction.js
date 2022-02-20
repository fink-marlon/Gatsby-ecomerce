import React from "react"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"
import useMediaQuery from "@material-ui/core/useMediaQuery"
import { makeStyles } from "@material-ui/core/styles"
import { Link } from "gatsby"

import cta from "../../images/cta.svg"

const useStyles = makeStyles(theme => ({
  account: {
    color: '#FFF',
    marginLeft: '3rem'
  },
  body: {
    maxWidth: '45rem',
    [theme.breakpoints.down('md')]: {
      padding: '0 1rem'
    },
    [theme.breakpoints.down('xs')]: {
      padding: '0'
    }
  },
  container: {
    marginBottom: '15rem'
  },
  buttonContainer: {
    marginTop: '3rem'
  },
  headingContainer: {
    [theme.breakpoints.down('md')]: {
      padding: '0 1rem'
    },
    [theme.breakpoints.down('xs')]: {
      padding: '0'
    }
  },
  icon: {
    [theme.breakpoints.down('xs')]: {
      height: '18rem',
      width: '20rem'
    }
  }
}))

export default function CallToAction(){
  const classes = useStyles()
  const matchesMD = useMediaQuery(theme => theme.breakpoints.down("md"))

  return(
    <Grid container justify='space-around' alignItems='center' classes={{root: classes.container}}
    direction={matchesMD ? 'column' : 'row'} >
      <Grid item > 
        <img src={cta} alt='Quality Committed' className={classes.icon} />
      </Grid>
      <Grid item >
        <Grid container direction='column' >
          <Grid item classes={{ root: classes.headingContainer}}>
            <Typography variant='h1' align={matchesMD ? 'center' : undefined} >
            Committed To Quality </Typography>
          </Grid>
          <Grid item classes={{ root: classes.body}}>
            <Typography variant='body1' align={matchesMD ? 'center' : undefined} >
            At VAR X we are compromised with ...</Typography>
          </Grid>
          <Grid item container justify={matchesMD ? 'center' : undefined}
          classes={{ root: classes.buttonContainer}} >
            <Grid item >
              <Button variant='outlined' color='primary' component={Link} to={'/contact'} >
              Contact Us </Button>
            </Grid>
            <Grid item >
              <Button variant='contained' color='primary' classes={{root: classes.account}}
              component={Link} to={'/account'} > Create Account </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}
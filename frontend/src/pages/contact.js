import React from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import clsx from 'clsx'
import { makeStyles } from '@material-ui/core/styles'
import {Link} from 'gatsby'

import address from '../images/address.svg'
import phone from '../images/phone-adornment.svg'
import email from '../images/email-adornment.svg'
import send from '../images/send.svg'
import Layout from "../components/ui/layout"

const useStyles = makeStyles(theme => ({
  mainContainer: {
    height: '40rem',
    backgroundColor: theme.palette.primary.main,
    marginBottom: '10rem'
  },
  formWrapper: {
    height: '100%'
  },
  formContainer: {
    height: '100%'
  },
  blockContainer: {
    backgroundColor: theme.palette.secondary.main,
    height: '8rem',
    width: '40rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  titleContainer: {
    marginTop: '-4rem'
  },
  buttonContainer: {
    marginBottom: '-4rem'
  },
  sendButton: {
    textTransform: 'none'
  },
  sendIcon: {
    marginLeft: '2rem'
  },
  contactInfo: {
    fontSize: '1,5rem'
  },
  contactIcon: {
    height: '3rem',
    width: '3rem'
  },
  contactEmailIcon: {
    height: '2.25rem',
    width: '3rem'
  }
}))

const ContactPage = () => {
  const classes = useStyles()

  return (
    <Layout >
      <Grid container justify="space-around" align="center" classes={{ root: classes.mainContainer}}>
        <Grid item classes={{ root: classes.formWrapper}}>
          <Grid container direction='column' justify='space-between' alignItems="center"
          classes={{root: classes.formContainer}} >
            <Grid item classes={{ root: clsx(classes.titleContainer, classes.blockContainer)}}>
              <Typography variant='h4'> Contact Us </Typography>
            </Grid>
            <Grid item classes={{ root: clsx(classes.buttonContainer, classes.blockContainer)}}>
              <Button classes={{root: classes.sendButton}}>
                <Typography variant='h4'> Send Message </Typography>
                <img src={send} alt='send message' className={classes.sendIcon} />
              </Button>
            </Grid>
          </Grid>
        </Grid>
         
        <Grid item >
          <Grid container direction='column' >
            <Grid item container alignItems='center' >
              <Grid item >
                <img src={address} alt='address' classNme={classes.contactIcon} />
              </Grid>
              <Grid item >
                <Typography variant='h2' classes={{root: classes.contactInfo}} > 
                address 1234 </Typography>
              </Grid>
            </Grid>
            <Grid item container alignItems='center' >
              <Grid item >
                <img src={phone} alt='phone' classNme={classes.contactIcon} />
              </Grid>
              <Grid item >
                <Typography variant='h2' classes={{root: classes.contactInfo}} > 
                phone 1234 </Typography>
              </Grid>
            </Grid>
            <Grid item container alignItems='center' >
              <Grid item >
                <img src={email} alt='email' classNme={classes.contactEmailIcon} />
              </Grid>
              <Grid item >
                <Typography variant='h2' classes={{root: classes.contactInfo}} >
                 email 1234 </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Layout>
  )
}

export default ContactPage
import React, { useState } from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import InputAdornment from '@material-ui/core/InputAdornment'
import clsx from 'clsx'
import { makeStyles } from '@material-ui/core/styles'
//import {Link} from 'gatsby'

import address from '../images/address.svg'
import phone from '../images/phone-adornment.svg'
import email from '../images/email-adornment.svg'
import send from '../images/send.svg'
import nameAdornment from '../images/name-adornment.svg'
import Layout from "../components/ui/layout"
import validate from "../components/ui/validate"

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
    marginBottom: '-4rem',
    textTransform: 'none',
    borderRadius: 0,
    '&:hover': {
      backgroundColor: theme.palette.secondary.light
    }
  },
  sendIcon: {
    marginLeft: '2rem',
    marginLeft: '1rem'
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
  },
  infoContainer: {
    height: '21.25rem'
  },
  middleInfo: {
    borderTop: '2px solid #FFF',
    borderBottom: '2px solid #FFF'
  },
  iconContainer: {
    borderLeft: '2px solid #FFF',
    height: '7rem',
    width: '8rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  textField: {
    width: '30rem'
  },
  input: {
    color: '#FFF'
  },
  fieldContainer: {
    marginBottom: '1rem'
  },
  multilineContainer: {
    marginTop: '1rem'
  },
  '@global': {
    '.MuiInput=underline:before, .MuiInput=underline:hover:not(.Mui-disabled):before': {
      borderBottom: '1px solid #FFF'
    },
    '.MuiInput-underline:after': {
      borderBottom: `1px solid ${theme.palette.secondary.main}`
    },
    '.Mui-multiline': {
      border: '2px solid #FFF',
      borderRadius: '10',
      padding: '1rem'
    }
  }
}))

const ContactPage = () => {
  const classes = useStyles()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [message, setMessage] = useState('')

  return (
    <Layout >
      <Grid container justify="space-around" align="center" classes={{ root: classes.mainContainer}}>
        <Grid item classes={{ root: classes.formWrapper}}>
          <Grid container direction='column' justify='space-between' alignItems="center"
          classes={{root: classes.formContainer}} >
            <Grid item classes={{ root: clsx(classes.titleContainer, classes.blockContainer)}}>
              <Typography variant='h4'> Contact Us </Typography>
            </Grid>
            <Grid item >
              <Grid container direction='column' >
                <Grid item classes={{ root: classes.fieldContainer}} >
                  <TextField placeholder='Name' value={name} onChange={(e) => setName(e.target.value)}
                  classes={{root: classes.textField}} InputProp={{classes: {input: classes.input}, 
                  startAdornment: (
                    <InputAdornment position='start' >
                      <img src={nameAdornment} alt='name' />
                    </InputAdornment>
                  ) }}/>
                </Grid>
                <Grid item classes={{ root: classes.fieldContainer}} >
                  <TextField placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)}
                  classes={{root: classes.textField}} InputProp={{classes: {input: classes.input}, 
                  startAdornment: (
                    <InputAdornment position='start' >
                      <img src={email} alt='email' />
                    </InputAdornment>
                  ) }}/>
                </Grid>
                <Grid item classes={{ root: classes.fieldContainer}} >
                  <TextField placeholder='Phone Number' InputProp={{classes: {input: classes.input}, 
                  startAdornment: (
                    <InputAdornment position='start' >
                      <img src={phone} alt='phone' />
                    </InputAdornment>
                  ) }}
                  value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} 
                  classes={{root: classes.textField}} />
                </Grid>
                <Grid item classes={{ root: classes.multilineContainer}} >
                  <TextField placeholder='Message' multiline rows={8}
                  InputProp={{disableUnderline: true, classes: {input: classes.input} }}
                  value={message} onChange={(e) => setMessage(e.target.value)}
                  classes={{root: classes.textField}} />
                </Grid>
              </Grid>
            </Grid>
            <Grid item component={Button} classes={{ root: clsx(classes.buttonContainer, classes.blockContainer)}}>
              <Typography variant='h4'> Send Message </Typography>
              <img src={send} alt='send message' className={classes.sendIcon} />
            </Grid>
          </Grid>
        </Grid>
         
        <Grid item >
          <Grid container direction='column' justify='space-between'
          classes={{ root: classes.infoContainer }} >
            <Grid item container alignItems='center' >
              <Grid item class={{root: classes.iconContainer }}>
                <img src={address} alt='address' classNme={classes.contactIcon} />
              </Grid>
              <Grid item >
                <Typography variant='h2' classes={{root: classes.contactInfo}} > 
                address 1234 </Typography>
              </Grid>
            </Grid>
            <Grid item container alignItems='center' classes={{root: classes.middleInfo}} >
              <Grid item class={{root: classes.iconContainer }}>
                <img src={phone} alt='phone' classNme={classes.contactIcon} />
              </Grid>
              <Grid item >
                <Typography variant='h2' classes={{root: classes.contactInfo}} > 
                phone 1234 </Typography>
              </Grid>
            </Grid>
            <Grid item container alignItems='center' >
              <Grid item class={{root: classes.iconContainer }}>
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
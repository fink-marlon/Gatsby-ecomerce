import React, { useState } from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import InputAdornment from '@material-ui/core/InputAdornment'
import useMediaQuery from '@material-ui/core/useMediaQuery'
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
    height: '45rem',
    backgroundColor: theme.palette.primary.main,
    marginBottom: '10rem',
    [theme.breakpoints.down('md')]: {
      height: '90rem',
      marginTop: '8rem'
    }
  },
  formWrapper: {
    height: '100%',
    [theme.breakpoints.down('md')]: {
      height: '50%',
      marginTop: '-8rem'
    }
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
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      width: '30rem'
    }
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
  buttonDisabled: {
    backgroundColor: theme.palette.grey[500]
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
    height: '21.25rem',
    [theme.breakpoints.down('xs')]: {
      height: '12.25rem'
    }
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
    alignItems: 'center',
    [theme.breakpoints.down('xs')]: {
      height: '5rem',
      width: '6rem',
    }
  },
  textField: {
    width: '30rem',
    [theme.breakpoints.down('sm')]: {
      width: '20rem'
    }
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
  multiline: {
    border: '2px solid #FFF',
    borderRadius: '10',
    padding: '1rem'
  },
  multilineError: {
    border: `2px solid ${theme.palette.error.main}`
  },
  '@global': {
    '.MuiInput=underline:before, .MuiInput=underline:hover:not(.Mui-disabled):before': {
      borderBottom: '1px solid #FFF'
    },
    '.MuiInput-underline:after': {
      borderBottom: `1px solid ${theme.palette.secondary.main}`
    }
  }
}))

const ContactPage = () => {
  const classes = useStyles()
  const matchesMD = useMediaQuery(theme => theme.breakpoints.down("md"))
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [message, setMessage] = useState('')
  const [errors, setErrors] = useState({})

  return (
    <Layout >
      <Grid container justify="space-around" align="center" classes={{ root: classes.mainContainer}}
      direction={matchesMD ? 'column' : 'row'} >
        <Grid item classes={{ root: classes.formWrapper}}>
          <Grid container direction='column' justify='space-between' alignItems="center"
          classes={{root: classes.formContainer}} >
            <Grid item classes={{ root: clsx(classes.titleContainer, classes.blockContainer)}}>
              <Typography variant='h4'> Contact Us </Typography>
            </Grid>
            <Grid item >
              <Grid container direction='column' >
                <Grid item classes={{ root: classes.fieldContainer}} >
                  <TextField placeholder='Name' value={name}  classes={{root: classes.textField}}
                  onChange={(e) => {
                    if (errors.name){
                      const valid = validate({name: e.target.value})
                      setErrors({...errors, name: !valid.name})
                    }                    
                    setName(e.target.value)}} onBlur={(e) => {
                    const valid = validate({name})
                    setErrors({...errors, name: !valid.name})
                  }} InputProp={{classes: {input: classes.input}, startAdornment: (
                    <InputAdornment position='start' >
                      <img src={nameAdornment} alt='name' />
                    </InputAdornment>
                  ) }} error={errors.name} helperText={errors.name && 'You must enter a name'} />
                </Grid>
                <Grid item classes={{ root: classes.fieldContainer}} >
                  <TextField placeholder='Email' value={email} onChange={(e) => {
                     if (errors.email){
                      const valid = validate({email: e.target.value})
                      setErrors({...errors, email: !valid.email})
                    } 
                    setEmail(e.target.value)}}
                  classes={{root: classes.textField}} onBlur={(e) => {
                    const valid = validate({email})
                    setErrors({...errors, email: !valid.email})
                  }} InputProp={{classes: {input: classes.input}, startAdornment: (
                    <InputAdornment position='start' >
                      <img src={email} alt='email' />
                    </InputAdornment>
                  ) }} error={errors.email} helperText={errors.email && 'Invalid email'} />
                </Grid>
                <Grid item classes={{ root: classes.fieldContainer}} >
                  <TextField placeholder='Phone Number' InputProp={{classes: {input: classes.input}, 
                  startAdornment: (
                    <InputAdornment position='start' >
                      <img src={phone} alt='phone' />
                    </InputAdornment>
                  ) }}
                  value={phoneNumber} onChange={(e) => {
                    if (errors.phone){
                      const valid = validate({phone: e.target.value})
                      setErrors({...errors, phone: !valid.phone})
                    } 
                    setPhoneNumber(e.target.value)}} onBlur={(e) => {
                    const valid = validate({phone})
                    setErrors({...errors, phone: !valid.phone})
                  }} classes={{root: classes.textField}} error={errors.phone}
                   helperText={errors.phone && 'Invalid phone number'} />
                </Grid>
                <Grid item classes={{ root: classes.multilineContainer}} >
                  <TextField placeholder='Message' multiline rows={8}
                  InputProp={{disableUnderline: true, classes: {input: classes.input,
                    multiline: classes.multiline, error: classes.multilineError}}}
                  value={message} onChange={(e) => setMessage(e.target.value)}
                  classes={{root: classes.textField}} onChange={(e) => {
                    if (errors.message){
                      const valid = validate({message: e.target.message})
                      setErrors({...errors, message: !valid.message})
                    } 
                    setPhoneNumber(e.target.value)}}
                  onBlur={(e) => {
                    const valid = validate({message})
                    setErrors({...errors, message: !valid.message})
                  }} error={errors.message} helperText={errors.message && 'Enter a message'} />
                </Grid>
              </Grid>
            </Grid>
            <Grid item component={Button} disabled={Object.keys(errors).some(error => errors[error]
            === true) || Object.keys(errors).length !== 4}
            classes={{ root: clsx(classes.buttonContainer, classes.blockContainer, {
              [classes.buttonDisabled]: Object.keys(errors).some(error => errors[error]
              === true) || Object.keys(errors).length !== 4}
            )}}>
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
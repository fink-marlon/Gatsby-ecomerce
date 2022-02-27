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
  const [values, setValues] = useState({name: "", email: "", phone: "", message: ""})
  const [errors, setErrors] = useState({})
  const fields = {
    name: {
      helperText: 'You must enter a name',
      placeholder: 'Name',
      adornment: <img src={nameAdornment} alt='name' />
    },
    email: {
      helperText: 'Invalid email',
      placeholder: 'Email',
      adornment: <img src={email} alt='email' />
    },
    phone: {
      helperText: 'Invalid phone number',
      placeholder: 'Phone',
      adornment: <img src={phone} alt='phone' />
    },
    message: {
      helperText: 'You must enter a message',
      placeholder: 'Message',
      inputClasses: {
        multiline: classes.multiline, error: classes.multilineError
      }
    }
  }
  const disabled = Object.keys(errors).some(error => errors[error] === true)
   || Object.keys(errors).length !== 4

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
                {Object.keys(fields).map(field => {
                  const validateHelper = (event) => {
                    const valid = validate({[field]: event.target[field]})
                    setErrors({...errors, [field]: !valid[field]})            
                  }

                  return (
                    <Grid item classes={{ root: field === 'message' ? classes.multilineContainer
                      : classes.fieldContainer}} >
                      <TextField placeholder={fields[field].placeholder} value={values[field]}
                        classes={{root: classes.textField}} onChange={(e) => {
                          if (errors[field]){ validateHelper(e) }                    
                          setValues({...values, [field]: e.target.value})
                        }}
                        onBlur={(e) => { validateHelper(e) }} multiline={field === 'message'}
                        rows={field === 'message' ? 8 : undefined}
                        error={errors[field]} helperText={errors[field] && fields[field].helperText}
                        InputProp={{classes: {input: classes.input, ...fields[field].inputClasses},
                        disabledUnderline: field === 'message', startAdornment: (
                          <InputAdornment position='start' >
                            {fields[field].adornment}
                          </InputAdornment>
                        )
                      }} />
                    </Grid>
                  )
                })} 
              </Grid>
            </Grid>
            <Grid item component={Button} disabled={disabled}
            classes={{ root: clsx(classes.buttonContainer, classes.blockContainer, {
              [classes.buttonDisabled]: disabled}
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
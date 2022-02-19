import React from "react"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import Lottie from "react-lottie"
//import { makeStyles } from "@material-ui/core/styles"
//import useMediaQuery from "@material-ui/core/useMediaQuery"

import animationData from "../../images/data.json"

export default function HeroBlock(){
  const defaultOptions = {
    loop: true,
    autoplay: false,
    animationData: animationData
  }

  return(
    <Grid container justify='space-around' alignItems='center'>
      <Grid item>
        <Grid container direction='column'>
          <Grid item>
            <Typography align='center' variant="h1">
              The Premiere <br/> Developer clothing line
            </Typography>
          </Grid>
          <Grid item>
            <Typography align='center' variant="h3">
              high quality, custom-designed clothes
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Lottie isStopped options={defaultOptions} width='50rem'/>
      </Grid>
    </Grid>
  )
}
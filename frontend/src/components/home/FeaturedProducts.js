import React, { useState } from  'react'
import clsx from 'clsx'
import Grid from `@material-ui/core/Grid`
import Typography from `@material-ui/core/Typography`
import IconButton from `@material-ui/core/IconButton`
import Button from `@material-ui/core/Button`
import Chip from `@material-ui/core/Chip`
import { makeStyles } from `@material-ui/core/styles`
import { useStaticQuery, graphql } from 'gatsby'

import featureAdornment from '../../images/featured-adornment.svg'
import frame from '../../images/product-frame-grid.svg'
import explore from '../../images/explore.svg'
import Rating from './Rating'

const useStyles = makeStyles(theme => ({
  background: {
    backgroundImage: `url(${featureAdornment})`,
    backgroundPosition: 'top',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    width: '100%',
    height: '180rem',
    padding: '0 2.5rem'
  },
  featured: {
    height: '20rem',
    width: '20rem'
  },
  frame: {
    backgroundImage: `url(${frame})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    borderRadios: 0,
    height: '24.85rem ',
    width: '24.85rem ',
    boxSizing: 'border-box',
    boxShadow: theme.shadow[5],
    position: 'absolute',
    zIndex: 1
  },
  slide: {
    backgroundColor: theme.palette.primary.main,
    height: '20rem',
    width: '24.5rem',
    zIndex: 0,
    transition: 'transform 0.5s ease',
    padding: '1rem    2rem'
  },
  slideLeft: {
    transform: 'translate{-24.5rem, 0px'
  },
  slideRight: {
    transform: 'translate{24.5rem, 0px'
  },
  productContainer: {
    margin: '5rem 0'
  },
  exploreContainer: {
    marginTop: 'auto'
  },
  exploreButton: {
    textTransform: 'none'
  },
  exploreIcon: {
    height: '1.5rem',
    marginLeft: '1rem'
  },
  chipLabel: {
    ...theme.typography.h5
  },
  chipRoot: {
    backgroundColor: theme.palette.secondary.main
  }
}))

export default function FeaturedProductions(){
  const classes = useStyles()
  const {expanded, setExpanded} = useState(null)
  const data = useStaticQuery(graphql`
  query GetFeatured {
    allStrapiProducts(filter: {featured: {eq: true}}) {
      edges {
        node {
          name
          strapiId
          variants {
            price
            images {
              url
            }
          }
        }
      }
    }
  }`)

  return (
    <Grid classes={{ root: classes.background}} direction='column' justify='center' container >
      {data.allStrapiProducts.edges.map(({node}, i) => {
        const alignment = i===0 || i===3 ? 'flex-start' : i===1 || i===4 ? 'center' : 'flex-end'

        return (
        <Grid item container justify={alignment} key={node.strapiId} alignItems='center'
         classes={{root: classes.productContainer}} >
          <IconButton classes={{root: classes.frame}} onClick={
            () => expanded === i ? setExpanded(null) : setExpanded(i)} >
            <img src={process.env.GATSBY_STRAPI_URL + node.variants[0].images[0].url}
              alt={node.name} className={classes.featured} />
          </IconButton>
          <Grid container direction='column' classes={{ root: clsx(classes.slide, {
            [classes.slideLeft]: expanded === i && alignment === 'flex-end',
            [classes.slideRight]: expanded === i && (alignment === 'flex-start' || alignment === 'center')
            })}}>
            <Grid item >
              <Typography variant='h4' >{node.name.split(' ',[0])}</Typography>
            </Grid>
            <Grid item > 
              <Rating number={4} />
            </Grid>
            <Grid item >
              <Chip classes={{root: classes.chipRoot}} label={`$${node.variants[0].price}`}/>            
            </Grid>
            <Grid item classes={{root: classes.exploreContainer, label: classes.chipLabel}} >
              <Button classes={{root: classes.exploreButton}}>
                <Typography variant='h5' > Details </Typography>
                <img src={explore} alt='go to product details' classes={{root: classes.exploreIcon}} />
              </Button>            
            </Grid>
          </Grid>
        </Grid>
      )})}
    </Grid>
  )
}
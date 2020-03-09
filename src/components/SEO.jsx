import React from 'react'
import { Helmet } from 'react-helmet'

const siteTitle = 'Vocal Performance'

const SEO = props => {
  return <Helmet title={`${props.title} | ${siteTitle}`} />
}

export default SEO

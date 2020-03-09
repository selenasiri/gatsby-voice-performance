import React from 'react'
import { Link } from 'gatsby'
import SEO from '../components/SEO'
import Layout from '../components/layout/Layout'

const NotFound = () => {
  return (
    <Layout title="Page Not Found">
      <SEO title="Not Found" />

      <h1>Page Not Found</h1>
      <p>
        <Link to="/">Head home</Link>
      </p>
    </Layout>
  )
}

export default NotFound

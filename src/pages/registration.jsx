import React from 'react'
import Layout from '../components/layout/Layout'
import SEO from '../components/SEO'
import registration from '../assets/images/registration.jpeg'

const Registration = () => {
  return (
    <Layout title="Registration">
      <SEO title="Registration" />

      <h1>Registration</h1>

      <img className="registration" src={registration} alt="registration" />
    </Layout>
  )
}

export default Registration

import React from 'react'
import Layout from '../components/layout/Layout'
import SEO from '../components/SEO'
import registration from '../assets/images/registration.jpeg'

const Registration = () => {
  return (
    <Layout title="Registration">
      <SEO title="Registration" />

      <h1>Registration</h1>

      <img classNameName="registration" src={registration} alt="registration" />

      <div id="form-errors-container">
        <div id="errors">&nbsp; </div>
      </div>

      <form
        name="myForm"
        onsubmit="return validate()"
        className="submitssion-form"
        action="#"
        method="post"
      >
        <fieldset>
          <legend>Contact Info</legend>

          <div className="name-group-container">
            <div className="name-group">
              <label for="firstname">First Name</label>
              <input
                type="text"
                name="firstname"
                id="firstname"
                title="first name"
              />
            </div>
            <br />

            <div className="name-group">
              <label for="lastname">Last Name</label>
              <input
                type="text"
                name="lastname"
                id="lastname"
                title="last name"
              />
            </div>
          </div>
          <br />
        </fieldset>
        <br /> <br />
        <input className="submit-btn" type="submit" value="Validation Form" />
      </form>
    </Layout>
  )
}

export default Registration

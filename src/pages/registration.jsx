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
          <div className="email">
            <label for="email">Email</label>
            <input type="text" name="email" id="email" title="email" />
          </div>
          <br />
          <label htmlFor="streetName">Street Name:</label>
          <input type="text" name="streetName" id="streetName" />
          <br />
          <br />
          <label htmlFor="city">City:</label>
          <input type="text" name="city" id="city" />
          <div className="state">
            <label for="state">State </label>

            <select name="state" id="state">
              <option value=""></option>
              <option value="alabama">Alabama</option>
              <option value="alaska">Alaska</option>
              <option value="arizona">Arizona</option>
              <option value="arkansas">Arkansas</option>
              <option value="california">California</option>
              <option value="colorado">Colorado</option>
              <option value="connecticut">Connecticut</option>
              <option value="deliware">Deliware</option>
              <option value="florida">Florida</option>
              <option value="georgia">Georgia</option>

              <option value="hawaii">Hawaii</option>
              <option value="idaho">Idaho</option>
              <option value="illinois">Illinois</option>
              <option value="indiana">Indiana</option>
              <option value="iowa">Iowa</option>
              <option value="kansas">Kansas</option>
              <option value="kentucky">Kentucky</option>
              <option value="louisiana">Louisiana</option>
              <option value="maine">Maine</option>
              <option value="maryland">Maryland</option>

              <option value="massachusetts">Massachusetts</option>
              <option value="michigan">Michigan</option>
              <option value="minnesota">Minnesota</option>
              <option value="mississippi">Mississippi</option>
              <option value="missouri">Missouri</option>
              <option value="montana">Montana</option>
              <option value="nebraska">Nebraska</option>
              <option value="nevada">Nevada</option>
              <option value="newHampshire">New Hampshire</option>
              <option value="newJersey">New Jersey</option>

              <option value="newMexico">New Mexico</option>
              <option value="newYork">New York</option>
              <option value="northCarolina">North Carolina</option>
              <option value="northDakota">North Dakota</option>
              <option value="Ohio">Ohio</option>
              <option value="Oklahoma">Oklahoma</option>
              <option value="Oregon">Oregon</option>
              <option value="Pennsylvania">Pennsylvania</option>
              <option value="rhodeIsland">Rhode Island</option>
              <option value="southCarolina">South Carolina</option>

              <option value="southDakota">South Dakota</option>
              <option value="tennessee">Tennessee</option>
              <option value="texas">Texas</option>
              <option value="utah">Utah</option>
              <option value="vermont">Vermont</option>
              <option value="virginia">Virginia</option>
              <option value="washington">Washington</option>
              <option value="westVirginia">West Virginia</option>
              <option value="wisconsin">Wisconsin</option>
              <option value="wyoming">Wyoming</option>
            </select>
          </div>
          <br />
          <label for="zipCode">Zip Code:</label>
          <input
            type="text"
            name="zipCode"
            id="zipCode"
            size="10"
            maxlength="10"
          />
          <br />
          <br />
          <label for="areaCode">Telephone:</label>
          <input
            type="text"
            name="areaCode"
            id="areaCode"
            size="3"
            maxlength="3"
          />
          -
          <input
            type="text"
            name="phonePrefix"
            id="phonePrefix"
            size="3"
            maxlength="3"
          />
          -
          <input
            type="text"
            name="phoneSuffix"
            id="phoneSuffix"
            size="4"
            maxlength="4"
          />
        </fieldset>
        <br /> <br />
        <input className="submit-btn" type="submit" value="Validation Form" />
      </form>
    </Layout>
  )
}

export default Registration

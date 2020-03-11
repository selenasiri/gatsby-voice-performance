import React from 'react'
import Layout from '../components/layout/Layout'
import SEO from '../components/SEO'
import pianoSheet from '../assets/images/piano-sheet.jpeg'

const index = () => {
  return (
    <Layout title="Vocal Performance">
      <SEO title="Home" />

      <img className="sheet-music" src={pianoSheet} alt="piano sheet music" />
      <h1>Home Page</h1>
      <div>
        <p>
          Over the last few centuries vocal performance has been a phenomenon
          through the world of opera. With origins coming from Greece and Italy
          opera has set the stage for audiences all around the world to enjoy!
          On this site you will learn more about the most famous prima donnas,
          the classics that made them famous and other useful tools that can
          help anyone. A few examples include Maria Callas, Renata Tebaldi,
          Montserrat Caballe and Renee Fleming. From learning to become a better
          speaker to learning foreign languages, you will realize all the
          various skills an opera singer must know. We hope that you will
          continue your passion for music by viewing the literature and
          resources we recommend. If you choose to register you will be notified
          via email with the most relevant news in today's world of opera.
        </p>
        <br />
        {/* <img src="images/city.jpeg" alt="piano sheet music" /> */}
      </div>
    </Layout>
  )
}

export default index

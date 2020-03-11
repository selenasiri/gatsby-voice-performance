import React from 'react'
import Layout from '../components/layout/Layout'
import SEO from '../components/SEO'
import talkback from '../assets/images/talkback.jpeg'
import feedback from '../assets/images/feedback.jpeg'

const Feedback = () => {
  return (
    <Layout title="Feedback">
      <SEO title="Feedback" />

      <img className="talkback" src={talkback} alt="talkback" />
      <h1>Feedback</h1>
      <p>
        "Wow you're website looks very nice! How did you design those colors?"
        -Linda Zhu.
        <br />
        <br />
        "Very impressive. Perhaps one day you can teach me how to build a site
        with HTML" -Frank Siri.
        <br />
        <br />
        "So proud of you friend. If I register can I get emails with more
        information?" -Ananya Kapoor.
        <br />
        <br />
        "Pretty neat!" -Damien Siri.
        <br />
        <br />
        "It looks professional! I have a friend who is in computer science and
        they really enjoy it!"-Hui Diao.
      </p>
      <img className="feedback" src={feedback} alt="feedback" />
    </Layout>
  )
}

export default Feedback

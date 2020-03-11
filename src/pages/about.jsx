import React from 'react'
import Layout from '../components/layout/Layout'
import SEO from '../components/SEO'
import headshot from '../assets/images/headshot.jpeg'

const About = () => {
  return (
    <Layout title="About">
      <SEO title="About" />

      <img className="headshot" src={headshot} alt="headshot" />
      <p>
        Selena Siri was first introduced to opera at the age of seventeen when
        her voice teacher suggested that her voice was better suited to this
        style rather than musical theatre. Even though her heart had been
        attached to musical theatre styles of singing, she also knew that the
        biggest strength of her voice was her top register. Following this
        advice she continued to receive her bachelor’s degree from Mason Gross
        School of the Arts, Rutgers University where she was taught ear
        training, music theory, music history, movement and other areas in the
        world of opera.
        <br />
        <br />
        "Over time I found that classical music could be just as enjoyable as
        pop or contemporary music. This was especially true if I overcame
        language barriers to make it more easily understood. After learning
        Mandarin in Beijing from the “Shui Li Fang” Chinese pop competition I
        felt eager to learn more foreign languages. In college I took language
        courses up to Advanced Italian Conversation and Fundamental French in
        order to get a grasp of the diction and culture. These skills have
        benefited me through summer programs in ‘The Greek Opera Studio’ where I
        sang Barbarina (Le nozze di Figaro) and The New York Lyric Opera’ where
        I reprised the opera in the role of Susanna."
        <br />
        <br />
        "Now as a member of the New York Singing Teachers Association I am
        continuing my vocal studies through seminars. I also feel an enormous
        duty to give back and extend my knowledge to my students in private
        piano and singing lessons. Through teaching contemporary and classical
        styles of music, I hope that I can share this passion with others and
        teach others to perform each role with justice. At the end of the day it
        is about telling a story that will benefit others. For more information
        please visit my
        <a href="https://selenasiri.com/" target="_blank">
          {' '}
          website.
        </a>
        "
      </p>
    </Layout>
  )
}

export default About

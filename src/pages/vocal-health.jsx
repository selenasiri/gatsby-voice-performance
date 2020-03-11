import React from 'react'
import Layout from '../components/layout/Layout'
import SEO from '../components/SEO'
import yoga from '../assets/images/yoga.jpeg'
import nutrition from '../assets/images/nutrition.jpeg'
import speakingVoice from '../assets/images/speaking-voice.jpg'

const VocalHealth = () => {
  return (
    <Layout title="Vocal Health">
      <SEO title="Vocal Health" />

      <h1>Vocal Health</h1>
      <p>
        While many singers would be thrilled for the opportunity to perform, it
        is an essential part of the career to ensure that they are not rushing
        to use their instrument too fast. In other words, several of the classic
        roles such as those of Verdi and Puccini require a certain level of
        vocal maturity in order to be performed well. Otherwise a singer might
        put theirself at risk of vocal injury if their body is not prepared to
        handle such repertoire. This is why knowing when and where to say "no"
        will be the most helpful tool to a singer. In addition to maturity,
        proper vocal technique is imperative to learn so that the larynx will
        remain low and relaxed, rather than tense which put the vocal folds at
        risk of experiencing disorders such as MTD - muscle tension dysphonia,
        vocal nodules, partial or full paralysis and vocal hemorrages. In doing
        so the power source is left to come from the diaphragm, intercostal
        muscles and pelvic floor muscles which are all responsible for proper
        breath control. Knowing this information of how to sing properly and
        know when to sing are the two most important decisions for a sustainable
        career.
      </p>
      <br />
      <img className="yoga" src={yoga} alt="yoga" />
      <p>
        Many singers who also practice meditation have also received enormous
        benefits. This occurs since one of the main points is to focus on the
        breath and how they are experiencing the current moment. With all sorts
        of stressors in people's lives, finding a way to turn off their stress
        levels and create a safe environment physically, mentally and
        spiritually and be more productive outside of meditation.
      </p>
      <br />
      <img className="nutrition" src={nutrition} alt="nutrition" />
      <p>
        Along with mental health it is just as necessary to maintain physical
        health too. Eating a balanced nutritional diet will provide a singer
        with the fuel they need to thrive vocally. Today there is a higher
        likelyhood of a singer being cast if they stay in shape and are able to
        dance or move well onstage. This is because of the increased visual
        demand of audiences through the Met HD that are looking for a more
        visually entertaining production in addition to a wonderful sound.
      </p>
      <br />
      <p>
        Lastly, if a singer's speaking voice uses the same instrument, it is
        important for a singer to treat this with the same respect as singing.
        Shouting, yelling or straining can all have excessive tension and
        negative results on the vocal chords. This is why singers must be aware
        of their surroundings and social situations when speaking. Breathiness,
        over pushing, or deepening are all ways a person can change the tone of
        their voices to communicate. Speaking resonantly and allowing the voice
        to naturally flow up and down is the healthiest and least demanding on
        the vocal folds. Therefore singers should be aware of this and remind
        themselves to speak comfortably and healthy for themselves and a
        prolonged career.
      </p>
      <img
        className="speaking-voice"
        src={speakingVoice}
        alt="speaking-voice"
      />
      <br />
      <p>
        Please click on pages and resources to learn more on how to maintain a
        healthy vocal technique.
      </p>
    </Layout>
  )
}

export default VocalHealth

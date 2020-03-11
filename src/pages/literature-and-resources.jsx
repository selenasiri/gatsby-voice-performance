import React from 'react'
import Layout from '../components/layout/Layout'
import SEO from '../components/SEO'

const Literature = () => {
  return (
    <Layout title="Literature and Resources">
      <SEO title="Literature and Resources" />

      <p>
        The following books are resources for students to continue their vocal
        studies. Whether they are eager to learn about the anatomy and
        physiology of the voice or private interviews with the great divas,
        these resources are a wonderful start.
      </p>
      <p>Simply click on each title to learn more!</p>

      <ol>
        <li>
          <a href="https://www.amazon.com/Singers-Guide-Complete-Health/dp/0195374037/ref=pd_sbs_14_img_0/142-4542806-4846510?_encoding=UTF8&pd_rd_i=0195374037&pd_rd_r=ea259f6a-03e4-4eb4-8a54-e8021f2bde15&pd_rd_w=eePcr&pd_rd_wg=Xt98C&pf_rd_p=5cfcfe89-300f-47d2-b1ad-a4e27203a02a&pf_rd_r=DJ00FPSJMZCER1SV7FXB&psc=1&refRID=DJ00FPSJMZCER1SV7FXB">
            “The Singer’s Guide to Complete Health” by Dr. Anthony F. Jahn
          </a>
        </li>
        <li>
          <a href="https://www.amazon.com/Last-Prima-Donnas-Lanfranco-Rasponi/dp/0879100400/ref=sr_1_1?keywords=the+last+prima+donnas&qid=1575518118&s=books&sr=1-1">
            “The Last Prima Donnas” by Lanfranco Rasponi
          </a>
        </li>
        <li>
          <a href="https://www.amazon.com/Securing-Baritone-Bass-Baritone-Bass-Voices/dp/0195322657/ref=sr_1_2?keywords=bass+bass+baritone&qid=1575518205&s=books&sr=1-2">
            “Securing Baritone, Bass-Baritone, and Bass Voices” by Richard
            Miller
          </a>
        </li>
      </ol>
    </Layout>
  )
}

export default Literature

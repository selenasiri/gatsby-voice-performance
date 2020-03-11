import React from 'react'
import Layout from '../components/layout/Layout'
import SEO from '../components/SEO'

const GreatDiva = () => {
  const getArtist = event => {
    console.log('ssssss')

    const selectedArtistName = event.target.value
    console.log(selectedArtistName)
  }

  return (
    <Layout title="The Great Divas">
      <SEO title="Great Divas" />

      <div>
        <div id="artist"></div>
      </div>

      <h1>Search Artist</h1>
      <select id="selectedArtist" onChange={getArtist}>
        <option value="Maria Callas">Maria Callas</option>
        <option value="Luciano Pavarotti">Luciano Pavarotti</option>
        <option value="Joan Sutherland">Joan Sutherland</option>
        <option value="Renata Tebaldi">Renata Tebaldi</option>
        <option value="Montserrat Caballe">Montserrat Caballé</option>
      </select>
    </Layout>
  )
}

export default GreatDiva

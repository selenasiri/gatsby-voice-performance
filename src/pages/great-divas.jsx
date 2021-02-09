import React, { useState, useEffect } from 'react'
import Layout from '../components/layout/Layout'
import SEO from '../components/SEO'
import mariaCallas from '../assets/images/maria-callas.jpeg'

const GreatDiva = () => {
  const [artstName, setArtstName] = useState('Maria Callas')

  const getArtist = event => {
    const selectedArtistName = event.target.value
    console.log(selectedArtistName)
    setArtstName(selectedArtistName)
  }

  useEffect(() => {
    console.log(artstName)
    document.title = `${artstName} | Vocal Performance`
  }, [artstName])

  return (
    <Layout title="The Great Divas">
      <SEO title="Great Divas" />

      <div>
        <div id="artist">
          <h1>{artstName}</h1>
          <img
            className="mariaCallas"
            src={mariaCallas}
            alt="mariaCallas"
          />{' '}
          <h3>Followers: 176,760</h3>
        </div>
      </div>
      <h1>Search Artist</h1>
      <select id="selectedArtist" onChange={getArtist}>
        <option value="Maria Callas">Maria Callas</option>
        <option value="Luciano Pavarotti">Luciano Pavarotti</option>
        <option value="Renata Tebaldi">Renata Tebaldi</option>
        <option value="Montserrat Caballe">Montserrat Caballé</option>
      </select>
    </Layout>
  )
}

export default GreatDiva

import React, { useState, useEffect } from 'react'
import Layout from '../components/layout/Layout'
import SEO from '../components/SEO'

const Example = () => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${count} times`
  }, [count])

  return (
    <Layout title="The Great Divas">
      <SEO title="Great Divas" />
      <div>
        <p>You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>Click me to up</button>
        <br />
        <button onClick={() => setCount(count - 1)}>Click me to down</button>
        <br />
        <button onClick={() => setCount(count * 2)}>Click me x2 </button>
      </div>
    </Layout>
  )
}

export default Example

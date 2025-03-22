import React from 'react'
import About from './components/About'
import NewsList from '../news/components/NewsList'

const page = () => {
  return (
    <div>
      <About />
      <NewsList title="Industry Trends & Future of Automobiless" />
    </div>
  )
}

export default page
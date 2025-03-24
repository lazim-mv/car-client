import React from 'react'
import About from './components/About'
import NewsList from '../news/components/NewsList'
import WrapperContactPage from '../contact/components/WrapperContactPage'

const page = () => {
  return (
    <div>
      <About />
      {/* <NewsList title="Industry Trends & Future of Automobiless" /> */}
      <WrapperContactPage />
    </div>
  )
}

export default page
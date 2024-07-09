import React from 'react'
import Header from './component/header/Header.js'
import Banner from './component/home/banner/Banner.js'
import Footer from './component/footer/Footer.js'
import AcademyPage from './component/home/AcademyPage.js'

const App = () => {
  return (
    <div>
      <Header/>
      <Banner/>
      <AcademyPage/>
      <Footer/>
    </div>
  )
}

export default App

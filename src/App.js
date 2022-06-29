import React from 'react'
import SimpleThreeColumns from './components/Cta'
import SmallWithLogoLeft from './components/Footer'
import CallToActionWithAnnotation from './components/Hero'
import Nav from './components/Navbar'


const App = () => {
  return (
    <div>
      <Nav />
      <CallToActionWithAnnotation />
      {/*<SimpleThreeColumns />*/}
      <SmallWithLogoLeft />
    </div>
  )
}

export default App

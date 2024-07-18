import React from 'react'
import HeroContainer from './Hero/HeroContainer'
import Gallery from './Gallery/Gallery'
import PopularClasses from './PopularClasses/PopularClasses'
import PopularTeacher from './PopularTeacher/PopularTeacher'

const Home = () => {
  return (
    <section>
      <HeroContainer/>
      <div className='max-w-screen-xl mx-auto'>
        <PopularClasses/>
        <PopularTeacher/>
        <Gallery/>
      </div>
    </section>
  )
}

export default Home

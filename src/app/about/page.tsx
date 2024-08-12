import CompareImage from '@/components/Compare'
import CoverText from '@/components/CoverText'
import Slider from '@/components/Slider'
import React from 'react'

function About() {
  return (
    <div>
        <h1 className='text-3xl font-bold p-10 text-center'>About Me</h1>
        <Slider />
        <CompareImage />
        <CoverText />
    </div>
  )
}

export default About
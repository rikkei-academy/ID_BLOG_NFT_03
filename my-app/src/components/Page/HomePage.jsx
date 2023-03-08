import React from 'react'
import ExploreArt from '../Home/ExploreArt'
import Hero from '../Home/Hero'
import LiveAuctions from '../Home/LiveAuctions'
import Navbar from '../Home/Navbar'
import PopularArtist from '../Home/PopularArtist'

export default function HomePage() {
  return (
    <>
        <Navbar/>
        <Hero/>
        <LiveAuctions/>
        <ExploreArt/>
        <PopularArtist/>
    </>
  )
}

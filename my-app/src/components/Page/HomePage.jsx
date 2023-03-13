import React from 'react'
import CTA from '../Home/CTA'
import ExploreArt from '../Home/ExploreArt'
import Footer from '../Home/Footer'
import Hero from '../Home/Hero'
import LiveAuctions from '../Home/LiveAuctions'
import Navbar from '../Home/Navbar'
import PopularArticles from '../Home/PopularArticles'
import PopularArtist from '../Home/PopularArtist'

export default function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <LiveAuctions />
      <ExploreArt />
      <PopularArtist />
      <PopularArticles />
      <CTA />
      <Footer />
    </>
  )
}

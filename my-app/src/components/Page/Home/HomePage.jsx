import React from 'react'
import ExploreArt from './Tasks/ExploreArt'
import Hero from './Tasks/Hero'
import LiveAuctions from './Tasks/LiveAuctions'
import Navbar from './Tasks/Navbar'
import PopularArtist from './Tasks/PopularArtist'
import PopularArticles from './Tasks/PopularArticles'
import CTA from './Tasks/CTA'
import Footer from './Tasks/Footer'

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

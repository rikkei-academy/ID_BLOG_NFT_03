import React from 'react'
import CTA from './CTA'
import ExploreArt from './ExploreArt'
import Footer from './Footer'
import Hero from './Hero'
import LiveAuctions from './LiveAuctions'
import Navbar from './Navbar'
import PopularArticles from './PopularArticles'
import PopularArtist from './PopularArtist'

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

import React from 'react'
import {
  AboutUs,
  Services,
  FeaturedJobs,
  Testimonials,
  HowItWorks,
  Statistics,
  CTA,
  FAQ,
  ContactInfo,
  HeroSection
} from '../../components/Home'

function Home() {
  return (
    <div>
    <HeroSection />
    <AboutUs />
    <Services />
    <FeaturedJobs />
    <Testimonials />
    <HowItWorks />
    <Statistics />
    <CTA />
    <FAQ />
    <ContactInfo />
  </div>
  )
}

export default Home
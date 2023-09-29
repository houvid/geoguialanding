export const metadata = {
  title: 'Geoguia',
  description: 'Somos tu aliado que llevará a cabo tu estrategia de centralización de datos georeferenciados.',
}

import Hero from '@/components/hero'
import Features from '@/components/features'
import Newsletter from '@/components/newsletter'
import Zigzag from '@/components/zigzag'
import Testimonials from '@/components/testimonials'

export default function Home() {
  return (
    <>
      <Hero />
      <Zigzag />
      {/* <Testimonials />
      <Newsletter /> */}
    </>
  )
}

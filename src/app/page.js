import Navbar from '@/components/Navbar'
import About from '@/components/about/About'
import Portfolio from '@/components/portfolio/Portfolio'

import { headers } from 'next/dist/client/components/headers'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="bg-gradient-to-b from-black to-gray-900 ">
      <Navbar />
      <About />
    </main>
  )
}

import Head from 'next/head'

import { CallToAction } from '@/components/CallToAction'
import { Faqs } from '@/components/Faqs'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Hero2 } from '@/components/Hero2'
import { Pricing } from '@/components/Pricing'
import HowItWorks from '@/components/HowItWorks'
import { Reviews } from '@/components/Reviews'
import { About } from '@/components/About'
import ArticlesPreview from '@/components/ArticlesPreview'

export default function Home() {
  return (
    <>
      <Head>
        <title>
          Wellness at Work. Empowering hard-working people to stay happy,
          focussed and avoid burnout
        </title>
        <meta
          name="description"
          content="A platform to empower your team to focus on their wellness and avoid burnout."
        />
      </Head>
      <Header />
      <main>
        <Hero2 />
        <About />
        <HowItWorks />
        <CallToAction />
        <Pricing />
        <Faqs />
        <ArticlesPreview />
      </main>
      <Footer />
    </>
  )
}

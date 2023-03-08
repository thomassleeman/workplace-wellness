import { useId, useRef, useState } from 'react'
import clsx from 'clsx'
import { motion, useInView, useMotionValue } from 'framer-motion'
import MacBookAir from './MacBookAir.jsx'
import BackgroundIllustration from './BackgroundIllustration.jsx'
import { AppScreen } from '@/components/AppScreen'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'

/* Icon from Watch Video Button */
function PlayIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <circle cx="12" cy="12" r="11.5" stroke="#D4D4D4" />
      <path
        d="M9.5 14.382V9.618a.5.5 0 0 1 .724-.447l4.764 2.382a.5.5 0 0 1 0 .894l-4.764 2.382a.5.5 0 0 1-.724-.447Z"
        fill="#A3A3A3"
        stroke="#A3A3A3"
      />
    </svg>
  )
}

export function Hero2() {
  return (
    <div className=" overflow-hidden py-20 sm:py-32 lg:pb-32 xl:pb-36">
      <Container>
        <div className="lg:grid lg:grid-cols-12">
          <div className="z-10 mx-auto max-w-2xl lg:col-span-6 lg:max-w-none lg:pt-6 lg:text-start xl:col-span-6">
            <h1 className="text-4xl font-medium tracking-tight text-green-900">
              Happiness is a{' '}
              <em className="underline decoration-yellow-300 underline-offset-8">
                team effort
              </em>
              .
            </h1>
            <p className="mt-6 text-lg text-gray-600">
              Empower your team to stay happy, focussed and productive and to
              avoid burnout using the workplace wellness app that focusses on
              stress and mental health.
            </p>
            <div className="mt-8 flex justify-center gap-x-6 lg:justify-start">
              <Button href="#" className=" bg-green-600">
                Get Started
              </Button>
              <Button href="https://youtu.be/utlTIlZtyb4" variant="outline">
                <PlayIcon className="h-6 w-6 flex-none" />
                <span className="ml-2.5">Watch the video</span>
              </Button>
            </div>
          </div>
          <div className=" mt-10 sm:mt-20 lg:col-span-6 lg:mt-0 xl:col-span-6">
            <div className=" xl:-bottom-32">
              <BackgroundIllustration className="absolute" />
              <MacBookAir />
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

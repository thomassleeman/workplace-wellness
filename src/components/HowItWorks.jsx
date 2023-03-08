import Image from 'next/image'
import { Container } from './Container'

import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
} from '@heroicons/react/20/solid'

const features = [
  {
    name: 'Measure Employee Satisfaction.',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'Support to avoid Burnout.',
    description:
      'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.',
    icon: LockClosedIcon,
  },
  {
    name: 'Empower your people.',
    description:
      'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus.',
    icon: ServerIcon,
  },
  {
    name: 'Another one of these.',
    description:
      'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus.',
    icon: ServerIcon,
  },
]

export default function HowItWorks() {
  return (
    <div className="overflow-hidden py-24 sm:py-32">
      <Container>
        <div className="mx-auto max-w-7xl md:px-4 lg:px-6">
          <div className="mb-14">
            <h1 className="text-4xl  font-medium tracking-tight text-green-900">
              The Wellness Platform that{' '}
              <em className="underline decoration-yellow-300 underline-offset-4">
                focusses on mental health
              </em>{' '}
              and avoiding burnout.
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              et tellus eleifend orci egestas suscipit eget eu ante. Quisque
              eget venenatis turpis, ac vehicula enim. Aenean pretium
              pellentesque nibh, sit amet ultricies elit ultrices et.
              Suspendisse pulvinar turpis erat, ut posuere arcu viverra non.
            </p>
          </div>
          {/* Start of 2nd part of page */}
          <div className="grid grid-cols-1 gap-y-16 gap-x-24 sm:gap-y-20 lg:grid-cols-2 lg:items-start">
            <div className="self-center sm:px-6 lg:px-0">
              <div className="relative isolate overflow-hidden bg-yellow-200 px-6 pt-12 sm:mx-auto sm:max-w-2xl sm:rounded-3xl sm:pt-16 sm:pl-16 sm:pr-0 lg:mx-0 lg:max-w-none">
                <div
                  className="absolute -inset-y-px -left-3 -z-10 w-full origin-bottom-left skew-x-[-30deg] bg-indigo-100 opacity-20 ring-1 ring-inset ring-white"
                  aria-hidden="true"
                />
                <div className="mx-auto max-w-2xl sm:mx-0 sm:max-w-none">
                  <Image
                    src="https://tailwindui.com/img/component-images/project-app-screenshot.png"
                    alt="Product screenshot"
                    width={2432}
                    height={1442}
                    className="-mb-12 w-[57rem] max-w-none rounded-tl-xl bg-gray-800 ring-1 ring-white/10"
                  />
                </div>
                <div
                  className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-black/10 sm:rounded-3xl"
                  aria-hidden="true"
                />
              </div>
            </div>
            <div className=" px-6 lg:px-0 lg:pr-4 ">
              <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-lg">
                <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                  {features.map((feature) => (
                    <div
                      key={feature.name}
                      className="relative cursor-pointer rounded bg-white p-4 hover:outline hover:outline-yellow-200 active:border-slate-200 "
                    >
                      <div className="inline font-semibold text-gray-900">
                        <dt>{feature.name}</dt>
                        {/* <feature.icon
                        className="absolute top-1 left-1 h-5 w-5 text-indigo-600"
                        aria-hidden="true"
                      /> */}
                      </div>
                      <dt className="inline">{feature.description}</dt>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

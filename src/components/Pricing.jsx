import WellnessLogoGreen from '@/components/WellnessLogoGreen'

import { useState } from 'react'
import { RadioGroup } from '@headlessui/react'
import { CheckIcon } from '@heroicons/react/20/solid'

const frequencies = [
  { value: 'monthly', label: 'Monthly', priceSuffix: '/month' },
  { value: 'annually', label: 'Annually', priceSuffix: '/year' },
]
const currencies = [
  { value: 'euro', label: '€' },
  { value: 'sterling', label: '£' },
]
const tiers = [
  {
    name: 'Start Ups',
    id: 'tier-start',
    href: '#',
    price: { monthly: '15', annually: '155' },
    description: 'Access to the full platform for small companies.',
    features: [
      'Access to all content',
      'Up to 10 subscribers',
      'Basic analytics',
    ],
    mostPopular: false,
  },
  {
    name: 'Company',
    id: 'tier-co',
    href: '#',
    price: { monthly: '30', annually: '288' },
    description: 'A plan that scales with your rapidly growing business.',
    features: [
      'Up to 100 subscribers',
      'Advanced analytics',
      '24-hour support response time',
    ],
    mostPopular: true,
  },
  {
    name: 'Organisation',
    id: 'tier-org',
    href: '#',
    price: { monthly: '60', annually: '576' },
    description: 'A tier for multi-site companies.',
    features: [
      'Unlimited subscribers',
      'Advanced analytics',
      '1-hour, dedicated support response time',
      'Custom reporting tools',
    ],
    mostPopular: false,
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export function Pricing() {
  const [frequency, setFrequency] = useState(frequencies[0])
  const [currency, setCurrency] = useState(currencies[0])

  return (
    <div className="py-24 sm:py-32">
      <div id="pricing" className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          {/* <h2 className="text-base font-semibold leading-7 text-gray-600">
            Pricing
          </h2> */}
          <p className="mt-2 text-4xl font-bold tracking-tight text-green-900 sm:text-5xl">
            Pricing plans for teams of&nbsp;all&nbsp;sizes
          </p>
        </div>
        <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-gray-600">
          Support your people with an affordable plan that will give them access
          to our features and content.
        </p>
        <div className="mt-16 flex justify-center align-middle">
          <RadioGroup
            value={currency}
            onChange={setCurrency}
            className="mr-2 grid grid-cols-2 gap-x-1 rounded-full p-1 text-center text-base font-semibold leading-5 ring-1 ring-inset ring-gray-200"
          >
            <RadioGroup.Label className="sr-only">Currency</RadioGroup.Label>
            {currencies.map((option) => (
              <RadioGroup.Option
                key={option.value}
                value={option}
                className={({ checked }) =>
                  classNames(
                    checked ? 'bg-green-600 text-white' : 'text-gray-500',
                    'cursor-pointer rounded-full py-1 px-2.5'
                  )
                }
              >
                <span>{option.label}</span>
              </RadioGroup.Option>
            ))}
          </RadioGroup>
          {/* </div>
        <div className="mt-8 flex justify-center"> */}
          <RadioGroup
            value={frequency}
            onChange={setFrequency}
            className="ml-2 grid grid-cols-2 gap-x-1 rounded-full p-1 text-center text-xs font-semibold leading-5 ring-1 ring-inset ring-gray-200"
          >
            <RadioGroup.Label className="sr-only">
              Payment frequency
            </RadioGroup.Label>
            {frequencies.map((option) => (
              <RadioGroup.Option
                key={option.value}
                value={option}
                className={({ checked }) =>
                  classNames(
                    checked ? 'bg-green-600 text-white' : 'text-gray-500',
                    'cursor-pointer rounded-full py-1 px-2.5'
                  )
                }
              >
                <span>{option.label}</span>
              </RadioGroup.Option>
            ))}
          </RadioGroup>
        </div>
        <div className="isolate mx-auto mt-10 grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {tiers.map((tier) => (
            <div
              key={tier.id}
              className={classNames(
                tier.mostPopular
                  ? 'ring-2 ring-green-600'
                  : 'ring-1 ring-gray-300',
                'rounded-3xl p-8 xl:p-10'
              )}
            >
              <div className="flex items-center justify-between gap-x-4">
                <h3
                  id={tier.id}
                  className={classNames(
                    tier.mostPopular ? 'text-green-600' : 'text-gray-900',
                    'text-lg font-semibold leading-8'
                  )}
                >
                  {tier.name}
                </h3>
                {tier.mostPopular ? (
                  <p className="rounded-full bg-green-600/10 py-1 px-2.5 text-xs font-semibold leading-5 text-green-600">
                    Most popular
                  </p>
                ) : null}
              </div>
              <p className="mt-4 text-sm leading-6 text-gray-600">
                {tier.description}
              </p>
              <p className="mt-6 flex items-baseline gap-x-1">
                <span className="text-4xl font-bold tracking-tight text-gray-900">
                  {`${currency.label}${tier.price[frequency.value]}`}
                </span>
                <span className="text-sm font-semibold leading-6 text-gray-600">
                  {`per user${frequency.priceSuffix}`}
                </span>
              </p>
              <a
                href={tier.href}
                aria-describedby={tier.id}
                className={classNames(
                  tier.mostPopular
                    ? 'bg-green-600 text-white shadow-sm hover:bg-green-500'
                    : 'text-green-600 ring-1 ring-inset ring-green-200 hover:ring-green-300',
                  'mt-6 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
                )}
              >
                Buy plan
              </a>
              <ul
                role="list"
                className="mt-8 space-y-3 text-sm leading-6 text-gray-600 xl:mt-10"
              >
                {tier.features.map((feature) => (
                  <li key={feature} className="flex gap-x-3">
                    <CheckIcon
                      className="h-6 w-5 flex-none text-green-600"
                      aria-hidden="true"
                    />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

import { AppStoreLink } from '@/components/AppStoreLink'
import { CircleBackground } from '@/components/CircleBackground'
import { Container } from '@/components/Container'
import { Button } from '@/components/Button'

export function CallToAction() {
  return (
    <section
      id="get-free-shares-today"
      className="relative overflow-hidden bg-white py-20 sm:py-28"
    >
      <div className="absolute top-1/2 left-20 -translate-y-1/2 sm:left-1/2 sm:-translate-x-1/2">
        <CircleBackground color="#019f04" className="animate-spin-slower" />
      </div>
      <Container className="relative">
        <div className="mx-auto max-w-md sm:text-center">
          <h2 className="text-slate text-3xl font-medium tracking-tight sm:text-4xl">
            Sign up for a{' '}
            <em className="underline decoration-red-500 underline-offset-4">
              free
            </em>{' '}
            trial today
          </h2>
          <p className="mt-4 text-lg text-slate-700">
            It takes 30 seconds to sign up. Create an account today and see how
            our platform can support your people.
          </p>
          <div className="mt-8 flex justify-center">
            <Button href="#" className="hidden bg-green-600 lg:block">
              Start your{' '}
              <em className="underline decoration-white decoration-1 underline-offset-2">
                free
              </em>{' '}
              trial
            </Button>
          </div>
        </div>
      </Container>
    </section>
  )
}

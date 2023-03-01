import Image from 'next/image'

export function MacFrame() {
  return (
    <Image
      src="/images/MacBookAir.png"
      alt="computer"
      width={1500}
      height={1500}
      priority
    />
  )
}

import { Head, Html, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html className="h-full bg-amber-50 antialiased" lang="en">
      <Head />
      <body className="flex h-full flex-col">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

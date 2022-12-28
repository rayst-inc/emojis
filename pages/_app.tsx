import { Analytics } from '@vercel/analytics/react'
import { NextSeo } from 'next-seo'
import { AppProps } from 'next/app'
import Head from 'next/head'
import Script from 'next/script'
import { SEO } from 'src/lib/next-seo'
import 'styles/globals.css'

export const isProd = () => process.env.NEXT_PUBLIC_VERCEL_ENV === 'production'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, viewport-fit=cover"
        />
      </Head>

      <NextSeo {...SEO} />
      <Component {...pageProps} />
      {isProd() && (
        <>
          <Script
            async
            defer
            data-website-id="76ea6a40-d192-4c98-a13f-46aa70f725a3"
            src="https://u.ray.st/u.js"
          ></Script>
          <Analytics />
        </>
      )}
    </>
  )
}

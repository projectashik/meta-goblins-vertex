import { Footer } from "@/components/sections/Distributor"
import { createEmotionCache, MantineProvider } from "@mantine/core"
import { Nunito } from "@next/font/google"
import Head from "next/head"
import "../styles/globals.css"

const nunito = Nunito({
  weights: [400, 700],
  subsets: ["latin"],
})

export default function App(props) {
  const { Component, pageProps } = props

  const mantineCache = createEmotionCache({
    key: "mantine",
    prepend: false,
  })

  return (
    <div className={nunito.className}>
      <Head>
        <title>
          LeftoverLift - Revolutionizing the way we manage food waste.
        </title>
        <meta
          name='viewport'
          content='minimum-scale=1, initial-scale=1, width=device-width'
        />
      </Head>

      <MantineProvider
        emotionCache={mantineCache}
        withGlobalStyles
        withNormalizeCSS
        theme={{
          /** Put your mantine theme override here */
          colorScheme: "light",
          colors: {
            brand: ["ECD41C"],
          },
        }}
      >
        <Component {...pageProps} />
        <Footer />
      </MantineProvider>
    </div>
  )
}

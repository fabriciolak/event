import type { AppProps } from 'next/app'
import Link from 'next/link'

import { globalStyles } from '../styles/global'
import { Header, Footer } from '../styles/pages/app'

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header>
        <span>Event</span>
        
        <div>
          <Link href="/criarevento">Criar evento</Link>
        </div>
      </Header>
      <Component {...pageProps} />
      <Footer>
        Event © plataforma de eventos online
      </Footer>
    </>
  )
}

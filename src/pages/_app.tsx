import type { AppProps } from 'next/app'

import { globalStyles } from '../styles/global'
import { Header, Footer } from '../styles/pages/app'

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header>
        <span>Event</span>
        
        <div>
          <a href="/criarevento">Criar evento</a>
        </div>
      </Header>
      <Component {...pageProps} />
      <Footer>
        Event © plataforma de eventos online
      </Footer>
    </>
  )
}

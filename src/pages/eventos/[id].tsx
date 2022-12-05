import { GetServerSideProps, GetStaticPaths, GetStaticProps } from "next"
import Image from "next/image"
import { Calendar, CaretRight } from 'phosphor-react'
import { supabase } from "../../services/supabase"

import { Container } from '../../styles/pages/eventosId'

interface EventPageProps {
  created_at: string
  name: string
  description: string
  image: string
  address: string
  ticket_price: number[]
}

export default function EventPage({ name, description, address, created_at, image, ticket_price }: EventPageProps) {
  const data = new Date(created_at).toLocaleDateString()
  const hours = new Date(created_at).toLocaleTimeString()   

  return (
    <Container>
      <header>
        <Image src={image} width={1180} height={480} alt="" />
      </header>
      <main>
        <h1>{name}</h1>
        <span><Calendar color="#000" /> {data} <CaretRight color="#000" /> {hours}</span>
        <span>{address}</span>

        <p>{description}</p>
      </main>
      <article>
        <h2>Tabela de preços</h2>
        {ticket_price.map(ticket => (
          <span key={ticket}>
            Preço: {new Intl.NumberFormat('pt-br', { style: 'currency', currency: 'BRL' }).format(ticket * 100)} por pessoa
          </span>
        ))}
      </article>
    </Container>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [{ params: {id: '1'} }],
    fallback: 'blocking'
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const eventId = params?.id
  
  try {
    const { data, error } = await supabase.from("events").select("*").eq("id", eventId)
    const { name, description, created_at, address, image, ticket_price } = data && data[0]
    
    return {
      props: { name, description, created_at, address, image, ticket_price },
      revalidate: 60 * 1
    }
  } catch (err) {
    return {
      notFound: true
    }
  }
}
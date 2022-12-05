import Image from "next/image";
import Link from "next/link";
import { GetServerSideProps } from "next";

import { CaretRight } from "phosphor-react"
import { Container, Article } from "../../styles/pages/eventos";
import { supabase } from "../../services/supabase";
interface Events {
  events: {
    id: number
    created_at: string | null
    name: string | null
    description: string | null
    image: string
    address: string | null
  }[]
}

export default function Event({ events }: Events) {
  return (
    <Container>
      <h1>Festas e shows</h1>

      <div className="grid">
        {events.map(event => (
          <Article key={event.id}>
            <Link href={`eventos/${event.id}`}>
              <Image 
              width={264}
              height={134}
              src={event.image}
              alt="BAILE DA FAVORITA :: TANTRAROSA | 30/12"
              />

              <div>
                <span>27 DEZ <CaretRight color="#000" /> 28 JAN</span>
                <h3>{event.name}</h3>

                <span>{event.address}</span>
              </div>
            </Link>
          </Article>
        ))}
      </div>
    </Container>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  let { data: events, error } = await supabase
    .from('events')
    .select('*')
  
  return {
    props: {
      events
    }
  }
}
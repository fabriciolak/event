import Link from "next/link";
import { Container } from "../styles/pages/home";

export default function Home() {
  return (
    <Container>
      <h1>
        Alcance seu público alvo aumentando o alcance do seu evento com nossa plataforma.
      </h1>
      <p>
        Event ajuda você a criar eventos, e alcance seu público alvo aumentando o alcance do seu evento com nossa plataforma.
      </p>
      
      <div>
        <Link href="/eventos">Saiba mais</Link>
      </div>
    </Container>
  )
}
import { FormEvent, useState } from "react";
import { supabase } from "../services/supabase";
import { Container, Form } from "../styles/pages/criarevento";

export default function CriarEvento() {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [image, setImage] = useState("")
  const [address, setAddress] = useState("")
  const [ticketPrice, setTicketPrice] = useState("")

  async function handleCreateNewEvent(e: FormEvent) {
    e.preventDefault()

    let { data, error, status, statusText, count } = await supabase.from('events').insert([{
      name: title,
      address: address,
      description: description,
      image: image,
      ticket_price: [ticketPrice]
    }])

    alert('Evento criado')

    setTitle("")
    setDescription("")
    setImage("")
    setAddress("")
    setTicketPrice("")

    if(error) alert(error.message)

  }

  return (
    <Container>
      <h1>Criar eventos</h1>
      
      <Form onSubmit={handleCreateNewEvent}>
        <label htmlFor="name">Nome</label>
        <input 
          type="text"
          id="name" 
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        
        <label htmlFor="address">Endereço</label>
        <input 
          type="text"
          id="address" 
          required
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />

        <label htmlFor="description">Descrição</label>
        <input 
          type="text"
          id="description" 
          required
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <label htmlFor="image">URL da imagem</label>
        <input 
          type="text"
          id="image" 
          required
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
        
        <label htmlFor="ticketPrice">Preço do ingresso</label>
        <input 
          type="text"
          id="ticketPrice" 
          required
          value={ticketPrice}
          onChange={(e) => setTicketPrice(e.target.value)}
        />


        <button type="submit">Enviar</button>
      </Form>
    </Container>
  )
}
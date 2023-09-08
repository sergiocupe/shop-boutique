import "./Item.css"
import { Button, Card } from "react-bootstrap"

export default function Item({ prod }) {
  return (
    <Card bg="light" className="mb-3 card-custom text-center">
      <Card.Img
        variant="top"
        src={`${process.env.PUBLIC_URL}/productos/${prod.imagen}`}
        className="imgProducto"
      />
      <Card.Body>
        <Card.Title className="titulo-custom">{prod.producto}</Card.Title>
        <Card.Text className="descripcion-custom">{prod.descripcion}</Card.Text>
        <Card.Text>
          <span className="precio-custom">$ {prod.precio}</span>
        </Card.Text>
        <Card.Text>
          <Button variant="primary">AGREGAR</Button>
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

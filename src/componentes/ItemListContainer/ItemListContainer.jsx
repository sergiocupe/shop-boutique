import {Container, Row, Col} from "react-bootstrap"
import Item from "../Item/Item"
import "./ItemListContainer.css"

export default function ItemListContainer() {
  
  //Listado de productos como array de objetos para llenar el ItemListContainer
  const itemsProductos = [
    {producto:"Campera Capucha Gdo 24/7 Camperita",imagen:"campera.jpg",descripcion:"Campera con cierre Capucha GDO 24/7 Hombre Slim Fit Hoodie.",precio:"40.000"},
    {producto:"Remera Camiseta Fútbol Arquero Manga Larga",imagen:"camiseta.jpg",descripcion:"Remera Camiseta Manga Larga Deportiva Premium. Ideal para todo tipo de deportes de entrenamientos.",precio:"14.000"},
    {producto:"Jean Clasico Rica Lewis Lona Gruesa",imagen:"jeans.jpg",descripcion:"Jean elastizado de excelente calidad premium. Talles del 45 al 60, todos los colores.",precio:"12.000"},
    {producto:"Remeras Algodón Peinado 24/1 Lisas",imagen:"remera.jpg",descripcion:"Indumentaria laboral y publicitaria. Remeras, buzos, estampados, bordados.",precio:"18.000"},    
    {producto:"Pollera Anime Kpop Tableada Todos Los Talles",imagen:"pollera.jpg",descripcion:"Pollera tableada que seguro querrás tener en tu placar, es de tela bengalina elastizada y te la ofrecemos en tres colores que de segur.o",precio:"9.000"},
    {producto:"Sweater Hombre Pullover Abrigo",imagen:"swetter.jpg",descripcion:"Sweater Liso Hombre, Pullover Escote O y V, Con Pitucones, Importado - Excelente calce y confección.",precio:"19.000"}
  ]

  return (
    <Container>
      <Row>
        <Col>
          <h1 className="tituloListado">Listado de productos</h1>
        </Col>
      </Row>
      <Row>        
          {itemsProductos.map((item) => (<Col><Item prod={item} /></Col>))}        
      </Row>
    </Container>
  )
}

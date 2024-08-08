import { Container, Col, Row } from 'react-bootstrap';
import Footer from './Components/Footer';
import Header from './Components/Header';
import { BaseCard } from './Components/Card/BaseCard';

function App() {
  return (
    <Container>
      <Header />
      <Row>
        <h1 className="text-center">Welcome to PokeDEX-REACT</h1>
      </Row>
      <Row className='my-3 px-4 py-2'>
        <Col md={4}>
          <BaseCard 
            title="Pokedex" 
            subtitle="" 
            description="The Pokédex section has a wealth of information on all the Pokémon creatures from the entire game series. On the main list pages you can see the various stats of each Pokémon. Click a Pokémon's name to see a detailed page with Pokédex data, descriptions from previous games, sprites, evolutions, moves and more!" 
            link="/pokemon" 
            key={1} />
        </Col>
        <Col md={4}>
          <BaseCard 
            title="Moves" 
            subtitle="" 
            description="The attackdex section lists the available moves from the Pokémon games. The power, accuracy and PP are listed along with any additional effects." 
            link="/Moves" 
            key={2} />
        </Col>
        <Col md={4}>
          <BaseCard 
            title="Abilities" 
            subtitle="" 
            description="Each ability from the latest generation of Pokémon games is listed below, along with a short description and how many Pokémon can have that ability. Click an ability name to see the Pokémon that can learn it." 
            link="/Abilities" 
            key={2} />
        </Col>
      </Row>
      <Row className='my-3 px-4 py-2'>
        <h1 className='text-center'>Forúm</h1>
      </Row>
      <Footer />
    </Container>
  );
}

export default App;

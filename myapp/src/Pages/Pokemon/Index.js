import { Container, Row, Col, Form, Button, InputGroup } from "react-bootstrap";
import LayoutPage from '../../Components/Layout/index';
import Loader from "../../Components/Loader";
import { useEffect, useState } from "react";
import { BaseCard } from "../../Components/Card/BaseCard";

export default function Pokemon() {
    const [pokemonsList, setPokemonsList] = useState([]);
    const [pokemonsListSelect, setPokemonsListSelect] = useState([]);
    const [filterName, setFilterName] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPokemons = async () => {
            try {
                const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=1302');
                const data = await response.json();
                if (data.results) {
                    // Update state with the new list of pokemons
                    setPokemonsList(data.results);
                    setPokemonsListSelect(data.results);
                    setLoading(false);
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        // Call the async function
        fetchPokemons();
    }, []);


    const handleFilterName = (e) => {
        setFilterName(e.target.value);
        if (e.target.value) {
            var resultFilter = pokemonsList.filter(element => {
                if (element.name.startsWith(e.target.value))
                    return element;
            });

            setPokemonsListSelect(resultFilter);
        }
    }

    const handleButtonPokemonName = () => {
        var resultFilter = pokemonsList.filter(e => {
            if (e.name.startsWith(filterName))
                return e;
        });

        setPokemonsListSelect(resultFilter);
    }

    if (loading)
        return (
            <LayoutPage>
                <Row>
                    <h1 className="text-center">Welcome to PokeDEX-REACT</h1>
                </Row>
                <Form className="my-5 px-4 py-4">
                    <InputGroup className="mb-3">
                        <Form.Control type="text" placeholder="Pokemon name" onChange={handleFilterName} />
                        {/* <Button variant="primary" onClick={handleButtonPokemonName}>Filtrar</Button> */}
                    </InputGroup>
                </Form>
                <Loader />
            </LayoutPage>
        );
    if (error) return <p>Error... {error.message}</p>;

    return (
        <LayoutPage>
            <Row>
                <h1 className="text-center">Welcome to PokeDEX-REACT</h1>
            </Row>
            <Form className="my-5 px-4 py-4">
                <InputGroup className="mb-3">
                    <Form.Control type="text" placeholder="Pokemon name" onChange={handleFilterName} />
                    {/* <Button variant="primary" onClick={handleButtonPokemonName}>Filtrar</Button> */}
                </InputGroup>
            </Form>
            <Row className='my-5 px-4 py-4'>
                {pokemonsListSelect.map(item => {
                    return (
                        <Col sm={4} key={item.name} className="py-2">
                            <BaseCard
                                title={item.name}
                                subtitle=""
                                description=""
                                link={`/pokemon/${item.name}`}
                                key={1} />
                        </Col>
                    )
                })}
            </Row>
        </LayoutPage>
    )
}
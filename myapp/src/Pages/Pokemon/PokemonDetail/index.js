import { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom"
import Loader from "../../../Components/Loader";
import LayoutPage from "../../../Components/Layout";
import Resume from './Resume';
import Evolutions from "./Evolutions";
import { Accordion, Card, Col, Row } from "react-bootstrap";

export default function PokemonDetail() {

    const { id } = useParams();
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchSpecies = async (speciesUrl) => {
            try{
                const response = await fetch(speciesUrl);
                if(!response)
                    throw new Error("Network response was not ok - Species");

                const result = await response.json();
                return result;
            }
            catch(err){
                setError(err);
            }
        }

        const fetchData = async () => {
            try {
                const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
                if (!response)
                    throw new Error('Network response was not ok');

                const result = await response.json();

                const species = await fetchSpecies(result.species.url);
                result["speciesData"] = species;
                // console.log(result);
                setData(result);
            }
            catch (err) {
                setError(err);
            }
            finally {
                setLoading(false);
            }
        }

        fetchData();
    }, [id]);

    if (loading) return <Loader />;
    if (error) return <p>Error... {error.message}</p>;

    return (
        <LayoutPage>
            <Row>
                <h1 className="text-center">{data.name.toUpperCase()}</h1>
            </Row>
            <Row>
                <Col lg={8}>
                    <Row className="my-3">
                        <Resume
                            accordionKey="0"
                            name={data.name}
                            types={data.types}
                            versionName={data.game_indices[0].version.name}
                        />
                    </Row>
                    <Row>
                        <Evolutions 
                            data={data}
                            accordionKey="1"
                        />
                    </Row>
                </Col>
                <Col lg={4}>
                    <Card>
                        <img src={data.sprites.front_default} alt="pokemon_default_front" />
                    </Card>
                </Col>
            </Row>
        </LayoutPage>
    )
}
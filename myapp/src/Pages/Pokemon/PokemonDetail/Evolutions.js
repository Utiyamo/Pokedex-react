import { useEffect, useMemo, useState } from "react"
import { Accordion } from "react-bootstrap";

const Evolutions = ({ data, accordionKey }) => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [evolutions, setEvolutions] = useState(null);

    useEffect(() => {
        const fetchData = async (url) => {
            try {
                let evolutionResult = [];

                const response = await fetch(url);
                if (!response)
                    throw new Error("Network response was not ok - Evolutions");

                const result = await response.json();
                evolutionResult.push({
                    name: result.chain.species.name,
                    is_base: true,
                    details: null
                });

                console.log("EvolutionChain => ", result);
                if (result.chain.evolves_to.length > 0) {
                    

                }
                setEvolutions(evolutionResult);
            }
            catch (err) {
                setError(err);
            }
            finally {
                setLoading(false);
            }
        }

        fetchData(data.speciesData.evolution_chain.url)
    }, []);

    const evolutionText = useMemo(() => {
        console.log("EVOLUTIONS => ", evolutions);
        return 'Evolutions';
    }, [evolutions]);

    return (
        <Accordion defaultActiveKey={accordionKey}>
            <Accordion.Item eventKey={accordionKey}>
                <Accordion.Header>Evolutions</Accordion.Header>
                <Accordion.Body>
                    {evolutionText}
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    );
}

export default Evolutions;
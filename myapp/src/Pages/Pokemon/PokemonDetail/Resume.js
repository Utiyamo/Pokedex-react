import { useMemo } from "react";
import { Accordion } from "react-bootstrap";

const Resume = ({ accordionKey, name, types, versionName }) => {

    const resumeText = useMemo(() => {
        let text = '';

        let capitalizeName = name.charAt(0).toUpperCase() + name.slice(1);
        text += `${capitalizeName} is a `;
        if (types.length == 1)
            text += `${types[0].type.name} type Pokemon `;
        else
            text += `dual-type ${types[0].type.name}/${types[1].type.name} Pokemon `;

        text += `introduced in `;
        switch (versionName) {
            case 'red':
            case 'blue':
            case 'yellow':
                text += 'Generation I.';
                break;

            case 'gold':
            case 'silver':
            case 'crystal':
                text += 'Generation II.';
                break;

            case 'ruby':
            case 'saphire':
            case 'emerald':
            case 'firered':
            case 'leafgreen':
                text += 'Generation III.';
                break;

            case 'diamond':
            case 'oearl':
            case 'platinum':
            case 'heartgold':
            case 'soulsilver':
                text += 'Generation IV.'
                break;

            case 'black':
            case 'white':
            case 'black-2':
            case 'white-2':
                text += 'Generation V.';
                break;

            default:
                text += 'Generation';
                break;
        }

        return text;
    }, []);

    return (
        <Accordion defaultActiveKey={accordionKey}>
            <Accordion.Item eventKey={accordionKey}>
                <Accordion.Header>Resume</Accordion.Header>
                <Accordion.Body>
                    {resumeText}
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    )
}

export default Resume;
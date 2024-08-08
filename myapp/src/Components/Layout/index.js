import { Container, Row, Col, Form, Button, InputGroup } from "react-bootstrap";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";

const LayoutPage = ({ children }) => {
    return(
        <Container>
            <Header />
            <main>
                {children}
            </main>
            <Footer />
        </Container>
    )
}

export default LayoutPage;
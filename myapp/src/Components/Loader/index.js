import { Container, Spinner } from "react-bootstrap";

export default function Loader() {
    return (
        <div className="fullscreen-loader">
            <p className="loading-text">
                <Spinner animation="border" role="status"></Spinner>
            </p>
        </div>
    )
}
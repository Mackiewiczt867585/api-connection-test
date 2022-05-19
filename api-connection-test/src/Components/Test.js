import { Container, Row, Col, Image } from 'react-bootstrap';


function Test(props) {
    return (
        <>
        <Container>
            <Row>
                <Col>
                    <Image src='https://randomuser.me/api/portraits/women/67.jpg' roundedCircle />
                </Col>
            </Row>
            <Row>
                <Col>Adres e-mail: {props.user?.email}</Col>
            </Row>
            <Row>
                <Col>Imie i nazwisko: {props.user?.name}</Col>
            </Row>
            <Row>
                <Col>Ulica i numer domu: {props.user?.address.street} {props.user?.address.suite}</Col>
            </Row>
            <Row>
                <Col>Miasto i kod pocztowy: {props.user?.address.city} {props.user?.address.zipcode}</Col>a
            </Row>
        </Container>
        </>
    );
}

export default Test;
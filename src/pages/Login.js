import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import '../assets/css/App.css';
import img from '../assets/images/meal-logo.png';

function Login() {

    let navigate = useNavigate();
    const handleSubmit = () => {
        navigate('/dashboard');
    }

    return (
        <Container fluid>
            <Row className="First-Page">
                <Col md={8}>
                    <img
                        style={{ width: '800px' }}
                        src={img}
                    />
                </Col>
                <Col md={8}>
                    <div className="Login-Class">
                        <div>
                            <marquee style={{ fontSize: '40px', color: '#1a9931' }}>Welcome to Healthy Meals</marquee>
                            <Form onSubmit={handleSubmit}>
                                <Button variant="primary" type="submit" className="Login-Button">
                                    Grab Some Meals
                                </Button>
                            </Form>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container >


    );
}

export default Login;


import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import header from './header.module.scss';
import { NavLink } from 'react-router-dom';

const Header = (props) => (
    <header className = {header.header}>
        <Container>
            <Row>
                <Col>
                    <div className = {header.inner}>
                        <span className = {header.logo}>SN</span>
                        <Button variant="success">
                            { props.isAuth ? props.login
                                : <NavLink to={'/login'}>Login</NavLink>}
                        </Button>
                    </div>
                </Col>
            </Row>
        </Container>
    </header>
);

export default Header;
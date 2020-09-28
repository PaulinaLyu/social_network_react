import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import header from './header.module.scss';

const Header = () => (
    <header className = {header.header}>
        <Container>
            <Row>
                <Col>
                    <div className = {header.inner}>
                        <span className = {header.logo}>SN</span>
                    </div>
                </Col>
            </Row>
        </Container>
    </header>
);

export default Header;
import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import follow from './follow.module.scss';

const Follow = () => (
    <div className = {follow.follow}>
		<Container>
            <Row>
                <Col>
					<div className = {follow.inner}>
                        <h2 className={follow.title}>Follow me</h2>
						<a href="#" className={follow.link}>Facebook</a>
                        <a href="#" className={follow.link}>Pinterest</a>
                        <a href="#" className={follow.link}>Twitter</a>
                        <a href="#" className={follow.link}>Instagram</a>
					</div>
                </Col>
            </Row>
        </Container>
	</div>
);

export default Follow;
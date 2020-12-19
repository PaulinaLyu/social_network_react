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
						<a href="https://ru-ru.facebook.com/" className={follow.link}>Facebook</a>
                        <a href="https://www.pinterest.com/" className={follow.link}>Pinterest</a>
                        <a href="https://twitter.com/" className={follow.link}>Twitter</a>
                        <a href="https://www.instagram.com/" className={follow.link}>Instagram</a>
					</div>
                </Col>
            </Row>
        </Container>
	</div>
);

export default Follow;
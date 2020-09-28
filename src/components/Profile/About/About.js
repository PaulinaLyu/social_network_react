import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';	
import about from './about.module.scss';

const About = () => (
    <div className = {about.about}>
		<Container>
			<Row>
				<Col>
					<div className = {about.inner}>
						<h2>Kate Palson</h2>
						<p>The man who goes out alone can start today; but he who travels with another must wait till that other is ready.</p>
						<div className = {about.info}>
							<div className = {about.info_item}>
								{/* <i class="fas fa-map-marker-alt"></i> */}
								<p>Photographer</p>
							</div>
							<div className = {about.info_item}>
								{/* <i class="fas fa-map-marker-alt"></i> */}
								<p>Porto, Portugal</p>
							</div>
							<div className = {about.info_item}>
								{/* <i class="fas fa-map-marker-alt"></i> */}
								<p>Travel, Surfing</p>
							</div>
						</div>
					</div>
				</Col>
			</Row>
		</Container>
	</div>
);

export default About;
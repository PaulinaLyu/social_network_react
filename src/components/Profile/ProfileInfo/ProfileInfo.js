import React from 'react';
import Spinner from 'react-bootstrap/Spinner';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';	
import about from './about.module.scss';
import Avatar from '../../Avatar/Avatar';
import ProfileStatus from './ProfileStatus';

const ProfileInfo = (props) => {
	if (!props.profile) {
		return  (
			<>
				<Spinner animation="grow" variant="success" />
				<Spinner animation="grow" variant="success" />
				<Spinner animation="grow" variant="success" />
			</>
		) 
	}

	return (
		<div className = {about.about}>
			<Container>
				<Row>
					<Col>
						<Avatar />
						<div className = {about.inner}>
							<h2>{props.profile.fullName}</h2>
							<p>{props.profile.aboutMe}</p>
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
								<ProfileStatus status={props.status} updateUserStatus={props.updateUserStatus}/>
							</div>
						</div>
					</Col>
				</Row>
			</Container>
		</div>
	)

};

export default ProfileInfo;
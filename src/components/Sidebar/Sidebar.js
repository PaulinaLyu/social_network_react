import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import sidebar from './sidebar.module.scss';
import {NavLink} from 'react-router-dom';

const Sidebar = () => (
    <div className = {sidebar.sidebar}>
		<Container>
            <Row>
                <Col>
					<div className = {sidebar.inner}>
						<NavLink to='/profile' className={sidebar.link} activeClassName={sidebar.active}>Profile</NavLink>
          				<NavLink to='/dialogs' className={sidebar.link} activeClassName={sidebar.active}>Dialogs</NavLink>
						<NavLink to='/users' className={sidebar.link} activeClassName={sidebar.active}>Users</NavLink>
						<NavLink to='/photoes' className={sidebar.link} activeClassName={sidebar.active}>Photos</NavLink>
					</div>
                </Col>
            </Row>
        </Container>
	</div>
);

export default Sidebar;
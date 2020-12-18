import React from 'react';
import { Route } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';	
import './App.scss';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Wallpaper from './components/Wallpaper/Wallpaper';
import Avatar from './components/Avatar/Avatar';
import Follow from './components/Follow/Follow';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import UsersContainer from './components/Users/UsersContainer';

const App = () => {
  	return (
		<>
      		<Header />
			<Wallpaper />
      		<Sidebar />
			<Container>
				<Row>
					<Col>
						<Avatar />
						<Follow />
					</Col>
				</Row>
			</Container>
			<Container>
				<Row>
					<Route path='/profile' 
						render={ () => <Profile /> } />

					<Route exact path='/dialogs' 
						render={ () => <Dialogs /> } />

					<Route exact path='/users' 
						render={ () => <UsersContainer /> } />
				</Row>
			</Container>
		</>
  	)
}
export default App;

import React from 'react';
import { Route } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import './App.scss';
import Sidebar from './components/Sidebar/Sidebar';
import Wallpaper from './components/Wallpaper/Wallpaper';
import Follow from './components/Follow/Follow';
import Dialogs from './components/Dialogs/Dialogs';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';

const App = () => {
  	return (
		<>
      		<HeaderContainer />
			<Wallpaper />
      		<Sidebar />
			<Follow />
			<Container>
				<Row>
					<Route path='/profile/:userId?' 
						render={ () => <ProfileContainer /> } />

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

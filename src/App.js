import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';	
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Wallpaper from './components/Wallpaper/Wallpaper';
import Avatar from './components/Avatar/Avatar';
import Follow from './components/Follow/Follow';
import Profile from './components/Profile/Profile';
import Footer from './components/Footer';
import Dialogs from './components/Dialogs/Dialogs';
import Friends from './components/Friends';
import './App.scss';

const App = ({ state }) => {

  	return (
    	<BrowserRouter>
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
			<Route path='/profile' 
				render={ () => <Profile posts={state.profilePage.posts}/> }></Route>
			<Route exact path='/dialogs' 
				render={ () => <Dialogs contacts={state.dialogsPage.contacts} /> }></Route>
			{/* <Friends /> */}
     		{/* <Footer /> */}
    	</BrowserRouter>
  	)
}
export default App;

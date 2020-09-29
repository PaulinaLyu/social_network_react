import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import state, { addPost, updatePostText, subscribe } from './redux/state';

const renderDom = (state) => {
	ReactDOM.render(
		<BrowserRouter>
			<App state={state} addPost={addPost} updatePostText={updatePostText} />
		</BrowserRouter>,
	document.getElementById('root')
  )
}

renderDom(state);

subscribe(renderDom);
import React from 'react';
// import Button from 'react-bootstrap/Button';
import { Field, reduxForm } from 'redux-form';
import { FormControl } from '../common/FormsControls/FormsControls';



const LoginForm = (props) => {
	return (
		<form onSubmit={props.handleSubmit}>
			<Field placeholder={'Login'} type={'text'} name={'login'}  component={FormControl} />
			<Field placeholder={'Password'} type={'password'} name={'password'} component={FormControl} />
			<Field type={'checkbox'} name={'rememberMe'} component={FormControl} /> remember me
			<button>Login</button>
			{/* <Button variant="success">Login</Button> */}
		</form>
	)
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);

export default LoginReduxForm;
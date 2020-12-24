import React from 'react';
import LoginReduxForm from './LoginReduxForm';

const Login = () => {
	const onSubmit = (formData) => {
		console.log(formData);
	}

	return <>
		<h1>LOGIN</h1>
		<LoginReduxForm onSubmit={onSubmit} />
		</>
}
    
export default Login;
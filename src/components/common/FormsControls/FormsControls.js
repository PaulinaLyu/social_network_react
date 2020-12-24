import React from 'react';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';

export const FormControl = ({input, meta, ...props}) => {
	const hasError = meta.touched && meta.error;
	return ( 
		<>
			<Form.Control as={props.as}
			type={props.type}
			rows={props.rows}
			placeholder={props.placeholder}
			{...input}
			{...props}
			/>
			{ hasError && <Alert variant={'danger'}>{meta.error}</Alert>}
		</>
	)
}


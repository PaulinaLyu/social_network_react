import React from 'react';
import { Field, reduxForm } from 'redux-form';
import Form from 'react-bootstrap/Form';
import { requiredField, maxLengthCreator } from '../../../utils/validators/validators';
import { FormControl } from '../../common/FormsControls/FormsControls';

const maxLength140 = maxLengthCreator(140);

const PostForm = (props) => {
	return (
		<Form onSubmit={props.handleSubmit}>
			<Form.Group>
				<Field placeholder={'What is new today?'} as={'textarea'} rows={'4'} name={'newPostText'} component={FormControl} validate={[requiredField, maxLength140]}/>
				<button>Add</button>
				{/* <Button variant="success">Add</Button> */}
			</Form.Group>
		</Form>
	)
}

const PostFormRedux = reduxForm({form: 'profileAddNewPostForm'})(PostForm);

export default PostFormRedux;
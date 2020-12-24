import React from 'react';
import { Field, reduxForm } from 'redux-form';
import Form from 'react-bootstrap/Form';
import { requiredField, maxLengthCreator } from '../../../utils/validators/validators';
import { FormControl } from '../../common/FormsControls/FormsControls';

const maxLength50 = maxLengthCreator(50);

const MessagesForm = (props) => {
    return (
    <Form onSubmit={props.handleSubmit}>
        <Form.Group>
            <Field placeholder={'Enter your message'} as={'textarea'} rows={'3'} name={'newMessageBody'} component={FormControl} validate={[requiredField, maxLength50]}/>
        </Form.Group>
            <button>Send</button>
            {/* <Button variant="success">Send</Button> */}
    </Form>       
    )
};

const MessagesFormRedux = reduxForm({form: 'dialogAddMessageForm'})(MessagesForm);

export default MessagesFormRedux;
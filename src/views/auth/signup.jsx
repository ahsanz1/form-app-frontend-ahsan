import React from 'react';
import axios from 'axios';
import {
    Card,
    CardBody,
    Row,
    Col,
    CardSubtitle,
    Button,
    CardHeader,
    FormGroup,
    Label,
} from 'reactstrap';

import { Formik, Form, Field, ErrorMessage } from 'formik';

import withRedux from '../../redux';
import { useHistory } from "react-router-dom";

const Signup = (props) => {
    const history = useHistory();
    const handleSignup = async (values, { setSubmitting }) => {
        try {
            const res = await axios.post('http://localhost:3000/signup', { values });
            history.push('http://localhost:3006/auth/signup');
        } catch (err) {
            console.log(err);
        }
        setSubmitting(false);
        props.changeLoggedInFlag(false);
    };

    const handleValidations = (values) => {
        const errors = {};
        if (!values.name) {
            errors.name = '* Required';
        }
        if (!values.email) {
            errors.email = '* Required';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
            errors.email = '* Invalid email address';
        }
        if (!values.password) {
            errors.password = '* Required';
        }
        return errors;
    };

    return (
        <Row className=' '>
            <Col sm='2' md='3' />
            <Col sm='8' md='6'>
                <br />
                <br />
                <br />
                <br />

                <Card>
                    <CardHeader>Create a new account</CardHeader>
                    <CardBody>
                        <CardSubtitle></CardSubtitle>
                        {/* <hr /> */}

                        <Formik
                            initialValues={{ email: '', name: '', password: '' }}
                            validate={handleValidations}
                            onSubmit={handleSignup}
                        >
                            {({ isSubmitting }) => (
                                <Form>
                                    <FormGroup>
                                        <Label for='name'>Name</Label>
                                        <Field
                                            type='text'
                                            className='form-control'
                                            placeholder='your name'
                                            name='name'
                                        />
                                        <ErrorMessage
                                            name='name'
                                            component='small'
                                            className='text-danger'
                                        />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for='email'>Email</Label>
                                        <Field
                                            type='email'
                                            className='form-control'
                                            placeholder='someone@example.com'
                                            name='email'
                                        />
                                        <ErrorMessage
                                            name='email'
                                            component='small'
                                            className='text-danger'
                                        />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for='password'>Password</Label>
                                        <Field
                                            type='password'
                                            className='form-control'
                                            name='password'
                                            placeholder='********'
                                        />
                                        <ErrorMessage
                                            name='password'
                                            component='small'
                                            className='text-danger'
                                        />
                                    </FormGroup>
                                    <Row>
                                        <div className='col-auto'>
                                            <Button
                                                className='btn btn-success'
                                                type='submit'
                                                disabled={isSubmitting}>
                                                Sign up
                                                </Button>
                                        </div>
                                    </Row>
                                </Form>
                            )}
                        </Formik>
                    </CardBody>
                </Card>
            </Col>
        </Row>
    );
};

export default withRedux(Signup);

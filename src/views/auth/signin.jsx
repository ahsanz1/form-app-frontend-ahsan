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
import { Link } from 'react-router-dom';

const Signin = (props) => {
  const handleLogin = async (values, { setSubmitting }) => {
    try {
      const res = await axios.post('http://localhost:3000/login', { values });
      const accessToken = res.data.accessToken;
      window.localStorage.setItem(
        'accessToken', accessToken
      );
    } catch (err) {
      
    }
    setSubmitting(false);
    props.changeLoggedInFlag(true);
  };

  const handleValidations = (values) => {
    const errors = {};
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
          <CardHeader>Sign in to your account</CardHeader>
          <CardBody>
            <CardSubtitle></CardSubtitle>
            {/* <hr /> */}

            <Formik
              initialValues={{ email: '', password: '' }}
              validate={handleValidations}
              onSubmit={handleLogin}
            >
              {({ isSubmitting }) => (
                <Form>
                  <FormGroup>
                    <Label>Email</Label>
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
                    <div className='col'>
                      <p>
                        <small>
                          <a href='/' className='text-secondary'>
                            Forgot password?
                          </a>
                          <br />
                        </small>
                        <Link to="/auth/signup">Sign up for a new account</Link>
                      </p>
                    </div>
                    <div className='col-auto'>
                      <Button
                        className='btn btn-success'
                        type='submit'
                        disabled={isSubmitting}
                      >
                        Sign in
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

export default withRedux(Signin);

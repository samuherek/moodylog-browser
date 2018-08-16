// NPM
import React, { Component } from 'react';
import { Form, Text } from 'informed';

// COMPONENTS
import Button from '../../components/Button';

// ACTIONS/CONFIG
import Utils from '../../utils/Utils';
import { auth } from '../../firebase';

// STYLES

// MODULE
class SignUp extends Component {
  constructor() {
    super();
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleFormErrors = this.handleFormErrors.bind(this);
    this.setFormApi = this.setFormApi.bind(this);
  }

  setFormApi(formApi) {
    this.formApi = formApi;
  }

  handleFormSubmit(form) {
    const { onError, history } = this.props;
    const { email, password } = form;

    auth
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        auth.currentUser.sendEmailVerification().catch(function(error) {
          console.log('error sending email', error);
        });
      })
      .catch(error => {
        console.log('error signning up:', error);
      });
    history.push('/');
  }

  handleFormErrors(errors) {
    const { onError } = this.props;
    this.formApi.reset();
    onError(errors);
  }

  render() {
    return (
      <Form
        getApi={this.setFormApi}
        onSubmit={this.handleFormSubmit}
        onSubmitFailure={this.handleFormErrors}
      >
        <Text field="email" id="email" placeholder="Email" validate={Utils.validateEmail} />
        <Text
          field="password"
          id="password"
          type="password"
          placeholder="Password"
          validate={Utils.validatePassword}
        />
        <Button type="submit">Sign up</Button>
      </Form>
    );
  }
}

export default SignUp;

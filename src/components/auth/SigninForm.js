import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'

import { FormInput } from '../FormFields'

class SigninForm extends Component {
  render() {
    const { className } = this.props
    return (
      <form className={`${className} sign-in-form`}>
        <Field
          className='sign-in-form__email'
          name='email'
          type='email'
          title='Email'
          placeholder='Email'
          component={FormInput}
        />

        <Field
          className='sign-in-form__password'
          name='password'
          type='password'
          title='Password'
          placeholder='Password'
          component={FormInput}
        />
      </form>
    )
  }
}

SigninForm = reduxForm({
  form: 'SigninForm'
})(SigninForm)

export default SigninForm
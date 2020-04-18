import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'

import { FormInput, FormButton } from '../FormFields'
import Details from '../Details'
import history from '../../history'

class SignupForm extends Component {
  render() {
    const { className, handleSubmit } = this.props
    const requires = [
      {
        _id: 0,
        title: 'At least 6 characters',
      },
      {
        _id: 1,
        title: 'At least one number',
      },
      {
        _id: 2,
        title: 'At least one symbol',
      }
    ]
    return (
      <form className={`${className} sign-up-form`} onSubmit={handleSubmit}>
        <Field
          className='sign-up-form__name'
          name='name'
          type='name'
          title='Name'
          placeholder='Name'
          component={FormInput}
        />

        <Field
          className='sign-up-form__email'
          name='email'
          type='email'
          title='Email'
          placeholder='Email'
          component={FormInput}
        />

        <Field
          className='sign-up-form__password'
          name='password'
          type='password'
          title='Password'
          placeholder='Password'
          component={FormInput}
        />

        <Field
          className='sign-up-form__confirm'
          name='confirm'
          type='password'
          title='Confirm Password'
          placeholder='Confirm Password'
          component={FormInput}
        />

        <div className='sign-up-form__line' />

        <Field
          className='sign-up-form__login'
          name='login'
          type='submit'
          title='Create Account'
          onClick={() => history.push('/account')}
          component={FormButton}
        />
        <Field
          className='sign-up-form__back'
          short={true}
          name='back'
          type='button'
          title='Back'
          onClick={() => history.push('/signin')}
          component={FormButton}
        />
        <Details className="sign-up-form__details" title='Password Requirements' requires={requires} />
      </form>
    )
  }
}

SignupForm = reduxForm({
  form: 'SignupForm'
})(SignupForm)

export default SignupForm
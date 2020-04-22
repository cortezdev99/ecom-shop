import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'

import { FormInput, FormButton } from '../FormFields'
import history from '../../history'

class PaymentForm extends Component {
  render() {
    const { className, handleSubmit } = this.props
    
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
      </form>
    )
  }
}

PaymentForm = reduxForm({
  form: 'PaymentForm'
})(PaymentForm)

export default PaymentForm
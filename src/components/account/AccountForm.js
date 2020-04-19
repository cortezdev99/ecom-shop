import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'

import { FormInput, FormButton } from '../FormFields'
import history from '../../history'

class AccountInfoForm extends Component {
  render() {
    const { className, handleSubmit } = this.props
    return (
      <form className={`${className} sign-in-form`} onSubmit={handleSubmit}>
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

        <div className='sign-in-form__line' />

        <Field
          className='sign-in-form__login'
          name='login'
          type='submit'
          title='Login'
          onClick={() => history.push('/account')}
          component={FormButton}
        />
      </form>
    )
  }
}

AccountInfoForm = reduxForm({
  form: 'AccountInfoForm'
})(AccountInfoForm)

export default AccountInfoForm
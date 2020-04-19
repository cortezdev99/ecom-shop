import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'

import { FormInput, FormButton, LongGrayButton } from '../FormFields'

class AccountInfoForm extends Component {
  render() {
    const { className, handleSubmit } = this.props
    return (
      <form className={`${className} account-information-form`} onSubmit={handleSubmit}>
        <Field
          className='account-information-form__name'
          name='name'
          type='name'
          title='Name'
          placeholder='Name'
          component={FormInput}
        />

        <Field
          className='account-information-form__email'
          name='email'
          type='email'
          title='Email'
          placeholder='Email'
          component={FormInput}
        />

        <Field
          className='account-information-form__street-address'
          name='address'
          type='address'
          title='Street Address'
          placeholder='Street Address'
          component={FormInput}
        />

        <Field
          className='account-information-form__city'
          name='city'
          type='city'
          title='City'
          placeholder='City'
          component={FormInput}
        />

        <Field
          className='account-information-form__state'
          name='state'
          type='state'
          title='State'
          placeholder='State'
          component={FormInput}
        />

        <Field
          className='account-information-form__zipcode'
          name='zipcode'
          type='zipcode'
          title='Zipcode'
          placeholder='Zipcode'
          component={FormInput}
        />
        <Field
          className='account-information-form__change-password'
          name='change-password'
          type='button'
          labelTitle='Password'
          title='Change Password'
          onClick={() => console.log('tryna show passwords')}
          component={LongGrayButton}
        />
      </form>
    )
  }
}

AccountInfoForm = reduxForm({
  form: 'AccountInfoForm'
})(AccountInfoForm)

export default AccountInfoForm
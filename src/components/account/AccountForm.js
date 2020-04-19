import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'

import { FormInput, FormButton, LongGrayButton } from '../FormFields'

class AccountInfoForm extends Component {
  constructor() {
    super()

    this.state = {
      showPasswords: false
    }
  }


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

        <div key={3} className='account-information-form__line' />

        { this.state.showPasswords ? 
              [
                <Field
                  key={0}
                  className='account-information-form__current'
                  name='current'
                  type='password'
                  title='Current Password'
                  placeholder='Current Password'
                  component={FormInput}
                />,

                <Field
                  key={1}
                  className='account-information-form__new'
                  name='new'
                  type='password'
                  title='New Password'
                  placeholder='New Password'
                  component={FormInput}
                />,

                <Field
                  key={2}
                  className='account-information-form__confirm'
                  name='confirm'
                  type='password'
                  title='Confirm Password'
                  placeholder='Confirm Password'
                  component={FormInput}
                />,

                <Field
                  key={3}
                  className='account-information-form__update-information'
                  name='update-information'
                  type='submit'
                  title='Update Information'
                  onClick={() => this.setState({ showPasswords: false })}
                  component={FormButton}
                />,

                <Field
                  key={4}
                  className='account-information-form__cancel'
                  short={true}
                  name='cancel'
                  type='button'
                  title='Cancel'
                  onClick={() => this.setState({ showPasswords: false })}
                  component={FormButton}
                />
              ]
              :
              <Field
                className='account-information-form__change-password'
                name='change-password'
                type='button'
                labelTitle='Password'
                title='Change Password'
                onClick={() => this.setState({ showPasswords: true })}
                component={LongGrayButton}
              />
            }
      </form>
    )
  }
}

AccountInfoForm = reduxForm({
  form: 'AccountInfoForm'
})(AccountInfoForm)

export default AccountInfoForm
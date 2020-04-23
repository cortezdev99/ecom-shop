import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'

import { FormInput, FormButton } from '../FormFields'
import history from '../../history'
import OrderSummary from './OrderSummary'

class PaymentForm extends Component {
  render() {
    const { className, handleSubmit } = this.props
    
    return (
      <form className={`${className} sign-up-form`} onSubmit={handleSubmit}>
        <Field
          className='payment-form__name'
          name='name'
          type='name'
          title='Card Holder Name'
          placeholder='Name'
          component={FormInput}
        />

        <Field
          className='payment-form__card'
          name='card'
          type='card'
          title='Credit Card Number'
          placeholder='____-____-____-____'
          component={FormInput}
        />

        <Field
          className='payment-form__expiration'
          name='expiration'
          type='expiration'
          title='Expiration Date'
          placeholder='Expiration Date'
          component={FormInput}
        />

        <div className='shipping-form__line' />

        <Field
          className='payment-form__ccv'
          name='ccv'
          type='ccv'
          title='CCV'
          placeholder='CCV'
          component={FormInput}
        />

        <Field
          className='payment-form__pay-complete'
          name='pay-complete'
          type='submit'
          title='Pay and Complete'
          onClick={() => history.push('/information/payment')}
          component={FormButton}
        />

        <Field
          className='payment-form__back'
          short={true}
          name='back'
          type='button'
          title='Back'
          onClick={() => history.push('/signin')}
          component={FormButton}
        />
        <OrderSummary className='payment-form__order-summary' />
      </form>
    )
  }
}

PaymentForm = reduxForm({
  form: 'PaymentForm'
})(PaymentForm)

export default PaymentForm
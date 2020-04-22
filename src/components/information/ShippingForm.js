import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'

import { FormInput, FormButton } from '../FormFields'
import history from '../../history'
import OrderSummary from './OrderSummary'

class ShippingForm extends Component {
  render() {
    const { className, handleSubmit } = this.props
    
    return (
      <form className={`${className} shipping-form`} onSubmit={handleSubmit}>
        <Field
          className='shipping-form__name'
          name='name'
          type='name'
          title='Name'
          placeholder='Name'
          component={FormInput}
        />

        <Field
          className='shipping-form__address'
          name='address'
          type='address'
          title='Street Address'
          placeholder='Street Address'
          component={FormInput}
        />

        <Field
          className='shipping-form__city'
          name='city'
          type='city'
          title='City'
          placeholder='City'
          component={FormInput}
        />

        <Field
          className='shipping-form__state'
          name='state'
          type='state'
          title='State'
          placeholder='State'
          component={FormInput}
        />

        <Field
          className='shipping-form__zipcode'
          name='zipcode'
          type='zipcode'
          title='Zipcode'
          placeholder='Zipcode'
          component={FormInput}
        />

        <div className='shipping-form__line' />

        <Field
          className='shipping-form__use-this-address'
          name='use-this-address'
          type='submit'
          title='Use This Address'
          onClick={() => history.push('/information/payment')}
          component={FormButton}
        />
        <Field
          className='shipping-form__back'
          short={true}
          name='back'
          type='button'
          title='Back'
          onClick={() => history.push('/signin')}
          component={FormButton}
        />

        <OrderSummary className='shipping-form__order-summary' />
      </form>
    )
  }
}

ShippingForm = reduxForm({
  form: 'ShippingForm'
})(ShippingForm)

export default ShippingForm
import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'
import { FormButton } from '../FormFields'

import history from '../../history'
import ReviewProducts from './ReviewProducts'

class ReviewForm extends Component {
  render() {
    const { className, handleSubmit, subtotal } = this.props
    let tax = 0.16
    return (
      <form className={`${className} review-form`} onSubmit={handleSubmit}>

        <div className='review-form__legend'>
          <div className='review-form__legend__name'>Name</div>
          <div className='review-form__legend__quantity'>Quantity</div>
          <div className='review-form__legend__price'>Price</div>
        </div>

        <ReviewProducts className='review-form__products' />

        <div className='review-form__line' />

        <Field
          className='review-form__proceed'
          name='proceed'
          type='submit'
          title='Proceed to Checkout'
          onClick={() => history.push('/information/shipping')}
          component={FormButton}
        />

        <Field
          className='review-form__back'
          short={true}
          name='back'
          type='button'
          title='Back'
          onClick={() => history.push('/shop')}
          component={FormButton}
        />

        <div className='review-form__details review-details'>
          <div className='review-details__subtotal review-detail'>
            <div className='review-detail__title'>Subtotal</div>
            <div className='review-detail__price'>${subtotal}</div>
          </div>

          <div className='review-details__subtotal review-detail'>
            <div className='review-detail__title'>Tax</div>
            <div className='review-detail__price'>${tax}</div>
          </div>

          <div className='review-details__subtotal review-detail'>
            <div className='review-detail__title'>Shipping</div>
            <div className='review-detail__price'>$0.00</div>
          </div>
          <div className='review-details__total review-detail review-detail-green'>
            <div className='review-detail__title review-detail-green__title'>Total</div>
            <div className='review-detail__price review-detail-green__price'>${subtotal + tax}</div>
          </div>
        </div>
      </form>
    )
  }
}

ReviewForm = reduxForm({
  form: 'ReviewForm'
})(ReviewForm)

export default ReviewForm
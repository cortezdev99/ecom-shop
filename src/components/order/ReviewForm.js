import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'

import { FormButton } from '../FormFields'
import history from '../../history'

class ReviewForm extends Component {
  render() {
    const { className, handleSubmit } = this.props
    return (
      <form className={`${className} review-form`} onSubmit={handleSubmit}>
        <div className='review-form__line' />

        <Field
          className='review-form__proceed'
          name='proceed'
          type='submit'
          title='Proceed to Checkout'
          onClick={() => history.push('/account')}
          component={FormButton}
        />
        <Field
          className='review-form__back'
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

ReviewForm = reduxForm({
  form: 'ReviewForm'
})(ReviewForm)

export default ReviewForm
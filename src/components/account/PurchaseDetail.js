import React, { Component } from 'react'
import { connect } from 'react-redux'

class PurchaseDetail extends Component {

  purchaseDetailLabel({className, title, value}) {
    return (
      <div className={`${className} purchase-detail-label`}>
        <label className='purchase-detail-label__title'>{title}</label>
        <div className='purchase-detail-label__value'>{value}</div>
      </div>
    )
  }

  render() {
    const { className, orderNumber, orderDate, user, total, creditCard } = this.props
    const { name, shippingAddress } = user
    const nameAddress = `${name} ${shippingAddress}`

    return (
      <div className={`${className} purchase-detail`}>
        <this.purchaseDetailLabel
          className='purchase-detail__order-number'
          title='Order Number'
          value={orderNumber}
        />
        <this.purchaseDetailLabel
          className='purchase-detail__order-date'
          title='Order Date'
          value={orderDate}
        />
        <this.purchaseDetailLabel
          className='purchase-detail__shipping'
          title='Shipping Address'
          value={`${nameAddress}`}
        />
        <this.purchaseDetailLabel
          className='purchase-detail__total'
          title='Total'
          value={total}
        />
        <this.purchaseDetailLabel
          className='purchase-detail__credit-card'
          title='Credit Card'
          value={creditCard}
        />
        <div className='purchase-detail__track-shipment'>Track Shipment</div>
        <div className='purchase-detail__print-reciept'>Print Reciept</div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const { purchaseDetail } = state.user
  return {
    ...purchaseDetail
  }
}

export default connect(mapStateToProps)(PurchaseDetail)
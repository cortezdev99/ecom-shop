import {
  SET_USER_PURCHASES
} from './types'

export function setPurchaseDetail(_id) {
  return ({
    type: 'SET_PURCHASE_DETAIL',
    payload: _id
  })
}

export function fetchUserPurchases() {
  return ({
    type: SET_USER_PURCHASES,
    payload: [
      {
        _id: 0,
        title: 'purchase 1',
        total: 19.48,
        orderNumber: 'A005434VD',
        orderDate: new Date(),
        creditCard: '-0000',
        user: {
          name: 'Michael Cortez',
          shippingAddress: '1234 West State Street'
        }
      },
      {
        _id: 1,
        title: 'purchase 2',
        total: 8.06,
        orderNumber: 'LEAFE845F',
        orderDate: new Date(),
        creditCard: '-1234',
        user: {
          name: 'Jordan Hudges',
          shippingAddress: '3532 West State Street'
        }
      },
      {
        _id: 2,
        title: 'purchase 3',
        total: 29.98,
        orderNumber: 'FJLKEAF34',
        orderDate: new Date(),
        creditCard: '-2345',
        user: {
          name: 'Heather Horton',
          shippingAddress: '8302 West State Street'
        }
      },
      {
        _id: 3,
        title: 'purchase 4',
        total: 89.40,
        orderNumber: 'KEJ293KFA',
        orderDate: new Date(),
        creditCard: '-2345',
        user: {
          name: 'Michael Cortez',
          shippingAddress: '4953 West State Street'
        }
      },
      {
        _id: 4,
        title: 'purchase 5',
        total: 14.29,
        orderNumber: '389KDKAE',
        orderDate: new Date(),
        creditCard: '-3443',
        user: {
          name: 'Kaleia Cortez',
          shippingAddress: '3932 West State Street'
        }
      },
      {
        _id: 5,
        title: 'purchase 6',
        total: 37.02,
        orderNumber: 'ELKAJFEE',
        orderDate: new Date(),
        creditCard: '-9283',
        user: {
          name: 'Tayden Bills',
          shippingAddress: '9284 West State Street'
        }
      },
      {
        _id: 6,
        title: 'purchase 7',
        total: 49.50,
        orderNumber: '3KAE42L',
        orderDate: new Date(),
        creditCard: '-2032',
        user: {
          name: 'Brennen Bills',
          shippingAddress: '2849 West State Street'
        }
      },
      {
        _id: 7,
        title: 'purchase 8',
        total: 45.48,
        orderNumber: 'KFLA35LA',
        orderDate: new Date(),
        creditCard: '-4958',
        user: {
          name: 'Gavin Bills',
          shippingAddress: '2938 West State Street'
        }
      }
    ]
  })
}
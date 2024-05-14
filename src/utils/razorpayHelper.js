import Razorpay from 'razorpay';

const razorpay = new Razorpay({
  key_id: 'rzp_test_cPE3LPX2nR9LE2',
  key_secret: 'dOtUbyrnMAoutkINsoVLAjES'
});

function createOrder(amount, receipt) {
  const orderData = {
    key:'',
    amount: amount*100,
    currency: 'INR',
    receipt: receipt,
    payment_capture: 1,
  };

  return new Promise((resolve, reject) => {
    razorpay.orders.create(orderData, (err, order) => {
      if(err) {
        reject(err);
      } else {
        resolve(order);
      }
    });
  });
}

export default createOrder;

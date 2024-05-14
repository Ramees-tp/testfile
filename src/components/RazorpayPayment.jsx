import useRazorpay from "react-razorpay";
import axiosInstance from '../api/axios';
import { useNavigate } from 'react-router-dom';


const RazorpayPayment = ({ orderId, wage, type, onPaymentCompleted }) => {
  const navigate = useNavigate();
  const [Razorpay] = useRazorpay();

  const handlePayment = async (e) => {
    e.preventDefault();

    const amount = wage * 100; 
    const currency = 'INR';
    const receipt = 'tyty';

    try {
      let paymentEndpoint = '/user/payment';
      let validationEndpoint = '/user/validatePayment';

      if (type === 'admin') {
        paymentEndpoint = '/master/payment';
        validationEndpoint = '/master/validatePayment';
      }

      const response = await axiosInstance.post(paymentEndpoint, { amount, currency, receipt });
      const order = response.data.data;

      const options = {
        "key": "rzp_test_cPE3LPX2nR9LE2", 
        amount, 
        currency,
        "name": "ALL IN ONE SOLUTION",
        "description": "Test Transaction",
        "order_id": order.id,
        "handler": async function (response){
          const body ={
            ...response,
            orderId: orderId
          };
          const validateRes = await axiosInstance.post(validationEndpoint, body, {
            headers: {
              'Content-Type': 'application/json'
            }
          });
          const res = validateRes.data;

          if (validateRes.status === 200 && type==='user') {
            navigate("/user/userContract");
            onPaymentCompleted();
          }
        },
        "prefill": { 
          "name": "Ramees tp",
          "email": "ramees@example.com", 
          "contact": "9000090000"
        },
        "notes": {
          "address": "Razorpay Corporate Office"
        },
        "theme": {
          "color": "#fffdcb"
        }
      };

      const rzp = new Razorpay(options);
      rzp.on('payment.failed', function (response){
        alert(response.error.code);
        alert(response.error.description);
        alert(response.error.source);
        alert(response.error.step);
        alert(response.error.reason);
        alert(response.error.metadata.order_id);
        alert(response.error.metadata.payment_id);
});
      rzp.open();
    } catch (error) {
      console.error('Payment error:', error);
    }
  };

  return (
    <button onClick={handlePayment}>
      Payment
    </button>
  );
};

export default RazorpayPayment;

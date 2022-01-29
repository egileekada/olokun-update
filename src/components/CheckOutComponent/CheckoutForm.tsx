import StripeCheckout from 'react-stripe-checkout';

export default function CheckoutForm(props: any){ 

    const onToken = (token: any) => {
        fetch('/save-stripe-token', {
          method: 'POST',
          body: JSON.stringify({ orders:[ ],
                    shippingCost:200,
                    currency:"usd",
                    paymentMethod:"method",
                    amountReceived:2000,
                    address:{"city":"the city"},
                    paymentStatus:"status",
                    paymentId: token
                    
                })
        }).then(response => {
          response.json().then(data => {
            alert(`We are in business, ${data.email}`);
          });
        });
      }

    return (  
        <div> 
            <StripeCheckout
                token={onToken}
                stripeKey="my_PUBLISHABLE_stripekey"
            />
        </div>
    );
};
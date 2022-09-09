import './DonationDetail.css';
import LineItem from '../LineItem/LineItem';

export default function DonationDetail({ donation, handleChangeQty, handleCheckout }) {
  if (!donation) return null;

  const lineItems = donation.lineItems.map(item =>
    <LineItem
      lineItem={item}
      isPaid={donation.isPaid}
      handleChangeQty={handleChangeQty}
      handleCheckout={handleCheckout}
      key={item._id}
    />
  );

  return (
    <div className="DonationDetail">
      <div className="section-heading">
        {donation.isPaid ?
          <span>DONATION <span className="smaller">{donation.donationId}</span></span>
          :
          <span>NEW DONATION</span>
        }
        <span>{new Date(donation.updatedAt).toLocaleDateString()}</span>
      </div>
      <div className="line-item-container flex-ctr-ctr flex-col scroll-y">
        {lineItems.length ?
          <>
            {lineItems}
            <section className="total">
              {donation.isPaid ?
                <span className="right">TOTAL&nbsp;&nbsp;</span>
                :
                <button
                  className="btn-sm"
                  onClick={handleCheckout}
                  disabled={!lineItems.length}
                >CHECKOUT</button>
              }
              <span>{donation.totalQty}</span>
              <span className="right">${donation.donationTotal.toFixed(2)}</span>
            </section>
          </>
          :
          <div className="hungry">Donate?</div>
        }
      </div>
    </div>
  );
}
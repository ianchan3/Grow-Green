import './NewDonationPage.css';
import DonationDetail from '../../components/DonationDetail/DonationDetail';

export default function NewDonationPage() {
  

  return (
    <main id="DonationPage">
      <h1>New DonationPage</h1>
      <input type="text"></input>
      <button type="submit">Submit</button>
      <button type="submit">1 Tree</button>
      <button type="submit">5 Trees</button>
      <button type="submit">10 Trees</button>
      <button type="submit">20 Trees</button>
      <DonationDetail />
    </main>
  );
}
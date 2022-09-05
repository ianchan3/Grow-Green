import './NewDonationPage.css';
import DonationDetail from '../../components/DonationDetail/DonationDetail';

export default function NewDonationPage() {

  return (
    <main>
      <h1>New DonationPage</h1>
      <input type="text"></input>
      <button type="submit">Submit</button>
      <DonationDetail />
    </main>
  );
}
import Header from '../components/Header';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';
import RequestsPage from '../components/RequestsPage';

export default function Success() {
  return (
    <>
      <Header />
      <Navigation title="SEUS PEDIDOS" />
      <RequestsPage />
      <Footer />
    </>
  );
}
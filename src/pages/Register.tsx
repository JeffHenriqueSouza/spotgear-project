import Header from '../components/Header';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';
import Register from '../components/Register';

export default function Success() {
  return (
    <>
      <Header />
      <Navigation title="CADASTRO" />
      <Register />
      <Footer />
    </>
  );
}
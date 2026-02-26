import Header from './components/Header';
import Footer from './components/Footer';
import './components/Layout.css';
import Products from './components/Products';
import Offer from './components/Offer';

function App() {
  return (
    <>
     <Header />
      <div className="content-section">
        <Products />
        <Offer />
      </div>
      <Footer />
    </>
  );
}

export default App;

import Navbar from '../components/Navbar';
import ProductCard from '../components/ProductCard';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div>
      <Navbar />
      <main className="container mx-auto p-4">
        <h1 className="text-3xl font-bold">Welcome to Montecito Candles</h1>
        <p>Luxury hand-poured candles made with love.</p>
        <ProductCard />
      </main>
      <Footer />
    </div>
  );
}

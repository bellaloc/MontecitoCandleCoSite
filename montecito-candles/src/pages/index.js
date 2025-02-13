import Head from 'next/head';
import Navbar from '../components/Navbar';
import ProductCard from '../components/ProductCard';
import { fetchProducts } from '../lib/api';

const Home = ({ products }) => {
  return (
    <div>
      <Head>
        <title>Montecito Candle Co.</title>
        <meta name="description" content="Luxury Candles E-Commerce" />
      </Head>
      <Navbar />
      <div className="grid grid-cols-3 gap-4">
        {products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export async function getServerSideProps() {
  const products = await fetchProducts();
  return { props: { products } };
}

export default Home;

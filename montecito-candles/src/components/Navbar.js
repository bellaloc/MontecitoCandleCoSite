import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="p-4 bg-gray-900 text-white">
      <div className="container mx-auto flex justify-between">
        <h1 className="text-xl font-bold">Montecito Candles</h1>
        <div>
          <Link href="/">Home</Link>
          <Link href="/products" className="ml-4">Shop</Link>
          <li><a href="/about">About</a></li>
          <Link href="/cart" className="hover:text-primary">Cart</Link>
          <Link href="/contact" className="ml-4">Contact</Link>
        </div>
      </div>
    </nav>
  );
}

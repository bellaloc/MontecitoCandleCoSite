export default function ProductCard() {
    return (
      <div className="p-4 border rounded-lg">
        <img src="/candle.jpg" alt="Luxury Candle" className="w-full h-48 object-cover" />
        <h2 className="text-lg font-bold">Luxury Soy Candle</h2>
        <p>$29.99</p>
        <button className="bg-blue-600 text-white p-2 mt-2">Add to Cart</button>
      </div>
    );
  }
  
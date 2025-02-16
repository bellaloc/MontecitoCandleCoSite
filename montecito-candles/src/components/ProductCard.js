import Link from "next/link";

export default function ProductCard({ product }) {
  return (
    <div className="border p-4 rounded-lg">
      <img src={product.imageUrl} alt={product.name} className="w-full h-64 object-cover" />
      <h3 className="text-xl font-semibold">{product.name}</h3>
      <p className="text-sm">{product.description}</p>
      <p className="text-lg font-bold">${product.price}</p>
    </div>
  );
}

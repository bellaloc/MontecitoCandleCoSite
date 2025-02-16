import db from "@/lib/db";
import Product from "@/lib/models/productModel";

export async function getProducts(req, res) {
  await db.connect();
  if (req.method === "GET") {
    const products = await Product.find({});
    res.status(200).json(products);
  }
}

export default function handler(req, res) {
  console.log("📌 API Route Hit: /api/products"); // ✅ Log when the route is accessed

  if (req.method === "GET") {
      console.log("✅ Received GET request");

      return res.status(200).json({
          success: true,
          products: [
              { id: 1, name: "Lavender Bliss Candle", price: 14.99, scent: "Lavender" },
              { id: 2, name: "Vanilla Dream Candle", price: 12.99, scent: "Vanilla" },
              { id: 3, name: "Citrus Burst Candle", price: 16.99, scent: "Citrus" },
          ],
      });
  } else {
      console.log("❌ Method Not Allowed");
      return res.status(405).json({ message: "Method Not Allowed" });
  }
}

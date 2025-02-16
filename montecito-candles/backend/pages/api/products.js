export default function handler(req, res) {
    if (req.method === 'GET') {
        // Sample product data
        const products = [
            { id: 1, name: "Lavender Bliss Candle", price: 14.99, scent: "Lavender" },
            { id: 2, name: "Vanilla Dream Candle", price: 12.99, scent: "Vanilla" },
            { id: 3, name: "Citrus Burst Candle", price: 16.99, scent: "Citrus" }
        ];

        return res.status(200).json({ success: true, products });
    } else if (req.method === 'POST') {
        // Handle POST request
        return res.status(201).json({ success: true, message: "Product created" });
    } else {
        // Method Not Allowed
        return res.status(405).json({ success: false, message: "Method Not Allowed" });
    }
}

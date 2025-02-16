const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:3000';

export const fetchProducts = async () => {
    try {
        console.log(`📡 Fetching from: ${baseUrl}/api/products`); // ✅ Log the URL

        const res = await fetch(`${baseUrl}/api/products`);
        console.log("🌐 Response Status:", res.status); // ✅ Log response status

        if (!res.ok) {
            throw new Error(`API returned error: ${res.status}`);
        }

        const data = await res.json();
        console.log("📥 Received Data:", data); // ✅ Log response data

        return data.products;
    } catch (error) {
        console.error("🚨 Fetch products failed:", error);
        throw error;
    }
};

# MontecitoCandleCoSite
# Montecito Candle Co Backend

This is the backend API for the Montecito Candle Co website. It is built with Node.js, Express, and MongoDB.

## Features

- Connects to MongoDB using Mongoose
- Simple API routes to test the server
- Environment variables for MongoDB URI and server port

## Prerequisites

Before running the project, make sure you have the following installed:

- [Node.js](https://nodejs.org/) (version 16 or above)
- [MongoDB](https://www.mongodb.com/) (locally or using a cloud service like MongoDB Atlas)

### Install MongoDB Locally (If Not Using Atlas)

To install MongoDB locally, follow the instructions on the [MongoDB Installation Guide](https://docs.mongodb.com/manual/installation/).

## Getting Started

1. **Clone the repository**:

   ```bash
   git clone https://github.com/yourusername/montecito-candles.git
   cd montecito-candles/backend
Install dependencies:

In the project directory, run:

bash
Copy
Edit
npm install
Set up the environment variables:

Rename the .env.example file to .env and update it with your MongoDB URI and port.

Example .env file:

ini
Copy
Edit
PORT=5000
MONGODB_URI=mongodb://localhost:27017/mydb
STRIPE_SECRET_KEY=your-stripe-secret-key
NEXT_PUBLIC_STRIPE_PUBLIC_KEY=your-stripe-public-key
Make sure you replace the values with your actual credentials.

Start the server:

Run the following command to start the server:

bash
Copy
Edit
npm run server
The server will be running at http://localhost:5000.

Verify server status:

You should see a log like this in the terminal:

arduino
Copy
Edit
MongoDB connected
Server is running on port 5000
You can now access the server by visiting http://localhost:5000 in your browser.

Test the API:

To test the root route:
Go to http://localhost:5000/ to see "Server is up and running!".

To test an API route (e.g., /data):
You can set up a route to get data from MongoDB.

Routes
GET /
Returns a simple message confirming the server is up and running.

GET /api
Returns a welcome message for the API.

GET /data
Fetches data from your MongoDB collection (replace with actual collection/model).

javascript
Copy
Edit
app.get('/data', async (req, res) => {
  // Replace with actual data fetching logic
  const data = await Data.find();
  res.json(data);
});
Troubleshooting
MongoDB Connection Issue: If the connection to MongoDB fails, make sure your MongoDB service is running locally or your cloud credentials are correct.
CORS Errors: If you encounter CORS issues when interacting with the frontend, ensure your frontend is properly configured to allow requests from your backend's URL.
Contributing
Feel free to fork this project and submit pull requests. For any questions or issues, please create an issue in the GitHub repository.

License
This project is licensed under the MIT License - see the LICENSE file for details.
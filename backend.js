

const express = require('express');
const axios = require('axios');

const app = express();
const PORT = process.env.PORT || 3000;

// Define API endpoint to fetch cryptocurrency data
app.get('/api/cryptocurrency-data', async (req, res) => {
    try {
        const { symbol, start_date, end_date } = req.query;
        // You can use any cryptocurrency API to fetch data, for example, CoinGecko
        const response = await axios.get(`https://api.coingecko.com/api/v3/coins/${symbol}/market_chart/range?vs_currency=usd&from=${start_date}&to=${end_date}`);
        res.json(response.data);
    } catch (error) {
        console.error('Error fetching cryptocurrency data:', error.message);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

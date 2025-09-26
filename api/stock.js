export default async function handler(req, res) {
  try {
    const apiUrl = 'http://128.199.212.210:3000/data/stock.json'; // URL asli disembunyikan di server
    const response = await fetch(apiUrl, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      cache: 'no-cache'
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    res.status(200).json(data); // Return data ke client
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch stock data' });
  }
}
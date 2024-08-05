const express = require('express');
const cors = require('cors');  // اضافه کردن cors
const axios = require('axios');
const cheerio = require('cheerio');

const app = express();
const port = 5000;

// استفاده از middleware cors
app.use(cors());

app.get('/api/products', async (req, res) => {
  try {
    const url = 'https://torob.com/browse/94/%DA%AF%D9%88%D8%B4%DB%8C-%D9%85%D9%88%D8%A8%D8%A7%DB%8C%D9%84-mobile/';
    const response = await axios.get(url);
    const html = response.data;
    const $ = cheerio.load(html);

    const products = [];

    $('.jsx-c3685eb9076392ea').each((index, element) => {
      const name = $(element).find('.product-name').text().trim();
      const price = $(element).find('.product-price-text').text().trim();
      const imageUrl = $(element).find('img').attr('src');

      if (name && price && imageUrl) {
        products.push({
          name,
          price,
          image_url: imageUrl
        });
      }
    });

    res.json(products);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve products' });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

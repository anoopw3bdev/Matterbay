// const express = require('express');
// const axios = require('axios');

// const app = express();
// const PORT = process.env.PORT || 3000;

// app.get('/api/get-feed/:page', async (req, res) => {
//     const { page } = req.params;
//     const apiUrl = `https://englishapi.pinkvilla.com/app-api/v1/photo-gallery-feed-page/page/${page}`;
    
//     try {
//         const response = await axios.get(apiUrl);
//         res.send(response.data);
//     } catch (error) {
//         console.error(`Error fetching data from external API for endpoint '${endpoint}':`, error);
//         res.status(500).send('Internal server error');
//     }
// });

// app.listen(PORT, () => {
//     console.log(`Server is running on http://localhost:${PORT}`);
// });


const express = require('express');
const axios = require('axios');
const cors = require('cors'); 

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

app.get('/api/get-feed', async (req, res) => {
    const { page } = req.query;
    const apiUrl = `https://englishapi.pinkvilla.com/app-api/v1/photo-gallery-feed-page/page/${page}`;
    
    try {
        const response = await axios.get(apiUrl);
        res.send(response.data);
    } catch (error) {
        console.error(`Error fetching data from external API for page '${page}':`, error);
        res.status(500).send('Internal server error');
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

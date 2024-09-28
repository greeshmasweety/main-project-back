const express = require('express');
const app = express();
const weatherRoutes = require('./routes/weather');

app.use(express.json());

// Weather route
app.use('/api/weather', weatherRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

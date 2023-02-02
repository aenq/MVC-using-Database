const express = require('express');
const router = require('./routes/index');
    
const app = express();
const PORT = process.env.PORT || 3000;
    
app.use(express.static('public'));
app.set('view engine', 'pug');
app.use(express.urlencoded({ extended: false }));
app.use(router);

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});

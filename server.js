const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors());
app.use(express.static(path.join(__dirname + '/dist/clickyGame')));

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname + '/dist/clickyGame/index.html'));
})

app.listen(PORT, () => console.log(`Server currently listening @ 'http://localhost:${PORT}/`));
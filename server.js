const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(__dirname)); // sert index.html à la racine

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Serveur lancé sur http://localhost:${PORT} !`);
});

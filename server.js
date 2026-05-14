// OMEGA_LOCK: AUTH_REQUIRED | STATUS: OVERWRITE_ACTIVE
const express = require('express');
const path = require('path');
const app = express();

// Porta dinamica per Render
const PORT = process.env.PORT || 3000;

// Serve i file statici dalla cartella 'public' (se esiste) o dalla root
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(__dirname));

// Rotta principale
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Avvio server
app.listen(PORT, () => {
    console.log(`[OK] KERNEL v20.01.5 - OPERATIONAL ON PORT ${PORT}`);
});

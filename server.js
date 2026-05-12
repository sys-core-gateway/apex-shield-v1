const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// La tua password è al sicuro qui, nel server
const PASSWORD = process.env.APEX_PASSWORD;

app.use(express.json());

// Protezione dei PDF: Impedisce l'accesso diretto via URL
app.get('/*.pdf', (req, res) => {
    res.status(403).send("ACCESSO NEGATO: I file sono blindati dal protocollo APEX.");
});

// Rotta per verificare la password e "liberare" il file
app.post('/verify-access', (req, res) => {
    const { password, fileName } = req.body;
    if (password === PASSWORD) {
        // Se la password è corretta, il server invia il file
        res.sendFile(path.join(__dirname, fileName));
    } else {
        res.status(401).send("Chiave errata.");
    }
});

// Serve il sito principale
app.use(express.static(__dirname));

app.listen(PORT, () => {
    console.log(`Bunker APEX attivo sulla porta ${PORT}`);
});

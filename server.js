const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();
const PORT = process.env.PORT || 3000;

/* APEX OMEGA KERNEL v20.01.5 
   ARCHITECT: EROS PEDRAZZANI 
   STATUS: FULL_RECONSTRUCTION
*/

// --- CONTROLLO INTEGRITÀ (LA ROTULA) ---
const REQUIRED_FILES = [
    'index.html', 
    'package.json', 
    'omega.origin.txt', 
    'test.js', 
    'metadata.json'
];

console.log("--- INIZIO VERIFICA SISTEMA ---");
REQUIRED_FILES.forEach(file => {
    if (fs.existsSync(file)) {
        console.log(`[OK] TROVATO: ${file}`);
    } else {
        console.log(`[ATTENZIONE] MANCANTE: ${file}`);
    }
});
console.log("--- VERIFICA COMPLETATA ---");

// --- CONFIGURAZIONE SERVER ---
app.use(express.static(__dirname));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
    console.log(`KERNEL_ACTIVE: v20.01.5 in esecuzione sulla porta ${PORT}`);
    console.log(`ARCHITETTO: EROS PEDRAZZANI`);
});

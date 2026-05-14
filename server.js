// OMEGA_LOCK: AUTH_REQUIRED | STATUS: OVERWRITE_ACTIVE | NO_LEGACY_FILES_ALLOWED
const express = require('express');// OMEGA_LOCK: AUTH_REQUIRED | STATUS: OVERWRITE_ACTIVE | NO_LEGACY_FILES_ALLOWED
const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__currentDir, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__currentDir, 'public', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`[OK] KERNEL v20.01.5 - PORTA: ${PORT}`);
    console.log(`[OK] OMEGA_LOCK ATTIVA: NESSUNA RISORSA LEGACY CARICATA`);
});

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

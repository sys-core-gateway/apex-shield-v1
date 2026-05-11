const http = require('http');
const fs = require('fs');

// Caricamento configurazione
let config;
try {
    config = JSON.parse(fs.readFileSync('./system-config.json', 'utf8'));
} catch (err) {
    config = { kernel: "OMEGA-240", version: "24.0", status: "EMERGENCY_AUTH", proxy_config: { rate_limit: { requests_per_window: 100 } } };
}

console.log(`[SYSTEM] Initializing ${config.kernel} v${config.version}...`);

let requestCount = 0;
const rateLimit = config.proxy_config.rate_limit.requests_per_window;

// Creazione del Server Gateway
const server = http.createServer((req, res) => {
    // Logica di protezione SILENT_BLOCK
    if (requestCount >= rateLimit) {
        console.log(`[ALERT] ${config.kernel} : Rate limit exceeded. SILENT_BLOCK activated.`);
        res.writeHead(429, {'Content-Type': 'application/json'});
        res.end(JSON.stringify({ status: "DENIED", reason: "OMEGA_LIMIT_REACHED" }));
        return;
    }

    requestCount++;
    console.log(`[INBOUND] Request ${requestCount}/${rateLimit} accepted.`);

    res.writeHead(200, {'Content-Type': 'application/json'});
    res.end(JSON.stringify({
        system: config.kernel,
        status: "OPERATIONAL",
        protection: "ACTIVE",
        load: `${requestCount}/${rateLimit}`
    }));
});

// Porta obbligatoria per Render
const PORT = process.env.PORT || 10000;

server.listen(PORT, '0.0.0.0', () => {
    console.log(`\n--------------------------------------`);
    console.log(`[STATUS] ${config.status}`);
    console.log(`[NETWORK] Gateway online on port ${PORT}`);
    console.log(`[READY] Apex Shield is protecting the connection.`);
    console.log(`--------------------------------------\n`);
});

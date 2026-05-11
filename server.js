const config = require('./system-config.json');

console.log(`[SYSTEM] Initializing ${config.kernel} v${config.version}...`);
console.log(`[PROXY] Mode: ${config.proxy_config.mode}`);

const rateLimit = config.proxy_config.rate_limit;
let requestCount = 0;

// Logica Mimetic di base
function handleRequest(req) {
    if (requestCount >= rateLimit.requests_per_window) {
        console.log("[ALERT] Rate limit exceeded. Activation: SILENT_BLOCK.");
        return false;
    }
    requestCount++;
    return true;
}

console.log(`[STATUS] ${config.status}. Proxy listening on limit: ${rateLimit.requests_per_window} reqs.`);

const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

/* APEX OMEGA KERNEL v20.01.5 */
/* ARCHITECT: EROS PEDRAZZANI */

app.use(express.static(__dirname));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
    console.log(`KERNEL_ACTIVE: Singularity v20.01.5 running on port ${PORT}`);
    console.log(`STATUS: 54_SHARDS_SYNCED_WITH_POINT_A`);
});

const fs = require('fs');

console.log('backend start 1');

setInterval(() => {
fs.writeFileSync('./log', Date.now().toString());
}, 2000);

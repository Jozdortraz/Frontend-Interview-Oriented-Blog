const fs = require('fs');
const path = require('path');

fs.copyFileSync(path.resolve(__dirname, './src/404.html'), path.resolve(__dirname, '../docs/404.html'));
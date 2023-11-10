const fs = require('fs');
const path = require('path');

const dotenv = require('dotenv')

// confirm an .env file
const envFile = path.join(__dirname, '.env');
if (!fs.existsSync(envFile)) {
  console.log(`missing: ${envFile}`);
  fs.writeFileSync(envFile,
`
REALM_HOST=localhost
REALM_PORT=5678
`
  );
}
dotenv.config();
console.log(`REALM_HOST:${process.env.REALM_HOST}`);
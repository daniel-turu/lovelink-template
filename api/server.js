const express = require('express');
const path = require('path');
const dotenv = require('dotenv');

dotenv.config();

const allowedDomains = process.env.ALLOWED_DOMAINS ? process.env.ALLOWED_DOMAINS.split(',') : [];

const app = express();

app.use((req, res, next) => {
  const referer = req.get('Referer') || '';
  const origin = req.get('Origin') || '';
  const host = req.get('Host') || '';
  const refererDomain = referer.split('/')[2];
  const originDomain = origin.split('/')[2];
  const hostDomain = host.split(':')[0]; // Extract domain from Host header

  console.log('Referer:', referer);
  console.log('Referer Domain:', refererDomain);
  console.log('Origin:', origin);
  console.log('Origin Domain:', originDomain);
  console.log('Host:', host);
  console.log('Host Domain:', hostDomain);

  if (
    allowedDomains.includes(refererDomain) ||
    allowedDomains.includes(originDomain) ||
    allowedDomains.includes(hostDomain)
  ) {
    next();
  } else {
    res.status(403).sendFile(path.join(__dirname, 'restricted.html')); // Path to your restriction instructions page
  }
});

// Serve static files from the "build" directory
app.use(express.static(path.join(__dirname, '../build')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../build', 'index.html'));
});

const port = process.env.PORT || 3003;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

module.exports = app;

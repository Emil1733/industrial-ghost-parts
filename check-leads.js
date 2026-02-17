const fs = require('fs');
const path = require('path');

// Basic parser for .env.local to avoid dotenv dependency
function loadEnv() {
  try {
    const envPath = path.resolve(__dirname, '.env.local');
    const content = fs.readFileSync(envPath, 'utf8');
    const env = {};
    content.split('\n').forEach(line => {
      const parts = line.split('=');
      if (parts.length === 2) {
        env[parts[0].trim()] = parts[1].trim();
      }
    });
    return env;
  } catch (e) {
    return {};
  }
}

const env = loadEnv();
const supabaseUrl = env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error('Missing Supabase credentials in .env.local');
  process.exit(1);
}

// Minimal fetch-based check to avoid @supabase/supabase-js dependency Issues if any
// We'll use the native fetch if available (Node 18+) or a basic https request
const https = require('https');

const url = new URL(`${supabaseUrl}/rest/v1/leads?select=*&order=created_at.desc&limit=5`);

const options = {
  method: 'GET',
  headers: {
    'apikey': supabaseKey,
    'Authorization': `Bearer ${supabaseKey}`
  }
};

const req = https.request(url, options, (res) => {
  let body = '';
  res.on('data', (chunk) => body += chunk);
  res.on('end', () => {
    console.log('Recent Leads Status:', res.statusCode);
    try {
      const data = JSON.parse(body);
      console.log('Recent Leads Data:');
      console.log(JSON.stringify(data, null, 2));
    } catch (e) {
      console.log('Raw response:', body);
    }
  });
});

req.on('error', (e) => {
  console.error('Request Error:', e);
});

req.end();

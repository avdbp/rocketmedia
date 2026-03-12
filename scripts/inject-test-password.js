/**
 * Inyecta TEST_PASSWORD en test/index.html en tiempo de build.
 * En local: lee .env. En Vercel: usa la variable de entorno del proyecto.
 */
const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, '..');
const envPath = path.join(root, '.env');
const indexPath = path.join(root, 'test', 'index.html');
const placeholder = '__TEST_PASSWORD__';

// Cargar .env en local (Vercel inyecta las variables automáticamente)
if (fs.existsSync(envPath)) {
  const content = fs.readFileSync(envPath, 'utf8');
  content.split('\n').forEach((line) => {
    const m = line.match(/^([^#=]+)=(.*)$/);
    if (m) process.env[m[1].trim()] = m[2].trim().replace(/^["']|["']$/g, '');
  });
}

const password = process.env.TEST_PASSWORD || '';
let html = fs.readFileSync(indexPath, 'utf8');

if (!html.includes(placeholder)) {
  console.warn('inject-test-password: placeholder __TEST_PASSWORD__ no encontrado en test/index.html');
  process.exit(1);
}

html = html.split(placeholder).join(password);
fs.writeFileSync(indexPath, html, 'utf8');
console.log('inject-test-password: variable TEST_PASSWORD inyectada en test/index.html');

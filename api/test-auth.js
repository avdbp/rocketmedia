/**
 * Comprueba la contraseña de la carpeta /test/.
 * La contraseña solo existe en TEST_PASSWORD (Vercel env o .env con vercel dev).
 */
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ ok: false });
  }

  const { password } = typeof req.body === 'object' && req.body ? req.body : {};
  const expected = process.env.TEST_PASSWORD;

  if (!expected) {
    return res.status(500).json({ ok: false, error: 'TEST_PASSWORD no configurada' });
  }

  if (password === expected) {
    return res.status(200).json({ ok: true });
  }

  return res.status(401).json({ ok: false });
}

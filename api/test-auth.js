/**
 * Comprueba la contraseña de la carpeta /test/.
 * La contraseña solo existe en TEST_PASSWORD (Vercel env o .env con vercel dev).
 */
export async function POST(request) {
  let body = {};
  try {
    body = await request.json();
  } catch (e) {
    return new Response(JSON.stringify({ ok: false }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const password = body.password;
  const expected = process.env.TEST_PASSWORD;

  if (!expected) {
    return new Response(
      JSON.stringify({ ok: false, error: 'TEST_PASSWORD no configurada' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }

  if (password === expected) {
    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  return new Response(JSON.stringify({ ok: false }), {
    status: 401,
    headers: { 'Content-Type': 'application/json' },
  });
}

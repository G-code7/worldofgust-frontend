export async function queryWP(query: string, variables = {}) {
  const res = await fetch(process.env.NEXT_PUBLIC_WORDPRESS_API_URL as string, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    next: { revalidate: 60 },
    body: JSON.stringify({ query, variables }),
  });

  if (!res.ok) {
    throw new Error('Error al conectar con la API de WordPress');
  }

  const json = await res.json();
  return json.data;
}
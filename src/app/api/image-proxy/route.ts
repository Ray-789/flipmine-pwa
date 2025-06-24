import { NextRequest } from 'next/server';

export async function GET(req: NextRequest) {
  const imageUrl = req.nextUrl.searchParams.get('url');
  if (!imageUrl) return new Response('Missing image URL', { status: 400 });

  try {
    const response = await fetch(imageUrl, {
      headers: {
        // Optional: spoof a user-agent to look more like a browser
        'User-Agent': 'Mozilla/5.0',
      },
    });

    const contentType = response.headers.get('content-type') || 'image/jpeg';
    const buffer = await response.arrayBuffer();

    return new Response(buffer, {
      status: 200,
      headers: {
        'Content-Type': contentType,
        'Cache-Control': 'public, max-age=86400', // Cache for 1 day
      },
    });
  } catch (err) {
    console.error(err);
    return new Response('Failed to fetch image', { status: 500 });
  }
}

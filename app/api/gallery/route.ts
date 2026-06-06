import { readdir } from 'fs/promises';
import path from 'path';
import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';

const imageExtensions = new Set(['.png', '.jpg', '.jpeg', '.webp', '.gif', '.svg']);

function titleFromFilename(filename: string) {
  return path
    .parse(filename)
    .name
    .replace(/[-_]+/g, ' ')
    .replace(/\b\w/g, (letter) => letter.toUpperCase());
}

export async function GET() {
  const galleryDir = path.join(process.cwd(), 'public', 'gallery');

  try {
    const files = await readdir(galleryDir);
    const images = files
      .filter((file) => imageExtensions.has(path.extname(file).toLowerCase()))
      .sort((a, b) => a.localeCompare(b))
      .map((file) => ({
        src: `/gallery/${file}`,
        label: titleFromFilename(file),
      }));

    return NextResponse.json({ images });
  } catch {
    return NextResponse.json({ images: [] });
  }
}

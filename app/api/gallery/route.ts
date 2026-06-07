import { readdir, readFile } from 'fs/promises';
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

interface ImageMeta {
  title?: string;
  eyebrow?: string;
  description?: string;
  href?: string;
}

export async function GET() {
  const galleryDir = path.join(process.cwd(), 'public', 'gallery');

  try {
    const files = await readdir(galleryDir);

    // Load optional meta.json for custom titles/descriptions
    let meta: Record<string, ImageMeta> = {};
    try {
      const raw = await readFile(path.join(galleryDir, 'meta.json'), 'utf-8');
      meta = JSON.parse(raw);
    } catch {
      // meta.json is optional — no-op if missing
    }

    const images = files
      .filter((file) => imageExtensions.has(path.extname(file).toLowerCase()))
      .sort((a, b) => a.localeCompare(b))
      .map((file) => {
        const fallback = titleFromFilename(file);
        const m = meta[file] ?? {};
        return {
          src: `/gallery/${file}`,
          label: m.title ?? fallback,
          title: m.title ?? fallback,
          eyebrow: m.eyebrow ?? fallback,
          description: m.description,
          href: m.href,
        };
      });

    return NextResponse.json({ images });
  } catch {
    return NextResponse.json({ images: [] });
  }
}

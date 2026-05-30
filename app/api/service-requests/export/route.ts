import { existsSync } from 'fs';
import path from 'path';
import { DatabaseSync } from 'node:sqlite';
import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';

const dbPath = path.join(process.cwd(), 'data', 'service-requests.db');

const columns = [
  'id',
  'created_at',
  'name',
  'email',
  'phone',
  'company',
  'service',
  'custom_service',
  'project_type',
  'budget',
  'timeline',
  'support_needs',
  'details',
  'message',
];

function csvEscape(value: unknown) {
  const text = value === null || value === undefined ? '' : String(value);
  return `"${text.replace(/"/g, '""')}"`;
}

export async function GET() {
  if (!existsSync(dbPath)) {
    return new NextResponse(`${columns.join(',')}\n`, {
      headers: {
        'content-type': 'text/csv; charset=utf-8',
        'content-disposition': 'attachment; filename="service-requests.csv"',
      },
    });
  }

  const db = new DatabaseSync(dbPath, { readOnly: true });

  try {
    const rows = db.prepare('SELECT * FROM service_requests ORDER BY id DESC').all() as Record<string, unknown>[];
    const csv = [
      columns.join(','),
      ...rows.map((row) => columns.map((column) => csvEscape(row[column])).join(',')),
    ].join('\n');

    return new NextResponse(`${csv}\n`, {
      headers: {
        'content-type': 'text/csv; charset=utf-8',
        'content-disposition': 'attachment; filename="service-requests.csv"',
      },
    });
  } finally {
    db.close();
  }
}

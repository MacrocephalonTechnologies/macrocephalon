import { mkdirSync } from 'fs';
import path from 'path';
import { DatabaseSync } from 'node:sqlite';
import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';

const dataDir = path.join(process.cwd(), 'data');
const dbPath = path.join(dataDir, 'service-requests.db');

interface ServiceRequestPayload {
  name?: string;
  email?: string;
  phone?: string;
  company?: string;
  service?: string;
  customService?: string;
  projectType?: string;
  budget?: string;
  timeline?: string;
  details?: string;
  message?: string;
  selectedNeeds?: string[];
}

function openDatabase() {
  mkdirSync(dataDir, { recursive: true });
  const db = new DatabaseSync(dbPath);

  db.exec(`
    CREATE TABLE IF NOT EXISTS service_requests (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      created_at TEXT NOT NULL,
      name TEXT,
      email TEXT,
      phone TEXT,
      company TEXT,
      service TEXT,
      custom_service TEXT,
      project_type TEXT,
      budget TEXT,
      timeline TEXT,
      support_needs TEXT,
      details TEXT,
      message TEXT
    )
  `);

  return db;
}

function clean(value: unknown) {
  return typeof value === 'string' ? value.trim() : '';
}

export async function POST(request: Request) {
  const payload = (await request.json()) as ServiceRequestPayload;
  const db = openDatabase();

  try {
    const insert = db.prepare(`
      INSERT INTO service_requests (
        created_at,
        name,
        email,
        phone,
        company,
        service,
        custom_service,
        project_type,
        budget,
        timeline,
        support_needs,
        details,
        message
      )
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `);

    const result = insert.run(
      new Date().toISOString(),
      clean(payload.name),
      clean(payload.email),
      clean(payload.phone),
      clean(payload.company),
      clean(payload.service),
      clean(payload.customService),
      clean(payload.projectType),
      clean(payload.budget),
      clean(payload.timeline),
      Array.isArray(payload.selectedNeeds) ? payload.selectedNeeds.join(', ') : '',
      clean(payload.details),
      clean(payload.message),
    );

    return NextResponse.json({ ok: true, id: result.lastInsertRowid?.toString() });
  } finally {
    db.close();
  }
}

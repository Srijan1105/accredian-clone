import { NextRequest, NextResponse } from "next/server";

interface LeadData {
  name: string;
  email: string;
  phone: string;
  company: string;
  teamSize: string;
  domain: string;
  message?: string;
}

// In-memory store for demo purposes.
// In production, replace with a real database (e.g., Supabase, MongoDB, PostgreSQL).
const leads: (LeadData & { id: string; createdAt: string })[] = [];

export async function POST(request: NextRequest) {
  try {
    const body: LeadData = await request.json();

    // Basic server-side validation
    const required: (keyof LeadData)[] = [
      "name",
      "email",
      "phone",
      "company",
      "teamSize",
      "domain",
    ];
    for (const field of required) {
      if (!body[field]?.trim()) {
        return NextResponse.json(
          { error: `${field} is required` },
          { status: 400 }
        );
      }
    }

    // Email format check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    // Store the lead
    const lead = {
      ...body,
      id: crypto.randomUUID(),
      createdAt: new Date().toISOString(),
    };
    leads.push(lead);

    console.log(`[Lead Captured] ${lead.name} from ${lead.company} — ${lead.email}`);

    return NextResponse.json(
      {
        success: true,
        message: "Enquiry submitted successfully. We'll reach out within 24 hours.",
        id: lead.id,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("[Lead API Error]", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

// GET endpoint to retrieve leads (for admin/demo purposes)
export async function GET() {
  return NextResponse.json({
    count: leads.length,
    leads: leads.map((l) => ({
      id: l.id,
      name: l.name,
      company: l.company,
      domain: l.domain,
      createdAt: l.createdAt,
    })),
  });
}

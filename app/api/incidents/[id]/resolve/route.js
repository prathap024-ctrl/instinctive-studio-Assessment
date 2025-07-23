import prisma from "@/lib/prisma";

import { NextResponse } from "next/server";

export async function PATCH(req, context) {
  const { id } = context.params;
  const incidentId = parseInt(id, 10);

  if (!incidentId || incidentId <= 0) {
    return NextResponse.json(
      { message: "Invalid incident id" },
      { status: 400 }
    );
  }

  const incident = await prisma.incident.findUnique({
    where: { id: incidentId },
  });

  if (!incident) {
    return NextResponse.json(
      { message: "Incident not found" },
      { status: 404 }
    );
  }

  const updated = await prisma.incident.update({
    where: { id: incidentId },
    data: { resolved: !incident.resolved },
  });

  return NextResponse.json(updated);
}

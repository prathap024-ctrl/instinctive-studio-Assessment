import prisma from "@/lib/prisma";
import {NextRequest, NextResponse} from "next/server"

export async function GET(req, res) {
    const {searchParams} = new URL(req.url)
    const resolved = searchParams.get('resolved')

    const incidents = await prisma.incident.findMany({
        where: resolved !==null? {resolved: resolved === "true"}:{},
        orderBy:{tsStart: 'desc'}
    })
    
    return NextResponse.json(incidents)
}

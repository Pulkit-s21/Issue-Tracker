import { NextRequest, NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"
import { createIssueSchema } from "../../validationSchemas"

export async function POST(request: NextRequest) {
  const body = await request.json()

  const validation = createIssueSchema.safeParse(body)

  if (!validation.success)
    return NextResponse.json(validation.error.issues, { status: 400 })

  const newIssue = await prisma.issue.create({
    data: {
      title: body.title,
      description: body.description,
    },
  })

  return NextResponse.json(
    { message: "Issue created ", newIssue },
    { status: 201 }
  )
}

import { prisma } from "@/lib/prisma"

export default async function getIssues() {
  return await prisma.issue.findMany()
}

import Link from "next/link"
import getIssues from "@/actions/getIssues"
import { Button } from "@radix-ui/themes"
import { TableComponent } from "@/components/Table"

const IssuesPage = async () => {
  const issues = await getIssues()

  return (
    <div>
      <div className="mb-5">
        <Button>
          <Link href={"/issues/new"}>New Issue</Link>
        </Button>
      </div>

      <TableComponent issues={issues} />
    </div>
  )
}

export default IssuesPage

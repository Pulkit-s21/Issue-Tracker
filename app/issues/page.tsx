import { TableComponent } from "@/components/Table"
import getIssues from "@/actions/issues"
import delay from "delay"
import IssueActions from "./IssueActions"

const IssuesPage = async () => {
  const issues = await getIssues()
  await delay(2000)

  return (
    <div>
      <IssueActions />
      <TableComponent issues={issues} />
    </div>
  )
}

export default IssuesPage

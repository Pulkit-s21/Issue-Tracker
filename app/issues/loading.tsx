import { TableHeader } from "@/components/Table"
import { Table } from "@radix-ui/themes"
import Skeleton from "react-loading-skeleton"
import "react-loading-skeleton/dist/skeleton.css"
import IssueActions from "./IssueActions"

const LoadingIssuePage = () => {
  const issues = [1, 2, 3, 4, 5, 6]
  return (
    <>
      <IssueActions />
      <Table.Root variant="surface">
        <TableHeader />
        <Table.Body>
          {issues.map((issue) => {
            return (
              <Table.Row key={issue}>
                <Table.Cell>
                  <Skeleton />
                  <p className="block sm:hidden">
                    <Skeleton />
                  </p>
                </Table.Cell>
                <Table.Cell className="hidden sm:table-cell">
                  <Skeleton />
                </Table.Cell>
                <Table.Cell className="hidden sm:table-cell">
                  <Skeleton />
                </Table.Cell>
              </Table.Row>
            )
          })}
        </Table.Body>
      </Table.Root>
    </>
  )
}

export default LoadingIssuePage

import { Table } from "@radix-ui/themes"
import { FC } from "react"

type Issue = {
  id: number
  title: string
  status: string
  severity: string
  createdAt: Date
}

const severityColorMap = {
  MINOR: "bg-green-100 text-green-800",
  NORMAL: "bg-blue-100 text-blue-800",
  MAJOR: "bg-yellow-100 text-yellow-800",
  CRITICAL: "bg-orange-100 text-orange-800",
  SHOW_STOPPER: "bg-red-100 text-red-800",
}

export const TableHeader: FC = () => {
  return (
    <Table.Header>
      <Table.ColumnHeaderCell>Issue</Table.ColumnHeaderCell>
      <Table.ColumnHeaderCell className="hidden sm:table-cell">
        Status
      </Table.ColumnHeaderCell>
      <Table.ColumnHeaderCell className="hidden sm:table-cell">
        Created At
      </Table.ColumnHeaderCell>
    </Table.Header>
  )
}

export const TableBody: FC<{ issues: Issue[] }> = ({ issues }) => {
  return (
    <Table.Body>
      {issues.map((issue) => {
        const severity = issue.severity.split("")[0]

        const severityClass =
          severityColorMap[issue.severity as keyof typeof severityColorMap] ||
          "bg-gray-100 text-gray-800"

        return (
          <Table.Row key={issue.id}>
            <Table.Cell>
              <div className="flex gap-2">
                <p
                  className={`px-2 py-1 rounded-full text-xs font-semibold ${severityClass}`}
                >
                  {severity}
                </p>
                {issue.title}
              </div>
              <p className="block sm:hidden">{issue.status}</p>
            </Table.Cell>
            <Table.Cell className="hidden sm:table-cell">
              {issue.status}
            </Table.Cell>
            <Table.Cell className="hidden sm:table-cell">
              {issue.createdAt.toDateString()}
            </Table.Cell>
          </Table.Row>
        )
      })}
    </Table.Body>
  )
}

export const TableComponent: FC<{ issues: Issue[] }> = ({ issues }) => {
  return (
    <Table.Root variant="surface">
      <TableHeader />
      <TableBody issues={issues} />
    </Table.Root>
  )
}

import { Status } from "@prisma/client"
import { Badge } from "@radix-ui/themes"

const statusMap: Record<
  Status,
  { label: string; color: "red" | "violet" | "green" } // need to define colors bcz Badge's color requires pre-defined values
> = {
  OPEN: { label: "Open", color: "red" },
  IN_PROGRESS: { label: "In Progress", color: "violet" },
  CLOSED: { label: "Closed", color: "green" },
}

const IssueBadge = ({ status }: { status: Status }) => {
  return (
    <Badge size={"2"} radius="medium" color={statusMap[status].color}>
      {statusMap[status].label}
    </Badge>
  )
}

export default IssueBadge

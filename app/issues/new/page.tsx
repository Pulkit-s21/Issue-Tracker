import { Button, TextField } from "@radix-ui/themes"
import MarkdownEditor from "@/components/MarkdownEditor"

const NewIssuePage = () => {
  return (
    <div className="flex flex-col gap-4 max-w-xl">
      <TextField.Root placeholder="Issue title" />
      <MarkdownEditor />
      <Button>Submit issue</Button>
    </div>
  )
}

export default NewIssuePage

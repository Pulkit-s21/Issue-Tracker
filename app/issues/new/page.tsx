import { Button, TextArea, TextField } from "@radix-ui/themes"

const NewIssuePage = () => {
  return (
    <div className="flex flex-col gap-4 max-w-xl">
      <TextField.Root placeholder="Issue title" />
      <TextArea placeholder="Issue description" />
      <Button>Submit issue</Button>
    </div>
  )
}

export default NewIssuePage

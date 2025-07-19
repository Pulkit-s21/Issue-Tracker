"use client"

import MarkdownEditor from "@/components/MarkdownEditor"
import axios from "axios"
import { Button, TextField } from "@radix-ui/themes"
import { useForm, Controller, SubmitHandler } from "react-hook-form"
import { useRouter } from "next/navigation"

interface IssueForm {
  title: string
  description: string
}

const NewIssuePage = () => {
  const { register, control, handleSubmit } = useForm<IssueForm>()

  const router = useRouter()
  const onSubmit: SubmitHandler<IssueForm> = async (data) => {
    await axios.post("/api/issues", data)
    router.push("/issues")
  }

  return (
    <form
      className="flex flex-col gap-4 max-w-xl"
      onSubmit={handleSubmit(onSubmit)}
    >
      <TextField.Root placeholder="Issue title" {...register("title")} />
      <Controller
        name="description"
        control={control}
        render={({ field }) => (
          <MarkdownEditor placeholder="Description" {...field} />
        )}
      />
      <Button>Submit issue</Button>
    </form>
  )
}

export default NewIssuePage

"use client"

import MarkdownEditor from "@/components/MarkdownEditor"
import axios from "axios"
import { Button, Callout, TextField } from "@radix-ui/themes"
import { useForm, Controller, SubmitHandler } from "react-hook-form"
import { useRouter } from "next/navigation"
import { useState } from "react"

interface IssueForm {
  title: string
  description: string
}

const NewIssuePage = () => {
  const { register, control, handleSubmit } = useForm<IssueForm>()
  const [error, setError] = useState("")

  const router = useRouter()
  const onSubmit: SubmitHandler<IssueForm> = async (data) => {
    try {
      // TODO: Add a toast to show issue submitted and then redirect
      await axios.post("/api/issues", data)
      router.push("/issues")
    } catch (err) {
      // TODO: Add a toast to show err occured
      setError("An unexpected error occured.")
    }
  }

  return (
    <div className="max-w-xl">
      {error && (
        <Callout.Root className="mb-5">
          <Callout.Text>{error}</Callout.Text>
        </Callout.Root>
      )}

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
    </div>
  )
}

export default NewIssuePage

"use client"

import MarkdownEditor from "@/components/MarkdownEditor"
import { Button, Callout, TextField } from "@radix-ui/themes"
import { useForm, Controller } from "react-hook-form"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { createIssueSchema } from "@/app/validationSchemas"
import { formSubmit } from "@/actions/formSubmit"
import ErrorMessage from "@/components/ErrorMessage"
import Spinner from "@/components/Spinner"

type IssueForm = z.infer<typeof createIssueSchema> // only need to change form validations in 1 place only now

const NewIssuePage = () => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IssueForm>({
    resolver: zodResolver(createIssueSchema),
  })
  const [error, setError] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const router = useRouter()
  const onSubmit = formSubmit(setIsSubmitting, setError, router) // moved submit code to separate action file

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
        <ErrorMessage>{errors.title?.message}</ErrorMessage>
        <Controller
          name="description"
          control={control}
          render={({ field }) => (
            <MarkdownEditor placeholder="Description" {...field} />
          )}
        />
        <ErrorMessage>{errors.description?.message}</ErrorMessage>
        <Button disabled={isSubmitting}>
          {isSubmitting ? <Spinner /> : <p> Submit issue</p>}{" "}
        </Button>
      </form>
    </div>
  )
}

export default NewIssuePage

"use client"

import { createIssueSchema } from "@/app/validationSchemas"
import { SubmitHandler } from "react-hook-form"
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context"
import axios from "axios"
import z from "zod"

type IssueForm = z.infer<typeof createIssueSchema>

export const formSubmit = (
  setIsSubmitting: (val: boolean) => void,
  setError: (msg: string) => void,
  router: AppRouterInstance
): SubmitHandler<IssueForm> => {
  return async (data) => {
    try {
      setIsSubmitting(true)
      await axios.post("/api/issues", data)
      router.push("/issues")
    } catch (err) {
      console.log("Issue form submission error", err)
      setError("An unexpected error occurred.")
    } finally {
      setIsSubmitting(false)
    }
  }
}

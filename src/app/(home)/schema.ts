import { z } from 'zod'

export const solutionItemSchema = z.object({
  main: z.string().min(1, 'Informe a solução principal'),
  secondary: z.string().optional(),
  nutritional: z.string().min(1, 'Informação nutricional obrigatória'),
})

export const solutionSchema = z.object({
  title: z.string().min(1, 'Título obrigatório'),
  time: z.string().min(1, 'Horário obrigatório'),
  observation: z.string().optional(),
  items: z.array(solutionItemSchema).min(1, 'Ao menos um item é obrigatório'),
})

export type SolutionFormData = z.infer<typeof solutionSchema>

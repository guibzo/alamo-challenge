export type SolutionItem = {
  main: string
  secondary?: string
  nutritional: string
}

export type SolutionData = {
  title: string
  time: string
  observation?: string
  items: SolutionItem[]
}

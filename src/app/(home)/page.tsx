import { Container } from '@/components/containers/container'
import { ContentContainer } from '@/components/containers/content-container'
import { Header } from '@/components/header'
import { ResponsiveSidebar, Sidebar } from '@/components/sidebar'
import { Title } from '@/components/title'
import { Separator } from '@/components/ui/separator'
import { getSolutions } from '@/http/solutions/get-solutions'
import type { Metadata } from 'next'
import type { SearchParams } from 'nuqs'
import { Suspense } from 'react'
import { SolutionFilters } from './(components)/filters'
import { AddRoutineForm } from './(components)/form'
import { SolutionList } from './(components)/list'
import { SolutionListSkeleton } from './(components)/list-skeleton'

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
  const params = await searchParams
  const filters: SearchParams = {
    query: params.query,
    time: params.time,
  }

  const solutionsPromise = getSolutions({
    query: filters.query as string,
    time: filters.time as string,
  })

  const suspenseKey = `${filters.query}-${filters.time}`

  return (
    <Container>
      <Sidebar />
      <ContentContainer>
        <ResponsiveSidebar />
        <Header label='Cadastros' />

        <div className='flex flex-col justify-between gap-2.5 sm:flex-row sm:items-center'>
          <Title>Gestão de rotinas de laboratório</Title>
          <AddRoutineForm />
        </div>

        <SolutionFilters />

        <Separator className='mb-4 mt-2' />

        <Suspense key={suspenseKey} fallback={<SolutionListSkeleton />}>
          <SolutionList solutionsPromise={solutionsPromise} />
        </Suspense>
      </ContentContainer>
    </Container>
  )
}

export const metadata: Metadata = {
  title: 'Home',
}

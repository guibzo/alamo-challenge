import { Container } from '@/components/containers/container'
import { ContentContainer } from '@/components/containers/content-container'
import { Header } from '@/components/header'
import { Sidebar } from '@/components/sidebar'
import { Title } from '@/components/title'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { LucidePlus } from 'lucide-react'
import type { Metadata } from 'next'
import { SolutionFilters } from './(components)/filters'
import { SolutionList } from './(components)/list'

type Item = {
  main: string
  secondary?: string
  nutritional: string
}

export type SolutionData = {
  title: string
  time: string
  items: Item[]
  observation: string
}

export default function Home() {
  return (
    <Container>
      <Sidebar />
      <ContentContainer>
        <Header label='Cadastros' />
        <div className='flex items-center justify-between gap-2.5'>
          <Title>Gestão de rotinas de laboratório</Title>
          <Button>
            <LucidePlus className='size-4 text-white' aria-hidden='true' />
            Adicionar Rotina
          </Button>
        </div>
        <SolutionFilters />
        <Separator className='mb-4 mt-2' />
        <SolutionList solutions={solutionData} />
      </ContentContainer>
    </Container>
  )
}

export const metadata: Metadata = {
  title: 'Home',
}

const solutionData: SolutionData[] = [
  {
    title: 'Procedimento Matinal',
    time: '10:00',
    observation:
      'Observação: A solução B é a mais barata e tem uma quantidade de CHO maior que a solução A.',
    items: [
      { main: 'Solução B - 10mL', nutritional: 'CHO: 26g' },
      { main: 'Solução B - 10mL', nutritional: 'CHO: 26g' },
      { main: 'Solução B - 10mL', nutritional: 'CHO: 26g' },
      {
        main: 'Solução B - 10mL',
        secondary: 'Estabilizante (STABILAB) - 2 ml',
        nutritional: 'CHO: 26g',
      },
    ],
  },
  {
    title: 'Procedimento Vespertino',
    time: '14:30',
    observation: 'Observação: A solução A possui menor teor de CHO.',
    items: [
      { main: 'Solução A - 15mL', nutritional: 'CHO: 18g' },
      { main: 'Solução A - 15mL', nutritional: 'CHO: 18g' },
      { main: 'Solução A - 10mL', nutritional: 'CHO: 12g' },
      {
        main: 'Solução A - 10mL',
        secondary: 'Contém antioxidante natural',
        nutritional: 'CHO: 12g',
      },
    ],
  },
  {
    title: 'Procedimento Noturno',
    time: '20:15',
    observation: 'Observação: A solução C contém conservantes naturais.',
    items: [
      { main: 'Solução C - 8mL', nutritional: 'CHO: 20g' },
      { main: 'Solução C - 8mL', nutritional: 'CHO: 20g' },
      {
        main: 'Solução C - 8mL',
        secondary: 'Com extrato de camomila',
        nutritional: 'CHO: 20g',
      },
      { main: 'Solução C - 8mL', nutritional: 'CHO: 20g' },
    ],
  },
  {
    title: 'Procedimento de Emergência',
    time: '08:45',
    observation: 'Observação: A solução D tem maior concentração por mL.',
    items: [
      { main: 'Solução D - 12mL', nutritional: 'CHO: 22g' },
      { main: 'Solução D - 6mL', nutritional: 'CHO: 11g' },
      {
        main: 'Solução D - 12mL',
        secondary: 'Com estabilizante leve',
        nutritional: 'CHO: 22g',
      },
      { main: 'Solução D - 9mL', nutritional: 'CHO: 16g' },
    ],
  },
  {
    title: 'Procedimento Pediátrico',
    time: '16:00',
    observation: 'Observação: A solução E não possui corantes.',
    items: [
      { main: 'Solução E - 10mL', nutritional: 'CHO: 19g' },
      {
        main: 'Solução E - 10mL',
        secondary: 'Livre de glúten',
        nutritional: 'CHO: 19g',
      },
      { main: 'Solução E - 10mL', nutritional: 'CHO: 19g' },
      { main: 'Solução E - 10mL', nutritional: 'CHO: 19g' },
    ],
  },
]

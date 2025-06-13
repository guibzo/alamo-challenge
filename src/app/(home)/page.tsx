import { Container } from '@/components/containers/container'
import { ContentContainer } from '@/components/containers/content-container'
import { Header } from '@/components/header'
import { Sidebar } from '@/components/sidebar'
import type { Metadata } from 'next'

export default function Home() {
  return (
    <Container>
      <Sidebar />

      <ContentContainer>
        <Header label='Cadastros' />
      </ContentContainer>
    </Container>
  )
}

export const metadata: Metadata = {
  title: 'Home',
}

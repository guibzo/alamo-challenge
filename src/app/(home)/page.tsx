import { Container } from '@/components/containers/container'
import { ContentContainer } from '@/components/containers/content-container'
import { Sidebar } from '@/components/sidebar'
import type { Metadata } from 'next'

export default function Home() {
  return (
    <Container>
      <Sidebar />

      <ContentContainer>Hello</ContentContainer>
    </Container>
  )
}

export const metadata: Metadata = {
  title: 'Home',
}

import { LucideFolderOpen } from 'lucide-react'

export const NoContent = () => {
  return (
    <div className='mt-8 flex flex-col items-center gap-4'>
      <LucideFolderOpen className='text-muted-foreground size-10' />
      <h2 className='text-xl font-semibold'>Nenhum item encontrado</h2>
    </div>
  )
}

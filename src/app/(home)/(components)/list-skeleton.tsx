import { Skeleton } from '@/components/ui/skeleton'

export function SolutionListSkeleton() {
  return (
    <div className='space-y-6'>
      {Array.from({ length: 3 }).map((_, index) => (
        <div key={index} className='space-y-4'>
          <header className='flex items-center justify-between'>
            <div className='flex items-center gap-2'>
              <Skeleton className='h-4 w-16' />
              <Skeleton className='h-2 w-4' />
              <Skeleton className='h-4 w-32' />
            </div>
          </header>

          <main className='flex justify-between gap-6'>
            <ul className='space-y-3'>
              {Array.from({ length: 4 }).map((_, itemIndex) => (
                <li key={itemIndex} className='flex items-start gap-3'>
                  <div className='flex flex-1 items-center gap-2'>
                    <Skeleton className='h-4 w-[60px] sm:w-[100px]' />
                    <Skeleton className='h-2 w-4' />
                    <Skeleton className='h-3 w-[85px] sm:w-[130px]' />
                  </div>
                </li>
              ))}

              <footer className='mt-4 rounded-lg'>
                <Skeleton className='mb-2 h-3 w-full' />
              </footer>
            </ul>

            <ul className='flex flex-col items-end gap-4'>
              {Array.from({ length: 4 }).map((_, itemIndex) => (
                <li key={itemIndex} className='flex items-center gap-3'>
                  <Skeleton className='h-4 w-10 sm:w-[60px]' />
                </li>
              ))}
            </ul>
          </main>
        </div>
      ))}
    </div>
  )
}

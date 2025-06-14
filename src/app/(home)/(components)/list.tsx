import { use } from 'react'

import type { SolutionData } from '@/@types/solution-data'
import { NoContent } from '@/components/no-content'
import { Show } from '@/components/utils/show'
import { cn } from '@/lib/cn'

type Props = {
  solutionsPromise: Promise<SolutionData[]>
}

export const SolutionList = ({ solutionsPromise }: Props) => {
  const solutions = use(solutionsPromise)

  return (
    <main className='max-h-full space-y-6 overflow-y-auto'>
      <Show when={solutions.length > 0} fallback={<NoContent />}>
        {() => (
          <>
            {solutions.map((solution, solutionIndex) => (
              <div
                key={solutionIndex}
                className='mt-1.5 flex justify-between gap-4'
              >
                <div className='flex-1'>
                  <h4 className='mb-1.5 text-sm font-semibold'>
                    {solution.time} – {solution.title}
                  </h4>

                  <ul className='ml-2.5 space-y-2 text-sm'>
                    {solution.items.map((item, itemIndex) => (
                      <li
                        key={itemIndex}
                        className={cn(
                          'space-y-2',
                          !item.secondary && 'flex flex-col',
                        )}
                      >
                        <span>{item.main}</span>
                        {item.secondary && (
                          <span className='ml-2.5'>{item.secondary}</span>
                        )}
                      </li>
                    ))}
                  </ul>

                  {solution.observation && (
                    <span className='text-muted-foreground mt-3 text-xs'>
                      {solution.observation}
                    </span>
                  )}
                </div>

                <ul className='space-y-[26px] text-xs font-medium'>
                  {solution.items.map((item, itemIndex) => {
                    const isLast = itemIndex === solution.items.length - 1

                    return (
                      <li
                        key={itemIndex}
                        className={cn(isLast && 'text-primary')}
                      >
                        {item.nutritional}
                      </li>
                    )
                  })}
                </ul>
              </div>
            ))}
          </>
        )}
      </Show>
    </main>
  )
}

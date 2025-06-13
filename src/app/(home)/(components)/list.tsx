import { cn } from '@/lib/cn'
import { SolutionData } from '../page'

type Props = {
  solutions: SolutionData[]
}

export function SolutionList({ solutions }: Props) {
  return (
    <div className='max-h-full space-y-6 overflow-y-auto'>
      {solutions.map((solution, solutionIndex) => (
        <div
          key={solutionIndex}
          className='mt-1.5 flex justify-between gap-2.5'
        >
          <div className='flex-1'>
            <h4 className='mb-1.5 text-sm font-semibold'>
              {solution.time} – {solution.title}
            </h4>
            <ul className='ml-2.5 space-y-2 text-sm'>
              {solution.items.map((item, itemIndex) => (
                <li
                  key={itemIndex}
                  className={
                    item.secondary ? 'flex flex-col space-y-2' : 'space-y-2'
                  }
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
                <li key={itemIndex} className={cn(isLast && 'text-primary')}>
                  {item.nutritional}
                </li>
              )
            })}
          </ul>
        </div>
      ))}
    </div>
  )
}

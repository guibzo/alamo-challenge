'use client'

import { cn } from '@/lib/cn'
import { LucideEye, LucideEyeOff } from 'lucide-react'
import {
  useCallback,
  useMemo,
  useState,
  type FocusEvent,
  type ReactNode,
} from 'react'
import { Show } from '../utils/show'

type CustomInputProps = {
  startIcon?: ReactNode
  endIcon?: ReactNode
  endButton?: ReactNode
  endButtonContainerClassName?: string
  revealer?: boolean
  containerClassName?: string
  onRevealerToggle?: (isVisible: boolean) => void
}

const Input = ({
  className,
  type,
  startIcon,
  endIcon,
  endButton,
  endButtonContainerClassName,
  revealer,
  containerClassName,
  onRevealerToggle,
  ...props
}: CustomInputProps & React.ComponentProps<'input'>) => {
  const [showPassword, setShowPassword] = useState(false)
  const [isFocused, setIsFocused] = useState(false)

  const getInputType = useMemo(() => {
    if (revealer && type === 'password') {
      return showPassword ? 'text' : 'password'
    }
    return type
  }, [revealer, type, showPassword])

  const handlePasswordToggle = useCallback(() => {
    setShowPassword((prev) => {
      const newValue = !prev
      onRevealerToggle?.(newValue)
      return newValue
    })
  }, [onRevealerToggle])

  const handleFocus = useCallback(
    (e: FocusEvent<HTMLInputElement>) => {
      setIsFocused(true)
      props.onFocus?.(e)
    },
    [props.onFocus],
  )

  const handleBlur = useCallback(
    (e: FocusEvent<HTMLInputElement>) => {
      setIsFocused(false)
      props.onBlur?.(e)
    },
    [props.onBlur],
  )

  const handleContainerMouseDown = useCallback((e: React.MouseEvent) => {
    if (e.target !== e.currentTarget) {
      e.preventDefault()
    }
  }, [])

  const inputClasses = cn(
    'peer flex h-6 w-full bg-card rounded-[6px] border border-border px-2.5 py-2 text-base transition-all',
    'placeholder:text-muted-foreground/55 placeholder:text-sm ',
    'file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground',
    'disabled:cursor-not-allowed disabled:opacity-50',
    'md:text-sm',
    'custom-focus-visible',

    startIcon && 'ps-9',
    (endIcon || revealer) && 'pe-9',
    className,
  )

  const iconBaseClasses =
    'absolute inset-y-0 flex items-center justify-center peer-disabled:opacity-50 [&>svg]:size-5 [&>svg]:transition-all '

  const iconColorClasses = cn(
    'text-muted-foreground/50',
    isFocused && 'text-primary',
  )

  const StartIcon = () => {
    if (!startIcon) return null

    return (
      <div
        className={cn(
          iconBaseClasses,
          iconColorClasses,
          'pointer-events-none start-0 ps-2.5',
        )}
      >
        {startIcon}
      </div>
    )
  }

  const EndIcon = () => {
    if (!endIcon || revealer || endButton) return null

    return (
      <div
        className={cn(
          iconBaseClasses,
          iconColorClasses,
          'pointer-events-none end-0 pe-2.5',
        )}
      >
        {endIcon}
      </div>
    )
  }

  const EndButton = () => {
    if (!endButton || revealer || endIcon) return null

    return (
      <div
        className={cn(
          'absolute inset-y-0 end-0 flex items-center',
          'border-l-border bg-card rounded-r-[6px] border-l',
          'peer-disabled:opacity-50',
          endButtonContainerClassName,
        )}
        onMouseDown={handleContainerMouseDown}
      >
        {endButton}
      </div>
    )
  }

  const Revealer = () => {
    if (!revealer) return null

    return (
      <button
        type='button'
        className={cn(
          'absolute inset-y-0 end-0 flex items-center justify-center pe-2.5',
          'text-muted-foreground/50 hover:brightness-30 transition-all',
          'peer-disabled:pointer-events-none peer-disabled:opacity-50',
          isFocused && 'text-primary',
        )}
        onClick={handlePasswordToggle}
        onMouseDown={handleContainerMouseDown}
        aria-label={showPassword ? 'Hide password' : 'Show password'}
      >
        <Show
          when={showPassword}
          fallback={<LucideEyeOff className='size-5 cursor-pointer' />}
        >
          {() => <LucideEye className='size-5 cursor-pointer' />}
        </Show>
      </button>
    )
  }

  return (
    <div className={cn('relative', containerClassName)}>
      <input
        {...props}
        data-slot='input'
        type={getInputType}
        className={inputClasses}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />

      <StartIcon />
      <EndIcon />
      <EndButton />
      <Revealer />
    </div>
  )
}

export { Input }
export type { CustomInputProps }

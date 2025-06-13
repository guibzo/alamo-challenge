'use client'

import { useTextarea } from '@/hooks/use-textarea'
import { cn } from '@/lib/cn'
import * as React from 'react'
import { useImperativeHandle } from 'react'

export type TextareaRef = {
  textArea: HTMLTextAreaElement
  maxHeight: number
  minHeight: number
  focus: () => void
}

type TextareaProps = {
  maxHeight?: number
  minHeight?: number
} & React.TextareaHTMLAttributes<HTMLTextAreaElement>

export const Textarea = React.forwardRef<TextareaRef, TextareaProps>(
  (
    {
      maxHeight = Number.MAX_SAFE_INTEGER,
      minHeight = 52,
      className,
      onChange,
      value,
      ...props
    }: TextareaProps,
    ref: React.Ref<TextareaRef>,
  ) => {
    const textAreaRef = React.useRef<HTMLTextAreaElement | null>(null)
    const [triggerAutoSize, setTriggerAutoSize] = React.useState('')

    useTextarea({
      textAreaRef,
      triggerAutoSize: triggerAutoSize,
      maxHeight,
      minHeight,
    })

    useImperativeHandle(ref, () => ({
      textArea: textAreaRef.current as HTMLTextAreaElement,
      focus: () => textAreaRef?.current?.focus(),
      maxHeight,
      minHeight,
    }))

    React.useEffect(() => {
      setTriggerAutoSize(value as string)
    }, [props?.defaultValue, value])

    return (
      <textarea
        {...props}
        value={value}
        ref={textAreaRef}
        className={cn(
          'border-input bg-card flex w-full rounded-md border px-3 py-2 text-sm transition-all',
          'focus-visible:border-primary placeholder:text-muted-foreground/55 resize-none disabled:cursor-not-allowed disabled:opacity-50',
          'placeholder:text-sm',
          'custom-focus-visible',
          className,
        )}
        onChange={(e) => {
          setTriggerAutoSize(e.target.value)
          onChange?.(e)
        }}
      />
    )
  },
)

Textarea.displayName = 'Textarea'

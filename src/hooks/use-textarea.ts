import { type RefObject, useEffect, useState } from 'react'

interface Props {
  textAreaRef: RefObject<HTMLTextAreaElement | null>
  minHeight?: number
  maxHeight?: number
  triggerAutoSize: string
}

export const useTextarea = ({
  textAreaRef,
  triggerAutoSize,
  maxHeight = Number.MAX_SAFE_INTEGER,
  minHeight = 0,
}: Props) => {
  const [init, setInit] = useState(true)

  useEffect(() => {
    const offsetBorder = 6
    const textAreaElement = textAreaRef.current

    if (textAreaElement) {
      if (init) {
        textAreaElement.style.minHeight = `${minHeight + offsetBorder}px`
        if (maxHeight > minHeight) {
          textAreaElement.style.maxHeight = `${maxHeight}px`
        }
        setInit(false)
      }

      const currentHeight = textAreaElement.offsetHeight

      const originalHeight = textAreaElement.style.height
      textAreaElement.style.height = 'auto'
      const scrollHeight = textAreaElement.scrollHeight

      let newHeight: number
      if (scrollHeight > maxHeight) {
        newHeight = maxHeight
      } else {
        newHeight = Math.max(
          scrollHeight + offsetBorder,
          minHeight + offsetBorder,
        )
      }

      if (currentHeight !== newHeight) {
        textAreaElement.style.height = `${newHeight}px`
      } else {
        textAreaElement.style.height = originalHeight
      }
    }
  }, [textAreaRef.current, triggerAutoSize, maxHeight, minHeight])
}

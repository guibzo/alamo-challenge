import type { ReactNode } from 'react'

import { Label } from '../ui/label'
import { FormError } from './form-error'

type Props = {
  label: string
  id: string
  error?: string
  required?: boolean
  optional?: boolean
  children: ReactNode
}

export const FormField = ({
  label,
  id,
  error,
  required = false,
  optional = false,
  children,
}: Props) => (
  <div>
    <Label required={required} optional={optional} htmlFor={id}>
      {label}
    </Label>

    {children}

    {error && <FormError>{error}</FormError>}
  </div>
)

import { LucideTrash2 } from 'lucide-react'
import type { FieldErrors, UseFormRegister } from 'react-hook-form'

import { FormField } from '@/components/forms/form-field'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

import type { SolutionFormData } from '../../schema'

type Props = {
  index: number
  register: UseFormRegister<SolutionFormData>
  errors: FieldErrors<SolutionFormData>
  onRemove: () => void
  canRemove: boolean
}

type FieldConfig = {
  key: keyof SolutionFormData['items'][0]
  label: string
  placeholder: string
  required?: boolean
  optional?: boolean
}

export const FormRoutineItem = ({
  index,
  register,
  errors,
  onRemove,
  canRemove,
}: Props) => {
  const fields: FieldConfig[] = [
    {
      key: 'main',
      label: 'Solução Principal',
      placeholder: 'Ex: Solução B - 10mL',
      required: true,
    },
    {
      key: 'secondary',
      label: 'Solução Secundária',
      placeholder: 'Ex: Estabilizante (STABILAB) - 2 ml',
      optional: true,
    },
    {
      key: 'nutritional',
      label: 'Informação Nutricional',
      placeholder: 'Ex: CHO: 26g',
      required: true,
    },
  ]

  return (
    <div className='space-y-3 rounded-lg border p-4'>
      <div className='flex items-center justify-between'>
        <h4 className='font-medium'>Item {index + 1}</h4>
        {canRemove && (
          <Button
            type='button'
            variant='ghost'
            size='icon'
            radius='full'
            onClick={onRemove}
            className='text-destructive bg-red-500/10 hover:bg-red-500/15 hover:text-red-600'
          >
            <LucideTrash2 className='size-4' />
          </Button>
        )}
      </div>

      <div className='grid gap-3'>
        {fields.map(({ key, label, placeholder, required, optional }) => (
          <FormField
            key={key}
            label={label}
            id={`${key}-${index}`}
            required={required}
            optional={optional}
            error={errors?.items?.[index]?.[key]?.message}
          >
            <Input
              id={`${key}-${index}`}
              placeholder={placeholder}
              {...register(`items.${index}.${key}`)}
            />
          </FormField>
        ))}
      </div>
    </div>
  )
}

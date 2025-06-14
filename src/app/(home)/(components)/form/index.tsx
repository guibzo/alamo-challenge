'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { LucidePlus } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { useFieldArray, useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { useHookFormMask } from 'use-mask-input'

import { FormError } from '@/components/forms/form-error'
import { FormField } from '@/components/forms/form-field'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { createSolution } from '@/http/solutions/create-solution'
import { validateTimeInput } from '@/utils/validate-time-input'

import { type SolutionFormData, solutionSchema } from '../../schema'
import { FormRoutineItem } from './routine-item'

export const AddRoutineForm: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const router = useRouter()

  const defaultFormValues: SolutionFormData = {
    title: '',
    time: '',
    observation: '',
    items: [{ main: '', secondary: '', nutritional: '' }],
  }

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<SolutionFormData>({
    resolver: zodResolver(solutionSchema),
    defaultValues: defaultFormValues,
  })

  const { fields, append, remove } = useFieldArray({ control, name: 'items' })
  const registerWithMask = useHookFormMask(register)

  const handleSuccess = (): void => {
    toast.success('Rotina criada com sucesso!')
    reset()
    setOpen(false)
    router.refresh()
  }

  const handleError = (): void => {
    toast.error('Erro ao criar rotina. Tente novamente mais tarde.')
  }

  const onSubmit = async (data: SolutionFormData): Promise<void> => {
    setIsLoading(true)
    try {
      await createSolution(data)
      handleSuccess()
    } catch {
      handleError()
    } finally {
      setIsLoading(false)
    }
  }

  const addItem = (): void =>
    append({ main: '', secondary: '', nutritional: '' })

  const removeItem = (index: number): void => {
    if (fields.length > 1) {
      remove(index)
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>
          <LucidePlus className='size-4 text-white' aria-hidden='true' />
          Adicionar Rotina
        </Button>
      </DialogTrigger>

      <DialogContent
        position='responsive'
        className='flex h-[75vh] flex-col justify-start overflow-y-auto'
      >
        <DialogTitle className='h-fit'>Adicionar rotina</DialogTitle>

        <form onSubmit={handleSubmit(onSubmit)} className='space-y-4'>
          <div className='grid grid-cols-2 gap-4'>
            <FormField
              label='Título'
              id='title'
              required
              error={errors.title?.message}
            >
              <Input
                id='title'
                placeholder='Ex: Procedimento Matinal'
                {...register('title')}
              />
            </FormField>

            <FormField
              label='Horário'
              id='time'
              required
              error={errors.time?.message}
            >
              <Input
                id='time'
                placeholder='Ex: 15:32'
                maxLength={5}
                {...registerWithMask('time', '99:99')}
                onBlur={(e) => validateTimeInput(e.target.value)}
              />
            </FormField>
          </div>

          <FormField
            label='Observação'
            id='observation'
            optional
            error={errors.observation?.message}
          >
            <Textarea
              id='observation'
              minHeight={60}
              maxHeight={60}
              placeholder='Ex: A solução B é a mais barata e tem uma quantidade de CHO maior que a solução A.'
              rows={3}
              {...register('observation')}
            />
          </FormField>

          <div className='space-y-4'>
            <div className='flex items-center justify-between'>
              <Label className='text-base font-semibold'>Itens da Rotina</Label>
              <Button
                type='button'
                variant='outline'
                size='sm'
                onClick={addItem}
              >
                <LucidePlus className='mr-1 size-4' />
                Adicionar Item
              </Button>
            </div>

            {fields.map((field, index) => (
              <FormRoutineItem
                key={field.id}
                index={index}
                register={register}
                errors={errors}
                onRemove={() => removeItem(index)}
                canRemove={fields.length > 1}
              />
            ))}

            {errors.items && <FormError>{errors.items.message}</FormError>}
          </div>

          <DialogFooter>
            <Button type='submit' className='w-full' disabled={isLoading}>
              {isLoading ? 'Salvando...' : 'Salvar Rotina'}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}

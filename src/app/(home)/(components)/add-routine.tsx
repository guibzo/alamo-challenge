'use client'

import type { SolutionData, SolutionItem } from '@/@types/solution-data'
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
import { LucidePlus, LucideTrash2 } from 'lucide-react'
import { useState } from 'react'

export const AddRoutine = () => {
  const [formData, setFormData] = useState<SolutionData>({
    title: '',
    time: '',
    observation: '',
    items: [{ main: '', nutritional: '' }],
  })

  const addItem = () => {
    setFormData((prev) => ({
      ...prev,
      items: [...prev.items, { main: '', nutritional: '' }],
    }))
  }

  const removeItem = (index: number) => {
    if (formData.items.length > 1) {
      setFormData((prev) => ({
        ...prev,
        items: prev.items.filter((_, i) => i !== index),
      }))
    }
  }

  const updateItem = (
    index: number,
    field: keyof SolutionItem,
    value: string,
  ) => {
    setFormData((prev) => ({
      ...prev,
      items: prev.items.map((item, i) =>
        i === index ? { ...item, [field]: value } : item,
      ),
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log(formData)

    setFormData({
      title: '',
      time: '',
      observation: '',
      items: [{ main: '', nutritional: '' }],
    })
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>
          <LucidePlus className='size-4 text-white' aria-hidden='true' />
          Adicionar Rotina
        </Button>
      </DialogTrigger>

      <DialogContent
        position='responsive'
        className='max-h-[80vh] max-w-2xl overflow-y-auto'
      >
        <DialogTitle>Adicionar rotina</DialogTitle>

        <form onSubmit={handleSubmit} className='space-y-4'>
          <div className='grid grid-cols-2 gap-4'>
            <div>
              <Label htmlFor='title'>Título</Label>

              <Input
                id='title'
                placeholder='Ex: Procedimento Matinal'
                value={formData.title}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, title: e.target.value }))
                }
                required
              />
            </div>

            <div>
              <Label htmlFor='time'>Horário</Label>

              <Input
                id='time'
                type='time'
                value={formData.time}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, time: e.target.value }))
                }
                required
              />
            </div>
          </div>

          <div>
            <Label htmlFor='observation'>Observação</Label>

            <Textarea
              id='observation'
              minHeight={60}
              maxHeight={60}
              placeholder='Ex: A solução B é a mais barata e tem uma quantidade de CHO maior que a solução A.'
              value={formData.observation}
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  observation: e.target.value,
                }))
              }
              rows={3}
            />
          </div>

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

            {formData.items.map((item, index) => (
              <div key={index} className='space-y-3 rounded-lg border p-4'>
                <div className='flex items-center justify-between'>
                  <h4 className='font-medium'>Item {index + 1}</h4>
                  {formData.items.length > 1 && (
                    <Button
                      type='button'
                      variant='ghost'
                      size='sm'
                      onClick={() => removeItem(index)}
                      className='text-red-500 hover:text-red-700'
                    >
                      <LucideTrash2 className='size-4' />
                    </Button>
                  )}
                </div>

                <div className='grid gap-3'>
                  <div>
                    <Label required htmlFor={`main-${index}`}>
                      Solução Principal
                    </Label>

                    <Input
                      id={`main-${index}`}
                      placeholder='Ex: Solução B - 10mL'
                      value={item.main}
                      onChange={(e) =>
                        updateItem(index, 'main', e.target.value)
                      }
                      required
                    />
                  </div>

                  <div>
                    <Label optional htmlFor={`secondary-${index}`}>
                      Solução Secundária
                    </Label>

                    <Input
                      id={`secondary-${index}`}
                      placeholder='Ex: Estabilizante (STABILAB) - 2 ml'
                      value={item.secondary || ''}
                      onChange={(e) =>
                        updateItem(index, 'secondary', e.target.value)
                      }
                    />
                  </div>

                  <div>
                    <Label required htmlFor={`nutritional-${index}`}>
                      Informação Nutricional
                    </Label>

                    <Input
                      id={`nutritional-${index}`}
                      placeholder='Ex: CHO: 26g'
                      value={item.nutritional}
                      onChange={(e) =>
                        updateItem(index, 'nutritional', e.target.value)
                      }
                      required
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <DialogFooter>
            <Button type='submit' className='w-full'>
              Salvar Rotina
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}

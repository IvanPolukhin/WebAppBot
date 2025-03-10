import React from 'react'

import { Controller } from 'react-hook-form'
import { Card, CardContent, CardHeader } from 'src/components/shadcn/card'
import { Input } from 'src/components/shadcn/input'
import { Textarea } from 'src/components/shadcn/textarea'
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectGroup,
  SelectLabel,
  SelectItem,
} from 'src/components/shadcn/select'
import { Button } from 'src/components/shadcn/button'

import Container from 'src/components/Container'
import { FieldType } from './types'
import { useRegistration } from './useRegistration'

const Registration = (): React.JSX.Element => {
  const { locale, listOfFields, handleSubmit, onSubmit, control, errors } =
    useRegistration()

  return (
    <Container classes="flex justify-center py-10">
      <Card className="w-full sm:w-2/4 rounded-xl">
        <CardHeader className="p-6 border-b mb-2">
          <h1 className="text-2xl font-bold text-center sm:text-left">
            {locale.pageTitle}
          </h1>
        </CardHeader>
        <CardContent>
          <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
            {listOfFields.map(
              ({ id, label, placeholder, type, validation, options }) => (
                <div key={id}>
                  <h1 className="text-lg font-medium mb-2">{label}</h1>
                  {(() => {
                    switch (type) {
                      case FieldType.INPUT:
                        return (
                          <Input
                            id={id}
                            placeholder={placeholder}
                            className="w-full"
                            {...control.register(id, validation)}
                          />
                        )
                      case FieldType.TEXTAREA:
                        return (
                          <Textarea
                            id={id}
                            placeholder={placeholder}
                            className="w-full"
                            {...control.register(id, validation)}
                          />
                        )
                      case FieldType.SELECT:
                        return (
                          <Controller
                            name={id}
                            control={control}
                            rules={validation}
                            render={({ field }) => (
                              <Select
                                value={field.value}
                                onValueChange={field.onChange}
                              >
                                <SelectTrigger>
                                  <SelectValue placeholder={placeholder} />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectGroup>
                                    <SelectLabel>{label}</SelectLabel>
                                    {options?.map(({ value, label }) => (
                                      <SelectItem key={value} value={value}>
                                        {label}
                                      </SelectItem>
                                    ))}
                                  </SelectGroup>
                                </SelectContent>
                              </Select>
                            )}
                          />
                        )
                      default:
                        return null
                    }
                  })()}
                  {errors[id] && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors[id]?.message}
                    </p>
                  )}
                </div>
              ),
            )}

            <div className="flex items-center justify-center">
              <Button className="w-1/2 sm:w-1/6" type="submit">
                {locale.submitButton}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </Container>
  )
}

export default Registration

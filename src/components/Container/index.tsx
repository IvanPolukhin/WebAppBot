import React from 'react'
import { cn } from 'src/utils'

import { ContainerProps } from 'src/components/Container/types'

const Container = ({
  classes,
  children,
}: ContainerProps): React.JSX.Element => {
  return <div className={cn('mx-4 mt-8', classes)}>{children}</div>
}

export default Container

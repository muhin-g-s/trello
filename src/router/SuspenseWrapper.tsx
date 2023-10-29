import { FC, Suspense } from 'react'
import { TJSXProps } from '../type/JSXPropsType'

const SuspenseWrapper : FC<TJSXProps>= ({children}) => {
  return (
    <Suspense fallback="Loading..">
        {children}
    </Suspense>
  )
}

export default SuspenseWrapper
import { FC } from "react"

import { Provider } from 'react-redux'

import { persistor, store } from "../storages"
import { PersistGate } from "redux-persist/integration/react"
import { TJSXProps } from "../type/JSXPropsType"
import { BrowserRouter } from "react-router-dom"


const Providers: FC<TJSXProps> = ({ children }) => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          {children}
        </PersistGate>
      </Provider>
    </BrowserRouter>

  )
}

export default Providers
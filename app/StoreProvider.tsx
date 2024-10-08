'use client'
import { useRef } from 'react'
import { Provider } from 'react-redux'
import { store, AppStore } from '@/lib/store'
// import {PersistGate} from 'redux-persist/integration/react';
// import {persistStore} from 'redux-persist';
// import {persistor} from "@/lib/store";

export default function StoreProvider({
                                        children
                                      }: {
  children: React.ReactNode
}) {
  const storeRef = useRef<AppStore>()
  if (!storeRef.current) {
    // Create the store instance the first time this renders
    storeRef.current = store
  }

  return (
      <Provider store={storeRef.current}>
          {children}
      </Provider>
  )
}

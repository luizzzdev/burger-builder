import React from 'react'
import { BurgerProvider } from "./context/burgerContext";

function CombinedProviders({ children}) {
  return (
    <BurgerProvider>
      {children}
    </BurgerProvider>
  )
}

export default CombinedProviders
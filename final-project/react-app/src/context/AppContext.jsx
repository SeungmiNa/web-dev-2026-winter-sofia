import { createContext, useContext, useState, useCallback } from 'react'

const AppContext = createContext(null)

export function AppProvider({ children }) {
  const [theme, setTheme] = useState('light')
  const [visitorCount, setVisitorCount] = useState(0)

  const toggleTheme = useCallback(() => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'))
  }, [])

  const incrementVisitor = useCallback(() => {
    setVisitorCount((prev) => prev + 1)
  }, [])

  const value = {
    theme,
    toggleTheme,
    visitorCount,
    incrementVisitor,
  }

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}

export function useApp() {
  const context = useContext(AppContext)
  if (!context) {
    throw new Error('useApp must be used within AppProvider')
  }
  return context
}

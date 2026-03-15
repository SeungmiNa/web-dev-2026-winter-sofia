'use client'

import { useEffect } from 'react'
import { useApp } from '@/context/AppContext'

export default function VisitorCounter() {
  const { incrementVisitor } = useApp()
  useEffect(() => {
    incrementVisitor()
  }, [incrementVisitor])
  return null
}

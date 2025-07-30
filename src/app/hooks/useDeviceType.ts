'use client'
import { useState, useEffect } from 'react'

export function useDeviceType(): 'mobile'|'tablet'|'desktop' {
  const [device, setDevice] = useState<'mobile'|'tablet'|'desktop'>('desktop')

  useEffect(() => {
    function update() {
      const w = window.innerWidth
      if (w < 640)      setDevice('mobile')
      else if (w < 1024) setDevice('tablet')
      else               setDevice('desktop')
    }

    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [])

  return device
}

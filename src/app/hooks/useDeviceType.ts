// src/hooks/useDeviceType.ts
import { useState, useEffect } from 'react';

export type DeviceType = 'mobile' | 'tablet' | 'desktop';

export function useDeviceType(): DeviceType {
  const [device, setDevice] = useState<DeviceType>('desktop');
  const [width,setWidth] =useState<number>(0);
  useEffect(() => {
    console.log("ef",width,device)
    function onResize() {
      const w = window.innerWidth;
      setWidth(w)
      if (w < 768) setDevice('mobile');
      else if (w < 1024) setDevice('tablet');
      else setDevice('desktop');
    }

    window.addEventListener('resize', onResize);
    onResize(); // initial check
    return () => window.removeEventListener('resize', onResize);
  }, [width]);

  return device;
}

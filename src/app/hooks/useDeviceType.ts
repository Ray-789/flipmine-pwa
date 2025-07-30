// src/hooks/useDeviceType.ts
import { useState, useEffect } from 'react';

export type DeviceType = 'mobile' | 'tablet' | 'desktop';

export function useDeviceType(): DeviceType {
  const [device, setDevice] = useState<DeviceType>('desktop');
 
  useEffect(() => {
    function onResize() {
      const w = window.innerWidth;
      if (w < 768) setDevice('mobile');
      else if (w < 1024) setDevice('tablet');
      else setDevice('desktop');
    }

    window.addEventListener('resize', onResize);
    onResize(); // initial check
    return () => window.removeEventListener('resize', onResize);
  }, [device]);

  return device;
}

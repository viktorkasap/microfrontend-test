import React, { useRef, useEffect } from "react";
import { init } from 'marketing/Marketing'

export const MarketingApp = () => {
  const ref = useRef(null);

  useEffect(() => {
    ref.current = init(ref.current);
  }, []);

  return <div ref={ref}></div>
}

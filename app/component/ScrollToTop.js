'use client'

import { usePathname } from "next/navigation";
import { useState } from "react";
import { useEffect } from "react";



export default function ScrollToTop() {
  const { pathname } = usePathname();
  const pathState = useState( pathname );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathState]);

  return null;
}

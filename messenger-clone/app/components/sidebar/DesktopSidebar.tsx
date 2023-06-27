'use client';

import { useState } from 'react';
import useRoutes from '@/app/hooks/useRoutes';

export default function DesktopSidebar() {
  const routes = useRoutes();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="
      hidden
      lg:fixed
      lg:insert-y-0
      lg:left-0
      lg:z-40
      lg:w-20
      xl:px-6
      lg:overflow-y-auto
      lg:bg-white
      lg:border-r-[1px]
      lg:bp-4
      lg:flex
      lg:flex-col
      justify-between
  "
    >
      DesktopSidebar
    </div>
  );
}

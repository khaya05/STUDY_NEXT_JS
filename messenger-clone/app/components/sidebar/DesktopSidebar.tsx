'use client';

import { useState } from 'react';
import useRoutes from '@/app/hooks/useRoutes';
import DesktopItem from './DesktopItem';

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
      <nav
        className="
          mt-4
          flex
          flex-col
          justify-between
          "
      >
        <ul
          className="
            flex
            flex-col
            items-center
            space-y-1
          "
        >
          {routes.map(({ label, href, icon, active, onClick }) => (
            <DesktopItem
              key={label}
              href={href}
              label={label}
              icon={icon}
              active={active}
              onClick={onClick}
            />
          ))}
        </ul>
      </nav>
    </div>
  );
}

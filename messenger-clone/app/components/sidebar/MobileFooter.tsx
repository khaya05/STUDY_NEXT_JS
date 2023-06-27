'use client';

import useConversations from '@/app/hooks/useConversations';
import useRoutes from '@/app/hooks/useRoutes';
import MobileItem from './MobileItem';

const MobileFooter = () => {
  const routes = useRoutes();
  const { isOpen } = useConversations();

  if (isOpen) {
    return null;
  }

  return (
    <div
      className="
        fixed
        justify-between
        w-full
        bottom-0
        z-40
        flex
        items-center
        bg-white
        border-t-[1px]
        lg:hidden
      "
    >
      {routes.map(({ href, active, icon, onClick }) => (
        <MobileItem
          key={href}
          href={href}
          active={active}
          icon={icon}
          onClick={onClick}
        />
      ))}
    </div>
  );
};

export default MobileFooter;

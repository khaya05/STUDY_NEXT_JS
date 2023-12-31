'use client'

import Avatar from '@/app/components/Avatar';
import useOtherUser from '@/app/hooks/UseOtherUsers';
import { Conversation, User } from '@prisma/client';
import Link from 'next/link';
import { useMemo, useState } from 'react';
import { HiChevronLeft, HiEllipsisHorizontal } from 'react-icons/hi2';
import ProfileDrawer from './ProfileDrawer';

interface Props {
  conversation: Conversation & { users: User[] };
}

const Header: React.FC<Props> = ({ conversation }) => {
  const otherUser = useOtherUser(conversation);
  const [drawer, setDrawer] = useState(false)

  const statusText = useMemo(() => {
    if (conversation.isGroup) {
      return `${conversation.users.length} members`;
    }

    return 'Active';
  }, [conversation]);
  return (
    <>
      <ProfileDrawer
        data={conversation}
        isOpen={drawer}
        onClick={() => setDrawer(false)}
      />
      <div
        className="
      bg-white
      w-full
      flex
      border-b-[1px]
      sm:px-4
      py-4
      px-4
      lg:px-6
      justify-between
      shadow-sm
      "
      >
        <div className="flex gap-3 items-center">
          <Link
            className="
            lg:hidden
            block
            text-sky-500
            hover:text-sky-600
            transition
            cursor-pointer
          "
            href="/conversations"
          >
            <HiChevronLeft size={32} />
          </Link>
          <Avatar user={otherUser} />
          <div className="flex flex-col">
            <div className="text-sm font-light text-neutral-500">
              {statusText}
            </div>
          </div>
        </div>
        <HiEllipsisHorizontal
          size={32}
          onClick={() => setDrawer(true)}
          className="
          text-sky-500 
          cursor-pointer 
          hover:text-sky-600 
          transition"
        />
      </div>
    </>
  );
};

export default Header;

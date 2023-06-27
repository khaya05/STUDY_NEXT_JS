'use client';

import useConversations from '../hooks/useConversations';
import { EmptyState } from '../components/EmptyState';
import clsx from 'clsx';

export default function Home() {
  const { isOpen } = useConversations();

  return (
    <div
      className={clsx(
        'lg:pl-80 h-full lg:block',
        isOpen ? 'block' : 'hidden'
      )}
    >
      <EmptyState />
    </div>
  );
}

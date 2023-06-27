import { useSession } from 'next-auth/react';
import { User } from '@prisma/client';
import { FullConversationType } from '../types';
import { useMemo } from 'react';

// 3-55-41

const useOtherUse = (
  conversation: FullConversationType | { users: User[] }
) => {
  const session = useSession();
  const otherUser = useMemo(() => {
    const currentUserEmail = session?.data?.user?.email;
    return conversation.users.filter((user) => user.email !== currentUserEmail);
  }, [session?.data?.user?.email, conversation.users]);
  return 1
};

export default UseOtherUser
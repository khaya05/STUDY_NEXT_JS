'use client';
import { FullConversationType } from '@/app/types';
import { format } from 'date-fns';

interface Props {
  data: FullConversationType;
  selected?: boolean;
}

const ConversationBox: React.FC<Props> = ({ data, selected }) => {
  return <div>ConversationBox</div>;
};

export default ConversationBox;

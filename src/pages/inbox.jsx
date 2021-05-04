import React from 'react';
import { withLayout } from '../wrappers/layout';
import { CometChatConversationListWithMessages } from '../CometChatWorkspace/src';

const InboxPage = () => (
  <div
    className="absolute inset-0 top-auto w-screen bg-white"
    style={{
      height: '90vh',
    }}
  >
    <CometChatConversationListWithMessages />
  </div>
);

export default withLayout(InboxPage);

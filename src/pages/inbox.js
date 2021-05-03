import React from 'react';
import { withLayout } from '../wrappers/layout';
import { CometChatGroupListWithMessages } from '../CometChatWorkspace/src';

const InboxPage = () => {
  return (
    <div
      className="w-full"
      style={{
        height: '90vh',
      }}
    >
      <CometChatGroupListWithMessages />
    </div>
  );
};

export default withLayout(InboxPage);

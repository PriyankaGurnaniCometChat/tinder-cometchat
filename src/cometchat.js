import { CometChat } from '@cometchat-pro/chat';

const loginCometChatUser = async (uid) => {
  try {
    const user = await CometChat.login(
      uid,
      process.env.REACT_APP_COMETCHAT_AUTH_KEY,
    );
    console.log('Login Successful:', { user });
  } catch (error) {
    console.log('Login failed with exception:', { error });
  }
};

const logoutCometChatUser = async () => {
  try {
    await CometChat.logout();
    console.log('Logout Successful:');
  } catch (error) {
    console.log('Login failed with exception:', { error });
  }
};

const registerCometChatUser = async (name, uid) => {
  const user = new CometChat.User(uid);

  user.setName(name);

  try {
    const createdUser = await CometChat.createUser(
      user,
      process.env.REACT_APP_COMETCHAT_AUTH_KEY,
    );
    console.log('user created', createdUser);
  } catch (error) {
    console.log('Register failed with exception:', { error });
  }
};

const sendCometChatMessage = async (ratedPersonId, messageText) => {
  const receiverType = CometChat.RECEIVER_TYPE.USER;
  const textMessage = new CometChat.TextMessage(
    ratedPersonId,
    messageText,
    receiverType,
  );

  CometChat.sendMessage(textMessage).then(
    (message) => {
      console.log('Message sent successfully:', message);
    },
    (error) => {
      console.log('Message sending failed with error:', error);
    },
  );
};

export {
  CometChat,
  loginCometChatUser,
  registerCometChatUser,
  sendCometChatMessage,
  logoutCometChatUser,
};

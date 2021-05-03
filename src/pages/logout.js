import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import firebase from 'firebase/app';
import 'firebase/auth';
import { logoutCometChatUser } from '../cometchat';

export default function LogoutPage() {
  let history = useHistory();

  useEffect(() => {
    firebase
      .auth()
      .signOut()
      .then(async () => {
        await logoutCometChatUser();
        history.push('/');
      });
  }, []);

  return <div></div>;
}

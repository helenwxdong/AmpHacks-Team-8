import React, { useRef, useState } from 'react';
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

firebase.initializeApp({
  apiKey: 'AIzaSyDyNe-Y7jPNDyhx6zQO2khrsNsZnNU0Gzw',
  authDomain: 'kandor-chat.firebaseapp.com',
  databaseURL: 'https://kandor-chat.firebaseio.com',
  projectId: 'kandor-chat',
  storageBucket: 'kandor-chat.appspot.com',
  messagingSenderId: '602888416312',
  appId: '1:602888416312:web:e5621460edc8fa9dc18acd',
});

const auth = firebase.auth();
const firestore = firebase.firestore();

function SignIn() {
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  };

  return (
    <>
      <button className='SignIn' onClick={signInWithGoogle}>
        Sign in with Google
      </button>
      <p>Please follow community guidelines when messaging in the chat!</p>
    </>
  );
}

function SignOut() {
  return (
    auth.currentUser && (
      <button className='SignIn' onClick={() => auth.signOut()}>
        Sign Out
      </button>
    )
  );
}

function ChatRoom() {
  const dummy = useRef();
  const messagesRef = firestore.collection('messages');
  const query = messagesRef.orderBy('createdAt').limit(25);

  const [messages] = useCollectionData(query, { idField: 'id' });

  const [formValue, setFormValue] = useState('');

  const sendMessage = async (e) => {
    e.preventDefault();

    const { uid, photoURL } = auth.currentUser;

    await messagesRef.add({
      text: formValue,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      uid,
      photoURL,
    });

    setFormValue('');
    dummy.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <main className='MainChat'>
        {messages &&
          messages.map((msg) => <ChatMessage key={msg.id} message={msg} />)}

        <span ref={dummy}></span>
      </main>

      <form className='TextInput' onSubmit={sendMessage}>
        <input
          value={formValue}
          onChange={(e) => setFormValue(e.target.value)}
          placeholder="Let's chat!"
        />

        <button type='Send' disabled={!formValue}>
          Send
        </button>
      </form>
    </>
  );

  function ChatMessage(props) {
    const { text, uid, photoURL } = props.message;

    const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received';

    return (
      <>
        <div className={`message ${messageClass}`}>
          <img
            className='profile'
            src={
              photoURL ||
              'https://api.adorable.io/avatars/23/abott@adorable.png'
            }
            alt=''
          />
          <p className='Text'>{text}</p>
        </div>
      </>
    );
  }
}

const Chat = () => {
  const [user] = useAuthState(auth);
  return (
    <div>
      <header>
        <h1>Message</h1>
        <SignOut />
      </header>

      <section>{user ? <ChatRoom /> : <SignIn />}</section>
    </div>
  );
};

export default Chat;

import React, {useEffect, useState} from 'react';
import {addDoc, collection, getDocs, getFirestore, serverTimestamp, orderBy, query} from "firebase/firestore";
import {useAuth} from "../../firebase";
import bg from '../../assets/bg.png'
import './style.css';

const Chat = () => {
  const [messageText, setMessageText] = useState('');
  const [messages, setMessages] = useState([]);
  const user = useAuth();
  const db = getFirestore();
  const collectionRef = collection(db, 'messages');
  const q = query(collection(db, "messages"), orderBy("createdAt", 'asc'));
  getDocs(q)
    .then((snapshot) => {
      let productsData = [];
      snapshot.docs.forEach((doc) => {
        productsData.push({...doc.data(), id: doc.id})
      })
      setMessages(productsData);
    }).catch((e) => console.log(e.message))

  const formSubmit = (e) => {
    e.preventDefault();
    addDoc(collectionRef, {
      text: messageText,
      userId: user.uid,
      createdAt: serverTimestamp()
    }).then(() => setMessageText(''))
  }
  const messageJSX = messages.map((msg) => {
    const position = user.uid === msg.userId ? "messageRight" : "messageLeft";
    return (
      <div className={"message " + position} key={msg.id}>
        <p>{msg.text}</p>
      </div>
    )
  })
  return (
    <div className='chatContainer container'>
      <div className="chat">
        <div className="messages outer" style={{backgroundImage: `url(${bg})`}}>
          <div className="inner">
            {messageJSX}
          </div>
        </div>
        <form className="sendMessage" onSubmit={formSubmit}>
          <input
            type="text"
            placeholder="Message..."
            value={messageText}
            onChange={(e) => setMessageText(e.target.value)}/>
          <button type="submit">send</button>
        </form>
      </div>
    </div>
  );
};

export default Chat;

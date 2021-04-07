import { Button, Input, InputLabel } from '@material-ui/core';
import { FormControl } from '@material-ui/core';
import firebase from 'firebase'
import FlipMove from 'react-flip-move';

import { useEffect, useState } from 'react';
import './App.css';
import db from './firebase';
import Message from './Message';
import SendIcon from '@material-ui/icons/Send';
import { IconButton } from '@material-ui/core';


function App() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([])
  const [username, setUsername] = useState('')

  useEffect(() => {
    // This will run once the app components loads...

    db.collection('messages')
    .orderBy('timestamp', 'desc')
    .onSnapshot(snapshot => {
      setMessages(snapshot.docs.map(doc => ({id:doc.id, message: doc.data()})))
    });
  }, [])

  useEffect(() => {
    setUsername(prompt('Please enter your First Name'))
  }, [])
console.log(username);




  const sendMessage = (e) => {
    // all the logic to send a message goes here
    e.preventDefault();

    db.collection('messages').add({
      message: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })



    setInput('');
    


  }
  return (
    <div className="App">
      <div className="heading__container">
        <div className="heading__logo">
        <img src="https://i.pinimg.com/originals/98/1a/ea/981aea34c2ce10a6b39e3192a518b88e.png" alt=""/>

        <h1 className="heading">Message Your friend</h1>

        </div>
     
        <h4 className="user__name">
          Welcome {username}
        </h4>
      </div>
      
      <form action="" className="app__form"> 
      <FormControl className="app__form__control">
        <Input placeholder="enter a Messsage" className="app__form__input" value={input} onChange={(e) => setInput(e.target.value)} />
        {/* <Button disabled={!input} variant="contained" color="primary" type='submit' onClick={sendMessage}>Send Message</Button> */}
        <IconButton className="app__form__button"  disabled={!input} variant="contained" color="primary" type='submit' onClick={sendMessage}>
          <SendIcon />
        </IconButton>
      </FormControl>

      </form>
     

     
      {/* messages themselves */}
      <div className="app__messages">
      <FlipMove>
      {
        messages.map(({id, message}) => (
          <Message key={id} message={message} username={username} />
        ))
      }
      </FlipMove>

      </div>
      

     



    </div>
  );
}

export default App;

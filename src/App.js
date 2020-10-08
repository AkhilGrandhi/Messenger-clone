import { FormControl,  Input, } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import db from './firebase'
import './App.css';
import Message from './Message';
import firebase from 'firebase';
import FlipMove from 'react-flip-move';
import SendIcon from '@material-ui/icons/Send';
import { IconButton } from '@material-ui/core';
import Logo from './facebook-messenger-logo-png.png';


function App() {

  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
  
    ]);
  const [username, setUsername] = useState('');

 useEffect(() => {
  //Run code
  setUsername(prompt('Please enter your name:'))
 },[])//condition

 useEffect(() => {
  //code for fetching data from database
  db.collection('messages')
    .orderBy('timestamp', 'desc')
    .onSnapshot(snapshot => {
      setMessages(snapshot.docs.map(doc => ({id: doc.id, message:doc.data()})))
  })
 }, [])
 

  const sendMessage = (event) => {
    //Main logic for inserting messages
    event.preventDefault();

    db.collection('messages').add({
      message: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    })

    //without firebase work
    // setMessages([
    //   ...messages, {username: username, message: input}
    // ]);
    setInput('');
  }

  return (
    <div className="App">
      {/* <img src="htttps://facebookbrand.com/wp-content/uploads/2018/09/Header-e1538151782912.png?w=100&h=100" /> */}
      <img className="app__logo" src={Logo} alt="MyBurger" />
      <h2>Messenger Clone</h2>
      <h3>Welcome..! {username}</h3>

      <form className="app__form">
        <FormControl className="app__formControls">          
          <Input className="app__input" placeholder='Enter a message...' value={input} onChange={event => setInput(event.target.value)} /> 
          <IconButton className="app__iconButton"
                disabled={!input} 
                variant="contained" 
                color="primary" 
                type='submit' 
                onClick={sendMessage}
          >
            <SendIcon />
          </IconButton>
          
        </FormControl>        
      </form>

      {/* messages displaying using map */}

      <FlipMove>
          {
            messages.map(({id,message}) => (
            <Message key={id} username={username} message={message} />  
            ))
          }
      </FlipMove>

      


    </div>    
  );
}

export default App;

import React, { useState, useEffect } from 'react';
import { FormControl, InputLabel, Input, FormHelperText} from '@material-ui/core';
import { Button } from '@material-ui/core';
import Message from "./Message";
import db from './firebase'
import firebase from 'firebase'
import FlipMove from 'react-flip-move'
import SendIcon from '@material-ui/icons/Send';
import { IconButton } from '@material-ui/core';

import './App.css';

function App() {
  const [ input, setInput ] = useState('');
  const [ messages, setMessages ] = useState([]);
  const [ username, setUsername ] = useState('')

  useEffect(() => {
    //run once when app component loads
    db.collection('messages').orderBy('timestamp', 'asc').onSnapshot( snapshot => {
      setMessages(snapshot.docs.map( doc => ({id:doc.id, message:doc.data()})))
    })
  }, [])

  useEffect(() =>{
    setUsername(prompt('Please enter your Username'))
  }, []) 

  console.log(input)
  console.log(messages)

  const sendMessage = (event) => {
    event.preventDefault()

    db.collection('messages').add({
      message:input,
      username:username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    setInput('') 
  }

  return (
    <div className="App">
      <img src='https://res.cloudinary.com/dbureb5gj/image/upload/v1597249294/Messenger_Logo_Color_RGB_q5jvt3.svg' style={{ marginTop: '100px', height:'120px' }} />
      <h2>Welcome {username}</h2>
      
      <form className="App_form">
        
      <FormControl className='App_formControl'>
  
        <Input className="App_input"  placeholder='Enter a  message...' value={ input } onChange={ event => setInput(event.target.value) } />

        <IconButton className="App_iconButton"  variant="contained" color="primary" type='submit' disabled={!input} onClick={ sendMessage } >
          <SendIcon />
        </IconButton>

        
      </FormControl>

      
      </form>

      <FlipMove className='App_flipMove'>
      {
        messages.map( ({id, message}) => (
        <Message key={id} username={ username } message={ message } ></Message>
        ))
      }
      </FlipMove>



    </div>
  );
}

export default App;

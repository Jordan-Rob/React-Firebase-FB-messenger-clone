import React, { useState, useEffect } from 'react';
import { FormControl, InputLabel, Input, FormHelperText} from '@material-ui/core';
import { Button } from '@material-ui/core';
import Message from "./Message";
import db from './firebase'
import firebase from 'firebase'
import './App.css';

function App() {
  const [ input, setInput ] = useState('');
  const [ messages, setMessages ] = useState([]);
  const [ username, setUsername ] = useState('')

  useEffect(() => {
    //run once when app component loads
    db.collection('messages').orderBy('timestamp', 'asc').onSnapshot( snapshot => {
      setMessages(snapshot.docs.map( doc => doc.data()))
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

    setMessages([...messages, { username: username, text: input }])
    setInput('') 
  }

  return (
    <div className="App">

      <h2>Welcome {username}</h2>

      <FormControl>
        <InputLabel >Enter message</InputLabel>
        <Input value={ input } onChange={ event => setInput(event.target.value) } />
        <Button variant="contained" color="primary" type='submit' disabled={!input} onClick={ sendMessage } >Send</Button> 
      </FormControl>

      
    

      {
        messages.map(message => (
        <Message username={ username } message={ message } ></Message>
        ))
      }


    </div>
  );
}

export default App;

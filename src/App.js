import React, { useState } from 'react';
import './App.css';

function App() {
  const [ input, setInput ] = useState('');
  const [ messages, setMessages ] = useState([]);

  console.log(input)
  console.log(messages)

  const sendMessage = (event) => {
    event.preventDefault()
    setMessages([...messages, input])
    setInput('')
  }

  return (
    <div className="App">

      <form>
        <input value={ input } onChange={ event => setInput(event.target.value) } ></input>
        <button type='submit' onClick={ sendMessage } >Send</button> 
      </form>
    

      {
        messages.map(message => (
        <p>{message}</p>
        ))
      }


    </div>
  );
}

export default App;

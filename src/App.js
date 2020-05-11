import React, { useState } from 'react';
import './App.css';
import Form from './Components/UserForm'
import Display from './Components/Display'


function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [firstError, setFirstError] = useState("");
  const [lastError, setLastError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmError, setConfirmError] = useState("");


  const handleSubmit = (e) => {
  e.preventDefault();
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
    setConfirm("");
  }
  
  return (
    <div className="App">
      <div className="row m-5">
        <div>
          <Form
            fName={firstName}
            lName={lastName}
            email={email}
            password={password}
            confirm={confirm} 
            handleFirst={setFirstName}
            handleLast={setLastName}
            handleEmail={setEmail}
            handlePassword={setPassword}
            handleConfirm={setConfirm}
            addUser={handleSubmit}
            setFirstError={setFirstError}
            setLastError={setLastError}
            setEmailError={setEmailError}
            setPasswordError={setPasswordError}
            setConfirmError={setConfirmError}
          />
        </div>
        <div>
          <Display
            fName={firstError}
            lName={lastError}
            email={emailError}
            password={passwordError}
            confirm={confirmError} 
          />
        </div>
      </div>
      
    </div>
  );
}

export default App;
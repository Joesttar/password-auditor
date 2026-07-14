import './App.css';
import { useState } from 'react';
import PasswordInput from './components/PasswordInput';
import  StrengthMeter  from './components/StrengthMeter';
import PasswordGenerator from './components/PasswordGenerator';
import BreachChecker from './components/BreachChecker';


function App() {
  const [password, setPassword] = useState('');
  const handlePasswordChange = (newPassword) => {
    setPassword(newPassword);
  };
  return (
    <div className='app-container'>
      <h1 className='titulo'>Password Auditor</h1>
      <PasswordInput password={password} onPasswordChange={handlePasswordChange}/>
      <StrengthMeter password={password}/>
      <PasswordGenerator />
      <BreachChecker password={password}/>
    </div>
  )
};

export default App

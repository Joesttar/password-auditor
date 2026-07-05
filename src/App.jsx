import { useState } from 'react';
import PasswordInput from './components/PasswordInput';
import  StrengthMeter  from './components/StrengthMeter';

function App() {
  const [password, setPassword] = useState('');
  const handlePasswordChange = (newPassword) => {
    setPassword(newPassword);
  };
  return (
    <div>
      <h1>Password Auditor</h1>
      <PasswordInput password={password} onPasswordChange={handlePasswordChange}/>
      <StrengthMeter password={password}/>
    </div>
  )
};

export default App

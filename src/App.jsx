import { useState } from 'react';
import PasswordInput from './components/PasswordInput';

function App() {
  const [password, setPassword] = useState('');
  const handlePasswordChange = (newPassword) => {
    setPassword(newPassword);
  };
  return (
    <div>
      <h1>Password Auditor</h1>
      <PasswordInput password={password} onPasswordChange={handlePasswordChange}/>
    </div>
  )
};

export default App

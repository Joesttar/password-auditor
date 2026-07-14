import { useState } from "react";
import armarContraseña from '../utils/passwordGenerator';


const PasswordGenerator = () => {
    const [contraseñaGenerada, setContraseñaGenerada] = useState('');
    
    const handleGenerarContraseña = () => {
        const nuevaContraseña = armarContraseña(16);
        setContraseñaGenerada(nuevaContraseña);
    }

    return ( 
    <div>
        <p>{contraseñaGenerada}</p>
        <button className="btn" onClick={handleGenerarContraseña}>Generar contraseña</button>
     </div>
    )
}

export default PasswordGenerator;
import { useState } from "react";
import { hashPassword } from "../utils/hashPassword";
import { checkPasswordBreach } from "../utils/checkPasswordBreach";

const BreachChecker = ({password}) => {
    const [resultado, setResultado] = useState(null);
    const [cargando, setCargando] = useState(false);

const handleVerificar = async () => {
    setCargando(true);
    
    const hash = await hashPassword(password);
    const resultadoBreach = await checkPasswordBreach(hash);

    setResultado(resultadoBreach);
    setCargando(false);
    }
return (
        <div>
            <button className="btn" onClick={handleVerificar}>Verificar contraseña</button>
            {cargando && <p>Verificando...</p>}
            {resultado && resultado.breached && <p>Esta contraseña ha sido filtrado {resultado.count}veces</p>}
            {resultado && !resultado.breached && <p>No aparecen filtraciones conocidas</p>}
        </div>)
}

export default BreachChecker;
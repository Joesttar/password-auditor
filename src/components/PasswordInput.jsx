
//Creamos la funcion del componente llamada PasswordInput
const PasswordInput = ({password, onPasswordChange}) => {
    return (
        < input 
        type="password" 
        value={password} 
        onChange={(event) => onPasswordChange(event.target.value)}
        placeholder="Escribe tu contraseña"/>
    )
}


export default PasswordInput;

import { calculatePasswordStrength } from '../utils/strengthCalculator';


const StrengthMeter = ({password}) => {
    if (!password) {
        return null
    }
    const {score, label} = calculatePasswordStrength(password)
    const colors = {
        Debil: 'red',
        Regular: 'orange',
        Fuerte: 'green'
    }

    const currentColor = colors[label];
    //Formula para convertir cualquier valor en una escala
    let porcentajeBarra = (score / 60) * 100
    
    return (
        <div>
        <p style={{ color:currentColor }} >{label}</p>
        
        <div style={{width: '40%', backgroundColor:'#e0e0e0', height:'10px', margin: '0 auto'}}> 
         <div style={{width:`${porcentajeBarra}%`, backgroundColor:currentColor, height:'100%'}}></div>
        </div>
        </div>
    );
}




export default StrengthMeter;
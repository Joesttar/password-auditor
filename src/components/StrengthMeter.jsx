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

    return (
        <div>
        <p style={{ color:currentColor }}>{label}</p>
        </div>
    );
}


export default StrengthMeter;
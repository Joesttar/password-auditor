const mayusculas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const minusculas = 'abcdefghijklmnopqrstuvwxyz';
const numeros = '0123456789';
const simbolos = '!"#$%&/()=?¡'

const caracteristicas = mayusculas + minusculas + numeros + simbolos;

const armarContraseña = longitud => {
    let acumulador = ''
    for ( let i = 0; i < longitud; i++){
       const indiceAletorio =  Math.floor(Math.random() * caracteristicas.length);
       acumulador += caracteristicas[indiceAletorio];
    }
    return acumulador
}

export default armarContraseña;
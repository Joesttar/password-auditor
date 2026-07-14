//Para Verificar las veces que una contraseña se filtro
export async function checkPasswordBreach(hash) {
    const prefix = hash.slice(0, 5);
    const suffix = hash.slice(5);

    const response = await fetch('https://api.pwnedpasswords.com/range/' + prefix );
    const text = await response.text()
    
    const lines = text.split('\n');
    const findline = lines.find(line => line.startsWith(suffix));

    if(findline) {
        const count = findline.split(':')[1];
        return {
            breached: true,
            count: count
        }
    } else {
        return {
            breached: false,
            count: 0
        }
    }
};

/* En esta cuando llamamos a la funcion el parametro que utilizamos es
el numero hexadecimal que nos da al poner la contraseña en nuestra funcion
hashPassword en la consola de DevTools*/
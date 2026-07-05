
export function calculatePasswordStrength(password) {
    let score = 0;
    if (password.length >= 8){
        score += 10;
    }

    if (password.length >= 12){
        score += 10;
    }

    if (/[A-Z]/.test(password)){
        score += 10;
    }

    if (/[a-z]/.test(password)){
        score += 10;
    }

    if (/[0-9]/.test(password)){
        score += 10;
    }

    if (/[!"#$%&/()=]/.test(password)){
        score += 10;
    }

    const notPasswords = ['123456', 'password', 'qwerty', 'abc123', '111111', '123123', 'admin', 'iloveyou', 'welcome']
    
    if (notPasswords.includes(password.toLowerCase())){
        score = 0;
    }

    let label;

    if (score < 31){
        label = 'Debil';
    } else if (score < 51){
        label = 'Regular';
    } else {
        label = 'Fuerte';
    }

    return {
        score,
        label
    };
};


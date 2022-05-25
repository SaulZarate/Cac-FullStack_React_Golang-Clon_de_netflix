export function errorCodeToMessage(code, message){
    let messageFinale = ''
    switch (code) {
        case 'auth/weak-password':
            messageFinale = 'La contraseña debe tener más de 6 caracteres'
            break;
        case 'auth/invalid-email':
            messageFinale = 'El email no es valido'
            break;
        case 'auth/email-already-in-use':
            messageFinale = 'El email ingresado ya esta registrado'
            break;
        case 'auth/user-not-found':
            messageFinale = 'El usuario no existe'
            break;
        case 'auth/wrong-password':
            messageFinale = 'La contraseña es incorrecta'
            break;
        default:
            messageFinale = message
            break;
    }
    return messageFinale
}